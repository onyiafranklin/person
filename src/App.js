import React, { Component } from 'react';
import Person from './Person/Person';
import  './App.css';



class App extends Component {

  state={
    persons:[
    {id:"hjkcjk",name:"okey",age:66},
    { id:"hjkc",name:"bibi",age:60},
    { id:"hj",name:"bibgg",age:70}
    ],
showPersons:false
  }

nameChangedHandler=(event,id)=>{

const personIndex=this.state.persons.findIndex(p=>{
 return p.id===id;
});

const person={...this.state.persons[personIndex]};
person.name=event.target.value;
const persons=[...this.state.persons];
persons[personIndex]=person;

this.setState ({persons:persons});

}



deleteNameHandler=(personIndex)=>{
//const persons=this.state.person.slice();
const persons=[...this.state.persons];
persons.splice(personIndex,1);
this.setState ({persons:persons});

}
  togglePersonHandler  =()=>{

    const doesShow=this.state.showPersons ;
    this.setState({showPersons:!doesShow }) ;

  }
    
  render() {
  
const style ={
    backgroundColor: 'white',         
    border: '1px solid blue',
    padding :'20px',
    cursor :'pointer'
  };


  let persons=null;
  if(this.state.showPersons){
         persons=( <div>
                      {this.state.persons.map((persons,index)=>{
                        return(
                        <Person  
                        name={persons.name} 
                        age={persons.age}
                         onchange={(event)=>this.nameChangedHandler(event,persons.id)}
                          click={()=>this.deleteNameHandler(index)}
                          key={persons.id}/>
                        );
                      })
                      }
                 </div>
         );
  }
    return (

      <div className="App">
       <h1>happy birthd</h1>
       <button 
       style = {style}
       onClick={this.togglePersonHandler} >switch name
       </button>
       {persons}
        
      </div>
    );
  }
}

export default App;
