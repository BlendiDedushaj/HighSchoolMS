import React,{Component} from "react";
import "../styles/login.css";
import { Link } from "react-router-dom";

export class Signup extends Component{
    render(){
        return(
          <div className="form">
      
           
              <div className="group">
              <input type="text"  required/>
                <label>Username </label>
                <span class="highlight"></span>
                <span class="bar"></span>
              
              </div>
              <div className="group">
              <input type="password" required />
              <span class="highlight"></span>
            <span class="bar"></span>
                <label>Password </label>
          
              </div>
              <div className="button-container">
              
                <input type="submit" />
                <Link to="/signup" className="signu">Click to SignUp</Link>
              </div>
        
          </div>
        )
    }
}
export default Signup;