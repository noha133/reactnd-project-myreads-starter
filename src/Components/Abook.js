import React,{Component} from 'react'
// import * as BooksAPI from '../BooksAPI'



class Abook extends React.Component {
  state = {
    selectedOption: null,
  };
  handleChange = (book,selectedOption)=> {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
    // BooksAPI.update(book,selectedOption)
    // .then((selectedOption )=>{
    //   this.setState({ selectedOption });
    // })
  };
  
  // componentDidMount(){
  //   BooksAPI.update(book,book.shelf)
  //     .then((books)=>{
  //       this.setState(()=>({
  //         books
  //       }))
  //     })
  // }
  // changeShelf = (book, shelf) => {

  //   // check if search results already exist in booklist

  //   BooksAPI.update(book, shelf).then(response => {
  //     book.shelf = shelf
  //     this.setState((state) => ({
  //       books: this.state.books.filter((b) => b.id !== book.id).concat([ book ])
  //     }))
  //   })
  // }
  
      
    
    render() {   
    const {book,changeShelf}=this.props
    const shelf = book.shelf
    const { selectedOption } = this.state;
    return <div className="list-books-content">
       
                  <div className="book">
                    <div className="book-top">
                      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:`url(${book.imageLinks.smallThumbnail})` }} />
                      <div className="book-shelf-changer">
                        <select value={this.selectedOption}
        onChange={(event) => changeShelf(book, event.target.value)}
     >
                          <option value="move" disabled>
                            Move to...
                          </option>
                          <option value="none">None</option>
                          <option value="currentlyReading">Currently Reading</option>
                          <option value="wantToRead">Want to Read</option>
                          <option value="read">Read</option>
                          
                        </select>
                      </div>
                    </div>
                  </div>
         
      </div>;}

}

export default Abook