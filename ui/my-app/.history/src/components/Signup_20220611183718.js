import React,{Component} from "react";
import "../styles/signup.css";
import { Link } from "react-router-dom";

export class Signup extends Component{
  
    render(){
      function isPasswordMatch() {
        var password = $("#txtNewPassword").val();
        var confirmPassword = $("#txtConfirmPassword").val();
    
        if (password != confirmPassword) $("#divCheckPassword").html("Passwords do not match!");
        else $("#divCheckPassword").html("Passwords match.");
    }
    
    $(document).ready(function () {
        $("#txtConfirmPassword").keyup(isPasswordMatch);
    });
    
        return(
            <form>
        <h3>Sign Up</h3>
        <td colspan="2">
                            <p>
                                <label>First Name</label><br />
                                <input type="text" id="text" name="firstname" placeholder="Your name..." size="80" required />
                            </p>
                            <p>
                                <label>Last Name</label><br />
                                <input type="text" id="text" name="lastname" placeholder="Your last name..." size="80" required />
                            </p>
                            <p>
                                <label>Email</label><br />
                                <input type="email" id="text" name="email" placeholder="Your email..." size="80" required />
                            </p>
                        </td>
                        <p>
    <input type="password" name="NPassword" placeholder="New Password" id="txtNewPassword" />
</p>
<input type="password" name="RNPassword" placeholder="Retype New Password" id="txtConfirmPassword" onChange="isPasswordMatch();" />
<div id="divCheckPassword"></div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="d-grid">
        <input type="submit" class="rounded" />
          
        </div>
        <p className="forgot-password text-right">
          Already registered <Link to="/" className="signu">Click to LogIn</Link>
        </p>
      </form>
        )
    }
}
export default Signup;