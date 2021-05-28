import React from 'react'

// Dependencias
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Componentes
import Login from '../pages/Login'

// Contexto
import { AppContextProvider } from '../context/AppContext'

const MainApp = () => {
    return (
        <AppContextProvider>
            <Router basename={'nynweb'}>
                <Switch>
                    <Route exact path='/' component={Login} />
                    <Route exact path='/login' component={Login} />
                </Switch>
            </Router>
        </AppContextProvider>
    )
}

export default MainApp
