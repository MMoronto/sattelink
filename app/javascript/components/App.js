import React, {Component} from 'react'
import { Route, Switch } from 'react-router-dom'

const App = () => {
    return <div>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/" component={About} />
            <Route exact path="/" component={Contact} />
        </Switch>
    </div>
}

export default App