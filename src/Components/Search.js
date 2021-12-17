import React,{Component} from 'react'
import * as BooksAPI from '../BooksAPI'
import Abook from './Abook'


class Search extends React.Component {
    state = {
        books: [],
        query: '',
      }
    //   componentDidMount(){
    //     BooksAPI.getAll()
    //       .then((books)=>{
    //         this.setState(()=>({
    //           books
    //         }))
    //       })
    //   }
      updatequery = (query) =>{
        this.setState(()=>({
            query: query.trim()
        }))
    
        BooksAPI.search(query)
          .then((books)=>{
            this.setState(()=>({
              books
            }))
          })
      }
  
    
    render() {
    const {books,query}=this.state
    // const showingBooks = query === ''
    // ? books
    // : books.filter((c) => (
    //     c.title.toLowerCase().includes(query.toLowerCase())
    //   ))
    return (
        <div>
        <div className="search-books-input-wrapper">
       
        <input type="text" placeholder="Search by title or author" value={query} onChange={(event)=>this.updatequery(event.target.value)}/>

      </div>
       <div className="search-books-results">
      
       <ol className="books-grid"> 
       {books.map(book => <li key={book.id}> <Abook book={book} ></Abook> </li>)} 
       </ol>
     </div>
     </div>
     
    )}

}
export default Search


