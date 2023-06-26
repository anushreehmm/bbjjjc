
import React, {Component} from "react";
import Cardlist from "./Cardlist";
import {robots} from "./robots";
import Searchbox from "./Searchbox";



class App extends Component {
    constructor(){
      super()
      this.state = {
        robots: robots,
        searchfield : '' 
      }  
    }

    onsearchChange(event){
        console.log(event.target.value);
    }
    render(){
        return(
            <div className="" style={{textAlign: "center"}}>
            <h1 style={{fontFamily: "fantasy"}}>RoboFriends</h1>
            <Searchbox searchchange = {this.onsearchChange}/>
            <Cardlist robots = {this.state.robots}/> 
            </div>
     
          
        );

    }
} 


export default App;
