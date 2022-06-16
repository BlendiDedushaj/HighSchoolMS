import React,{Component} from "react";
import "../styles/signup.css";
import { Link } from "react-router-dom";

export class Signup extends Component{
    render(){
        return(
          <div className="formsig">
      
           
              <div className="group">
              <input type="text"  required/>
                <label>Name </label>
                <span class="highlight"></span>
                <span class="bar"></span>
                </div>
              
                <div className="group">
                <input type="text"  required/>
                  <label>Surname</label>
                  <span class="highlight"></span>
                  <span class="bar"></span>
                
                </div>
                <div className="group">
                <input type="text"  required/>
                  <label>City </label>
                  <span class="highlight"></span>
                  <span class="bar"></span>
                
                </div>
                <div className="group">
                <input type="email"  required/>
                  <label>Email </label>
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