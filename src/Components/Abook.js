import React,{Component} from 'react'
// import * as BooksAPI from '../BooksAPI'



class Abook extends React.Component {
  state = {
    selectedOption: null,
  };
  handleChange = (book,selectedOption)=> {
    this.setState({ selectedOption });
    
    
  };
  

      
    
    render() {   
    const {book,shelf,changeShelf}=this.props
 
    const { selectedOption } = this.state;
    return <div className="list-books-content">
      
                  <div className="book">
                    <div className="book-top">
                      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:`url(${book.imageLinks.smallThumbnail})` }} />
                      <div className="book-shelf-changer">
                        <select value={shelf?shelf:'Read'}
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