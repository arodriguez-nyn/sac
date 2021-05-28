import React, { useState, createContext } from 'react'

const AppContext = createContext()

export const AppContextProvider = ({ children }) => {
    const [registroActual, setRegistroActual] = useState(null)
    const [registroCreado, setRegistroCreado] = useState(false)
    const [registroBorrado, setRegistroBorrado] = useState(false)
    const [registroModificado, setRegistroModificado] = useState(false)

    const [paginaActual, setPaginaActual] = useState(null)
    const [filtroActual, setFiltroActual] = useState('')
    const [usuario, setUsuario] = useState(null)
    // const [camposFiltro, setCamposFiltro] = useState({
    //     FICGEN: 0,
    //     DIRECC: '',
    //     LOCALI: '',
    //     PROSOL: '',
    // })
    const [ordenacion, setOrdenacion] = useState(null)

    const guardaRegistroActual = registro => {
        setRegistroActual(registro)
    }

    const guardaFiltroActual = filtro => {
        setFiltroActual(filtro)
    }

    const guardaUsuario = usuario => {
        setUsuario(usuario)
    }

    const guardaOrdenacion = ordenacion => {
        setOrdenacion(ordenacion)
    }

    return (
        <AppContext.Provider
            value={{
                registroActual,
                registroCreado,
                registroBorrado,
                registroModificado,
                paginaActual,
                filtroActual,
                ordenacion,
                usuario,
                //camposFiltro,
                guardaRegistroActual,
                setRegistroCreado,
                setRegistroBorrado,
                setRegistroModificado,
                setPaginaActual,
                guardaFiltroActual,
                guardaOrdenacion,
                guardaUsuario,
                //setCamposFiltro,
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export default AppContext
