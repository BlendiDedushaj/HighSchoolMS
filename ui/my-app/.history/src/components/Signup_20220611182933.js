import React,{Component} from "react";
import "../styles/signup.css";
import { Link } from "react-router-dom";

export class Signup extends Component{
    render(){
        return(
            <form>
        <h3>Sign Up</h3>
        <td colspan="2">
                            <p>
                                <label>First Name</label><br />
                                <input type="text" id="text" name="firstname" placeholder="Your name..." size="80" class="required" />
                            </p>
                            <p>
                                <label>Last Name</label><br />
                                <input type="text" id="text" name="lastname" placeholder="Your last name..." size="80" class="required" />
                            </p>
                            <p>
                                <label>Email</label><br />
                                <input type="email" id="text" name="email" placeholder="Your email..." size="80" class="required" />
                            </p>
                        </td>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
   
        <input type="submit" class="rounded"> <input type="reset" value="Clear Form" class="rounded">
      
        <p className="forgot-password text-right">
          Already registered <Link to="/" className="signu">Click to LogIn</Link>
        </p>
      </form>
        )
    }
}
export default Signup;