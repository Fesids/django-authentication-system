import React, { useEffect, useState } from "react";
import { FiPlus, FiTrash } from "react-icons/fi";
import { motion } from "framer-motion";
import { FaFire } from "react-icons/fa";
import { createProdutos } from "../../../../context/functions/produtos/produtosFunction";





export const CreateProdutoForm = () => {
  return (
    <div className="h-screen w-full bg-gray-100 text-neutral-50">
      <Board />
    </div>
  );
};

const Board = () => {

      
       
     const [cards, setCards] = useState([]);
     const [produtosToAdd, setProdutosToAdd] = useState([]);

    

    return (
      <div className="flex h-full w-full gap-3  p-12 overflow-x-auto">
        <Column
          title="Adcionar novos produtos"
          column="produtos"
          headingColor="text-neutral-600"
          cards={cards}
          setCards={setCards}
          produtosToAdd={produtosToAdd}
          setProdutosToAdd={setProdutosToAdd}
          
        />
        
       
        <BurnBarrel setCards={setCards} setProdutosToAdd={setProdutosToAdd} />
      </div>
    )
    

};

const Column = ({ title, headingColor, cards, column, setCards, produtosToAdd, setProdutosToAdd}) => {
  const [active, setActive] = useState(false);
  //const [produtosToAdd, setProdutosToAdd] = useState([])
  console.log(produtosToAdd)
  const handleDragStart = (e, card) => {
    e.dataTransfer.setData("cardId", card.id);
  };

  const handleDragEnd = (e) => {
    const cardId = e.dataTransfer.getData("cardId");

    setActive(false);
    clearHighlights();

    const indicators = getIndicators();
    const { element } = getNearestIndicator(e, indicators);

    const before = element.dataset.before || "-1";

    if (before !== cardId) {
      let copy = [...cards];

      let cardToTransfer = copy.find((c) => c.id === cardId);
      if (!cardToTransfer) return;
      cardToTransfer = { ...cardToTransfer, column };

      copy = copy.filter((c) => c.id !== cardId);

      const moveToBack = before === "-1";

      if (moveToBack) {
        copy.push(cardToTransfer);
      } else {
        const insertAtIndex = copy.findIndex((el) => el.id === before);
        if (insertAtIndex === undefined) return;

        copy.splice(insertAtIndex, 0, cardToTransfer);
      }

      setCards(copy);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    highlightIndicator(e);

    setActive(true);
  };

  const clearHighlights = (els) => {
    const indicators = els || getIndicators();

    indicators.forEach((i) => {
      i.style.opacity = "0";
    });
  };

  const highlightIndicator = (e) => {
    const indicators = getIndicators();

    clearHighlights(indicators);

    const el = getNearestIndicator(e, indicators);

    el.element.style.opacity = "1";
  };

  const getNearestIndicator = (e, indicators) => {
    const DISTANCE_OFFSET = 50;

    const el = indicators.reduce(
      (closest, child) => {
        const box = child.getBoundingClientRect();

        const offset = e.clientY - (box.top + DISTANCE_OFFSET);

        if (offset < 0 && offset > closest.offset) {
          return { offset: offset, element: child };
        } else {
          return closest;
        }
      },
      {
        offset: Number.NEGATIVE_INFINITY,
        element: indicators[indicators.length - 1],
      }
    );

    return el;
  };

  const getIndicators = () => {
    return Array.from(document.querySelectorAll(`[data-column="${column}"]`));
  };

  const handleDragLeave = () => {
    clearHighlights();
    setActive(false);
  };

  const filteredCards = cards.filter((c) => c.column === column);
  //console.log(produtosToAdd)
  
  
 
  

  return (
    <div className="w-96 shrink-0">
      
     

      <div className="mb-3 flex items-center justify-between">
        <h3 className={`font-bold text-2xl ${headingColor}`}>{title}</h3>
        <span className="ml-2 rounded text-lg text-neutral-600">
          {filteredCards.length}
        </span>
      </div>
      <div
        onDrop={handleDragEnd}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={`h-full w-full transition-colors ${
          active ? "bg-neutral-800/50" : "bg-neutral-800/0"
        }`}
      >
        {filteredCards.map((c) => {
          return <Card key={c.id} {...c} handleDragStart={handleDragStart} />;
        })}
        <DropIndicator beforeId={null} column={column} />
        <AddCard column={column} setCards={setCards} setProdutosToAdd={setProdutosToAdd}/>
      </div>
      <button className="btn bg-green-500 text-gray-50 px-5 py-2 rounded-md" onClick={() => createProdutos(produtosToAdd)}>Criar</button>
    </div>
  );
};

const Card = ({ title, id, column, handleDragStart }) => {
  return (
    <div className="w-full">
      <DropIndicator beforeId={id} column={column} />
      <motion.div
        layout
        layoutId={id}
        draggable="true"
        onDragStart={(e) => handleDragStart(e, { title, id, column })}
        className="cursor-grab rounded border border-neutral-700 bg-neutral-800 p-3 active:cursor-grabbing"
      >
        <p className="text-sm text-neutral-100">{title}</p>
      </motion.div>
    </div>
  );
};

const DropIndicator = ({ beforeId, column }) => {
  return (
    <div
      data-before={beforeId || "-1"}
      data-column={column}
      className="my-0.5 h-0.5 w-full bg-violet-400 opacity-0"
    />
  );
};

const BurnBarrel = ({ setCards, setProdutosToAdd }) => {
   const [active, setActive] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setActive(true);
  };

  const handleDragLeave = () => {
    setActive(false);
  };

  const handleDragEnd = (e) => {
    const cardId = e.dataTransfer.getData("cardId");
  

    setCards((pv) => pv.filter((c) => c.id !== cardId));

    setProdutosToAdd((prevProducts) => prevProducts.filter((product) => product.id !== cardId));

    

    setActive(false);
  };

  return (
    <div
      onDragEnd={handleDragEnd}
      onDrop={handleDragEnd}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      className={`mt-10 grid h-56 w-56 shrink-0 place-content-center rounded border text-3xl ${
        active
          ? "border-red-800 bg-red-800/20 text-red-500"
          : "border-neutral-500 bg-neutral-500/20 text-neutral-500"
      }`}
    >
      {active ? <FaFire className="animate-bounce" /> : <FiTrash />}
    </div>
  );
};

