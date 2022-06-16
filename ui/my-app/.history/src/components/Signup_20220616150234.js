import React,{Component} from "react";
import "../styles/signup.css";
import { Link } from "react-router-dom";

export class Signup extends Component{
    render(){
        return(
          <div className="form">
          <img src="https://e7.pngegg.com/pngimages/265/858/png-clipart-computer-icons-teacher-professor-education-lecturer-teacher-angle-logo.png" alt="Girl in a jacket" width="400" height="250"></img>
      
           
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