import React from 'react'
import * as BooksAPI from './BooksAPI'
import Allbooks from './Components/Allbooks'
import './App.css'
import Search from './Components/Search'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
  
  }

 
  render() {
    const {books}=this.state
    return (
      <Router>
       
      <div className="app">
       
              <div>
        
              <Route exact path="/">
          <Allbooks />
          </Route>
                <Route exact path="/search">
              <Search />
              </Route>
   

          </div>
      
        			
              
      </div>
      </Router> 
    )
  }
}

export default BooksApp
         {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}