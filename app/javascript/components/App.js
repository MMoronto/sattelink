import React, {Component} from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'

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