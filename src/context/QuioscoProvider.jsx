import { createContext,useState } from 'react';
import { categorias as categoriasDB } from "../data/categorias"
const QuioscoContext = createContext();

const QuioscoProvider = ({children}) => {
    const [categorias, setCategorias] = useState(categoriasDB);
    const [categoriaActual, setCategoriaActual] = useState(categoriasDB[0]);
    const [modal, setModal] = useState(false);
    const [producto, setProducto] = useState({});

    const handleClickCategoria = id => {
        const categoria = categorias.filter( cat => cat.id === id);
        setCategoriaActual(categoria[0]);
    }

    const handleClickModal=()=> {
        setModal(!modal)
    }

    const handleSetProducto = producto => {
        setProducto(producto)
    }

    return (
        <QuioscoContext.Provider value={{
            categorias,
            categoriaActual,
            handleClickCategoria,
            modal,
            handleClickModal,
            producto,
            handleSetProducto
        }}>
            {children}
        </QuioscoContext.Provider>
    )
}

export {
    QuioscoProvider
}

export default QuioscoContext;