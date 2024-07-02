
const ErrorPage = ({ onReload }) => {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <p className="text-red-500 mb-4">
          Oops! Algo deu errado!! Por Favor, cheque sua conexão com a internet.
        </p>
        <button
          onClick={onReload}
          className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-green-300"
        >
          Recarregar
        </button>
      </div>
    );
  };
  
  export default ErrorPage;