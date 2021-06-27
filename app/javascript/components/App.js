import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'

class App extends React.Component {
    render () {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Items} />
                    <Route exact path="/:slug" component="Item" />
                    {/* <Route exact path="/contact" component={Contact} /> */}
                </Switch>
            </div>
        )
    }
}

export default App