//const fs = require('fs');
//const path = require('path');
//const axios = require('axios');
const cnpj = {"cnpj":"1234"};

import axios from 'axios';
import {createReadStream} from 'node:fs'
import path from 'node:path';

let formataPreco = function (precoNaoFormatado) {
    return precoNaoFormatado/100
}

function obj2tabelaProd(produtos){
    return new Promise((resolve, reject)=>{
    let produtos_organizados = [];
    for (let produto in produtos) {
        let produtoAtual = produtos[produto];
        let nome_produto_completo = produtoAtual.slice(18, 68).trimEnd();
        if (nome_produto_completo != '') {
            let precoFormatado = formataPreco(produtoAtual.slice(9, 15));
            precoFormatado = precoFormatado == 'N.aN' ? 0 : precoFormatado;

            let produtoCarregado = {
                "desc_estendida": nome_produto_completo,
                "nome_vet": nome_produto_completo.split(' ')[0],
                "nome_vet_2": nome_produto_completo.split(' ')[1],
                "imagem_loja": "imagem_padrao.png",
                "departamento": produtoAtual.slice(0, 2),
                "embalagem": produtoAtual.slice(2, 3) == 0 ? 'kg' : 'un',
                "validade": produtoAtual.slice(15, 18),
                "cod_prod_cliente": produtoAtual.slice(3, 9),
                "preco": precoFormatado,
            }
            produtos_organizados.push(produtoCarregado);
        }
    }
    resolve (produtos_organizados)
    })
}


/*
*função responavel por ler o Arquivo itens MGV e logo em seguida 
*checar se todos os dados estão presentes no banco
*/
export function readItensMGV(filePath) {
    return new Promise((resolve, reject)=>{
        const readableStream = fs.createReadStream(filePath, 'utf-8');
        produtosDB().then((produtosDB)=>{
            // const  = response.response        
            let tabela_produtos = []
            let tabelaProdutosDict;
            readableStream.on('error', function (error) {
                console.log(`error: ${error.message}`);
            })
            readableStream.on('data', async (chunk) => {
                let uploadProdutos = [];
                let chunkItensMGV = await  obj2tabelaProd(chunk.split(/\r?\n/))
                for(produtoMGV of chunkItensMGV){
                    //se a chave do objeto existe, significa que o item está no banco
                    const key = Object.keys(produtosDB).find(key => produtosDB[key].cod_prod_cliente == produtoMGV.cod_prod_cliente)
                    if(key){
                        produtoMGV.id_classe = produtosDB[key].id_classe
                        delete produtoMGV.desc_estendida
                    }else{
                        // caso o item não tenha sido encontrado na base, faça um request para o mesmo ser inserido no banco                     
                        produtoMGV.cnpj = cnpj.cnpj
                        uploadProdutos.push(produtoMGV)
                        // caso contrario concat com o array 
                    }

                }
                // console.log(uploadProdutos.length)
                tabela_produtos = tabela_produtos.concat(chunkItensMGV)

                if(uploadProdutos.length){
                axios({method: 'put', url:"http://localhost:8000/api/produtosClientes/insert", data:uploadProdutos, responseType:JSON}).then((response)=>{
                    const itensCadastrados = JSON.parse(response.data)
                    resolve(itensCadastrados)
                }).catch((error)=>{
                    console.log(error)
                    reject(error)
                })
                }

            })
            
            readableStream.on('end', ()=>{
                // console.log(tabela_produtos)
                tabelaProdutosDict = JSON.stringify(tabela_produtos, null)
                                                        .replace('[', "")
                                                        .replace(']', "")
                                                        .replaceAll('},', "}\n");
                fs.writeFileSync('tabela_produtos.txt', tabelaProdutosDict, 'utf-8')
            })
        })
    })

}

/*
função para buscar os itens dio banco */
function produtosDB(){
    return new Promise((resolve, reject)=>{
        axios({method: 'post', url:"http://localhost:8000/api/tabelaProdutos", data:cnpj, responseType:JSON}).then((response)=>{
            const itensCadastrados = JSON.parse(response.data)
            resolve(itensCadastrados)
        }).catch((error)=>{
            console.log(error)
            reject(error)
        })
    })
}
// readItensMGV()
//readItensMGV('./src/cargateste/ITENSMGV.txt')

