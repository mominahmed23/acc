import React from 'react'
import { BrowserRouter } from 'react-router-dom'

const Routes = () => {
    return (
       <BrowserRouter>
       <Switch>
           <Route path="/" exact component={Dashboard}/>
           <Route path="/profile" exact component={Profile}/>
           <Route path="/clients" exact component={Clients}/>
       </Switch>
       </BrowserRouter>
    )
}

export default Routes
