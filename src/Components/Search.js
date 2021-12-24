import React,{Component} from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import Abook from './Abook'


class Search extends React.Component {
    state = {
        books: [],
        query: '',
        loading: false,
        shelf: '',
        Allbooks: [],
      }

      updatequery = (query) =>{
        this.setState(()=>({
            query: query.trim()
        }))
        BooksAPI.getAll()
        .then((Allbooks)=>{
          this.setState(()=>({
            Allbooks
          }))
        })
        BooksAPI.search(query)
          .then((books)=>{
            this.setState(()=>({
              books
            }))
            
          })
         
          
          .catch((err) => {
            console.log(err);
          })
          .finally(() => {
            this.setState({ loading: true })
          });
          
          
      }
      removeshelf = (book,shelf) => {
        this.setState({ shelf });
      
        BooksAPI.update(book, shelf)
           book.shelf = shelf;
        
      
        
      }
 
  
    
    render() {
    const {books,query,loading,shelf}=this.state
    
    return (
      <div className="search-books">
      <div className="search-books-bar">
      <Link to="/"> <button className="close-search" >Close</button></Link>
        <div>
        <div className="search-books-input-wrapper">
       
        <input type="text" placeholder="Search by title or author" value={query} onChange={(event)=>this.updatequery(event.target.value)}/>

      </div>
       <div className="search-books-results">
      
       <ol className="books-grid"> 
       {loading && books.map(book => <li key={book.id}> <Abook book={book} shelf={book.shelf} changeShelf={this.removeshelf}></Abook> </li>)} 
       </ol>
     </div>
     </div>
     </div>
           
           </div>
     
    )}

}
export default Search


