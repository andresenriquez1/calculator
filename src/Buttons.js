
import React from "react";
import './Buttons.css';
const Buttons = ({handleinput})=>
{
   
    return(
        <div class= "container">

        <div class = "row ">
           <button onClick={handleinput} type="button" class="col btn btn-primary" value ="1">1</button>
           <button onClick={handleinput} type="button" class="col btn btn-primary" value ="2">2</button>
           <button onClick={handleinput}type="button" class="col btn btn-primary" value ="3">3</button>
           <button onClick={handleinput} type="button" class="col btn btn-primary" value ="4">4</button>
        </div>
        <div class = "row">
           <button onClick={handleinput} type="button" class="col btn btn-primary" value ="5">5</button>
           <button onClick={handleinput} type="button" class="col btn btn-primary" value ="6">6</button>
           <button onClick={handleinput} type="button" class="col btn btn-primary" value ="7">7</button>
           <button onClick={handleinput} type="button" class="col btn btn-primary" value ="8">8</button>
        <div class = "row ">
            <button onClick={handleinput}  type="button" class="col btn btn-primary" value ="9">9</button>
           <button onClick={handleinput} type="button" class="col btn btn-primary" value ="clear">AC</button>
           <button onClick={handleinput} type="button" class="col btn btn-primary" value ="*">*</button>
           <button onClick={handleinput} type="button" class="col btn btn-primary" value ="+">+</button>
        </div>
          <div class ="row">
          <button onClick={handleinput} type="button" class="col btn btn-primary" value ="/">/</button>
           <button onClick={handleinput} type="button" class="col btn btn-primary" value ="-">-</button>
           <button onClick={handleinput} type="button" class="col btn btn-primary" value ="=">=</button>

          </div>
           
           
        </div>
        </div>

    );

}
export default Buttons;