const AddCard = ({ column, setCards, setProdutosToAdd}) => {
  const [text, setText] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [codProdCliente, setCodProdCliente] = useState("");
  const [descEstendida, setDescEstendida] = useState("")


  const [adding, setAdding] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text.trim().length) return;

    

    const newProduto = {
        "id": Math.random().toString(),
        "cnpj":cnpj,
        "cod_prod_cliente":codProdCliente,
        "id_classe":9999,
        "status_apresentacao_tela_touch":0,
        "desc_estendida":text,
        "dt_entrada_do_registro":"2023-10-01",
        "seq_aprovacao_pela_verificacao":null,
        "status_existe_classe_correspondente":null
    }

    const newCard = {
      column,
      title: text.trim(),
      id: newProduto.id,
    };

    setCards((pv) => [...pv, newCard]);
    setProdutosToAdd((pd) => [...pd, newProduto])

    setAdding(false);
  };

  return (
    <>
      {adding ? (
        <motion.form layout onSubmit={handleSubmit}>
               <input
               onChange={(e) => setCodProdCliente(e.target.value)}
                autoFocus
                placeholder="Inserir código do produto..."
                className="w-full rounded border border-violet-400 bg-violet-400/20 p-3 text-sm text-black placeholder-violet-300 focus:outline-0"
          />
             <input
                onChange={(e) => setCnpj(e.target.value)}
                autoFocus
                placeholder="Inserir CNPJ..."
                className="w-full rounded border border-violet-400 bg-violet-400/20 p-3 text-sm text-black placeholder-violet-300 focus:outline-0"
          />
          <textarea
            onChange={(e) => setText(e.target.value)}
            autoFocus
            placeholder="Descrição do produto..."
            className="w-full rounded border border-violet-400 bg-violet-400/20 p-3 text-sm text-black placeholder-violet-300 focus:outline-0"
          />
          <div className="mt-1.5 flex items-center justify-end gap-1.5">
            <button
              onClick={() => setAdding(false)}
              className="px-3 py-1.5 text-xs text-red-400 transition-colors hover:text-gray-400"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="flex items-center gap-1.5 rounded bg-neutral-50 px-3 py-1.5 text-xs text-neutral-950 transition-colors hover:bg-neutral-300"
            >
              <span>Adicionar</span>
              <FiPlus />
            </button>
          </div>
        </motion.form>
      ) : (
        <motion.button
          layout
          onClick={() => setAdding(true)}
          className={` flex w-full items-center gap-1.5 px-3 py-1.5 text-xs text-neutral-400 transition-colors hover:text-gray-400`}
        >
          <span>Adicionar Novo produto</span>
          <FiPlus />
        </motion.button>
      )}
    </>
  );
};

//const data =fetchData(`${mainURI}/usuarios`).then(resp => setUsers(resp))






