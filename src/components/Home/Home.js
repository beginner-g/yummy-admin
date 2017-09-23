import React, { Component } from 'react'
import './home.css'
import Sidebar from '../Sidebar/Sidebar'
import Dashboard from '../Dashboard/Dashboard'
import Completed from '../Completed/Completed'
import Mousse from '../Mousse/Mousse'
import New from '../New/New'
import {BrowserRouter as Router,Route} from 'react-router-dom'
class Home extends Component {
  render(){
    return(
      <Router>
        <div className="home">
            <Sidebar/>
            <Route path='/dashboard' component={Dashboard}/>
            <Route path='/mousse' component={Mousse}/>
            <Route path='/dashboard/completed' component={Completed}/>
            <Route path='/new' component={New}/>
        </div>
      </Router>
    )
  }
}

export default Home
