import React,{Component} from 'react'
import * as BooksAPI from '../BooksAPI'
import Abook from './Abook'


class Allbooks extends React.Component {
    state = {
        books: []
      }
      componentDidMount(){
        BooksAPI.getAll()
          .then((books)=>{
            this.setState(()=>({
              books
            }))
          })
      }
      // changeShelf = (book, shelf) => {

      //   // check if search results already exist in booklist
    
      //   BooksAPI.update(book, shelf).then(response => {
      //     book.shelf = shelf
      //     this.setState((state) => ({
      //       books: this.state.books.filter((b) => b.id !== book.id).concat([ book ])
      //     }))
      //   })
      // }
      removeshelf = (book,shelf) => {
        this.setState((currentState) => ({
          books: currentState.books.filter((c) => {
            return c.id !== book.id
          })
        
        }))
        BooksAPI.update(book,shelf)
        alert(shelf)
        BooksAPI.getAll()
        .then((books)=>{
          this.setState(()=>({
            books
          }))
        })
      }
      // changeShelf = (book, shelf) => {

      //   // check if search results already exist in booklist
    
      //   BooksAPI.update(book, shelf).then(response => {
      //     book.shelf = shelf
      //     this.setState((state) => ({
      //       books: this.state.books.filter((b) => b.id !== book.id)
      //     }))
      //   })
      // }
    
    render() {
    const {books}=this.state
    return (
      <div className="list-books-content">
      <div>
      <div className="bookshelf">
        <h2 className="bookshelf-title">Currently Reading</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
           
        {books.filter(bookl => bookl.shelf === 'currentlyReading').map(book => <li key={book.id}> <Abook book={book} changeShelf={this.removeshelf} ></Abook> </li>)}
        
          </ol>
        </div>
      </div>
      <div className="bookshelf">
          <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                  <ol className="books-grid">
                  {books.filter(bookl => bookl.shelf === 'wantToRead').map(book => <li key={book.id}> <Abook book={book} changeShelf={this.removeshelf} ></Abook> </li>)} 
                  </ol>
        </div>
      </div>
      <div className="bookshelf">
          <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                  <ol className="books-grid">
                  {books.filter(bookl => bookl.shelf === 'read').map(book => <li key={book.id}> <Abook book={book} changeShelf={this.removeshelf} ></Abook> </li>)} 
                  </ol>
        </div>
      </div>
      </div>
      </div>
    )}

}
export default Allbooks

