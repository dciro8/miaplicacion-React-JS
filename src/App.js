import React from 'react';
import './App.css';
// import logo from './logo.svg';

// function HelloWord(props){
//   return( 
//   <div id="Hello">
//     <h3>
//     { props.subtitle}
//     </h3>

//     { props.myText} 
//     </div>
//     )
// }

class HelloWord extends React.Component{

  
  state = {
    show:true
   }

   

ToggleShow =  () => {
  this.setState({show:!this.state.show})
}

  render(){

    if (this.state.show)
    {
        
    return  (  <div>            
                  <div id="Hello">
                    <h3>
                      { this.props.subtitle}
                    </h3>
                      { this.props.myText} 
                      <button onClick={ this.ToggleShow}>Change State</button>
                  </div>
                </div>)
    }
    else
    {
      return <div> <h3>Sin contenido
           <button onClick={ this.ToggleShow}>Change State</button>
      </h3>
      </div>
    }  
  } 
}


// const App = () => <div>Este es el nuevo componente : <HelloWord/></div>

// class App extends React.Component{
//   render(){
//     return <div>Este es el nuevo componenteVale : 
//                 <HelloWord/> 
//             </div>
//   }
// }

function App() {


  return (
     <h1>
       Este es el nuevo componente : 
       <HelloWord 
       myText="Hello Ciro" subtitle=" El mejor"/> 
       <HelloWord 
       myText="Hello Ciro1" subtitle=" El mejor1"/> 
       <HelloWord 
       myText="Hello Ciro2" subtitle=" El mejor2"/> 
       </h1>      
);
}

export default App;
