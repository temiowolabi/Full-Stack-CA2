//nodejs_projects\cars_client_side_react\server
//nodejs_projects\cars_client_side_react\client

/*import React, {Component} from 'react';

import "./App.css"
//import "./table.scss"
// "./jsonData.json"
import LoginForm from "./components/LoginForm"

import CountriesForm from "./components/CountriesForm"
import MoviesForm from "./components/MoviesForm"
import moviesData from './JsonData'



let films = moviesData.map(movie => movie.region);
let uniqueMovies = Array.from(new Set(films)).sort();
uniqueMovies.unshift("All Regions"); // add "All Regions" to the front of the array

export default class App extends Component 
{
    render() 
    {
        return (

        <div>
      
                <MoviesForm movies = {moviesData} Us_Grosses ={uniqueMovies}/>
                </div>
               )
    }
}

*/


import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Information from './JsonData';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table'
import Card from 'react-bootstrap/Card'
import Button from '@material-ui/core/Button';

export default class App extends Component {

  constructor(props){
    super(props);

    this.state={
      search:null
    };
    

        this.state = {
                         movies:this.props.movies
                     };   
  }

  searchSpace=(event)=>{
    let keyword = event.target.value;
    this.setState({search:keyword})
  }
  
//          addItem(e)
//          {
//              e.preventDefault();
//              const {yes} = this.state;
//              const newMovie = 'test';
//              
//              this.setState({
//                  yes: [...this.state.yes, newMovie]
//              }
//                      )
//          }



  render(){
      
const {yes} = this.state;
  
  
    const styleInfo = {
      paddingRight:'10px'
    }
    const elementStyle ={
      border:'solid',
      borderRadius:'10px',
      position:'relative',
      left:'10vh',
      height:'3vh',
      width:'20vh',
      marginTop:'5vh',
      marginBottom:'10vh'
    }
    
    const items = Information.filter((movie)=>{
      if(this.state.search == null)
          return movie
      else if(movie.Title.toLowerCase().includes(this.state.search.toLowerCase()) || movie.Director.toLowerCase().includes(this.state.search.toLowerCase())){
          return movie
      }
    }).map(movie=>{
      return(
      <div>
          
  <Card border="primary" style={{ width: '18rem' }}>
    <Card.Header>{movie.Title}</Card.Header>
    <Card.Body>
      <Card.Title>{movie.Director}</Card.Title>
      <Card.Text>
      Release Date: {movie.Release_Date}<br></br>
        
        Worldwide Gross: ${movie.Worldwide_Gross}<br></br>
        
        Production Budget: ${movie.Production_Budget}
        
        
      </Card.Text>
    </Card.Body>
  </Card>
  <br />

      </div>
      );
    });

    return (
      <div class="searchBox">
         
          <form className="form-inline" onSubmit={(e) => {this.addItem(e)}}>
          <div className="form-group">
           <input class="searchInput" type="text" placeholder="Add New Item" />
                      <Button type="submit" variant="outlined" color="primary">
  Add
</Button>
</div>
                </form>
                
                

      <input class= "searchInput" type="text" placeholder="Enter item to be searched" onChange={(e)=>this.searchSpace(e)} />
      {items}
      </div>
    )
  }
}


