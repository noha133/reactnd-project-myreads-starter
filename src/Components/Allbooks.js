import React,{Component} from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import Abook from './Abook'


class Allbooks extends React.Component {
    state = {
        books: [],
        shelf: null,
      }
      componentDidMount(){
        BooksAPI.getAll()
          .then((books)=>{
            this.setState(()=>({
              books
            }))
          })
      }
  
      removeshelf = (book,shelf) => {
        this.setState({ shelf });
        BooksAPI.update(book,shelf)
        book.shelf = shelf;
        this.setState(currentState => ({
          books: currentState.books.filter(c =>  c.id !== book.id.concat(book)
           )
        
        }))

        // , () => { BooksAPI.update(book,shelf)}, () =>{      BooksAPI.getAll()
        //   .then((books)=>{
        //     this.setState(()=>({
        //       books
        //     }))
        //   })})
         
      }
       // this.setState(prevState => ({
          //   myBooks: prevState.myBooks.filter(b => b.id !== book.id).concat(book)
          // }));
 
    
    render() {
    const {books}=this.state
    return (
      <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
      <div className="list-books-content">
      <div>
      <div className="bookshelf">
        <h2 className="bookshelf-title">Currently Reading</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
           
        {books.filter(bookl => bookl.shelf === 'currentlyReading').map(book => <li key={book.id}> <Abook book={book} shelf={book.shelf} changeShelf={this.removeshelf} ></Abook> </li>)}
        
          </ol>
        </div>
      </div>
      <div className="bookshelf">
          <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                  <ol className="books-grid">
                  {books.filter(bookl => bookl.shelf === 'wantToRead').map(book => <li key={book.id}> <Abook book={book} shelf={book.shelf} changeShelf={this.removeshelf} ></Abook> </li>)} 
                  </ol>
        </div>
      </div>
      <div className="bookshelf">
          <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                  <ol className="books-grid">
                  {books.filter(bookl => bookl.shelf === 'read').map(book => <li key={book.id}> <Abook book={book} shelf={book.shelf} changeShelf={this.removeshelf} ></Abook> </li>)} 
                  </ol>
        </div>
      </div>
      </div>
      </div>
       <div className="open-search">
              <Link to="/search"> <button >Add a book</button></Link>
             </div>
      </div>
    )}

}
export default Allbooks

