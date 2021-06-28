import React from 'react'
import { Route, Switch } from 'react-router-dom'

const App = () => {
    return (
        <Switch>
            <Route exact path="/" component={Items} />
            <Route exact path="/:slug" component={Item} />
        </Switch>
    )
}

export default App