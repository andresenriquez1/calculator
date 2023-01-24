
import React from "react";

const Header = ({values})=>
{
    return(
        <div class="container">
  <div class="row justify-content-md-center">
    <div class="col col-lg-2">
      
    </div>
    <div class="col-md-auto border border-5">
     {values}
     Hello world
    </div>
    <div class="col col-lg-2">
    
    </div>
    </div>
    </div>

    );

}
export default Header;