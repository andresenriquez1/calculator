import React from 'react';
import './App.css';
import Header from './Header';
import Buttons from './Buttons';
import { useState } from 'react';

function App() {
  const [HeaderPage,setHeaderPage]= useState("");
  

  const handleinput = (el) =>
    {
      setHeaderPage(HeaderPage + el.target.value);
      switch(el.target.value)
      {
        case '=':
          console.log("reached dic");
          op1(HeaderPage,el);
          break;
        case 'clear':
          op2();
            break;
        default:
          console.log("default");

      }
    
      
    }

    const op1 = (HeaderPage) =>
    {
      const e = eval;
      setHeaderPage(e(HeaderPage.toString()));
    }
    const op2 = () =>
    {
      setHeaderPage("");
    }

  return (
    <div>
    <Header values ={HeaderPage} /> 
  
    <Buttons handleinput={handleinput} />
    </div>
  );
}

export default App;
