import React, { Component } from "react";
import { Err } from "../Main/Style";

class Error extends Component {
    render() { 
        return ( 
            <>
               <Err>
                   <p>Your location isn't found</p>
                   <img src="https://static.thenounproject.com/png/140281-200.png" alt="Sed mood"/>
               </Err> 
               
            </>
         );
    }
}
 
export default Error;