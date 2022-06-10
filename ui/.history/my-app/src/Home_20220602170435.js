import React,{Component} from "react";

export class Home extends Component{
    render(){
        return(
            <div>
                <h3>This is Home Page</h3>
                <h1>hhhhhh</h1>
                <div style="padding: 0px; margin: 5%">
        <p style="font-size: 30px;float: left;margin: 0px;padding: 0px"><b>Login</b></p>
        
        <div>
           
          <input type="text" placeholder="Username" name="username" value="<?php if (isset($_COOKIE["username"])) {echo $_COOKIE["username"];} ?>" >
          
          <input type="password" placeholder="Password" name="password" value="<?php if (isset($_COOKIE["password"])) {echo $_COOKIE["password"];} ?>" >
          <label>
            <input type="checkbox" checked="checked" name="remember" <?php if(isset($_COOKIE["username"])) { ?> checked <?php } ?>> Remember me
          </label> 
          <button id="logInButton" type="submit" name="login_user">Login</button>   
        </div>
        <br>
        <div class="bottom-container">
            <div class="row">
              
                    <a href="signup.php" style="color:white" class="btn-modal">Sign up</a>
               
                 
            </div>
        </div>
            </div>
            
            
            
        )
    }
}
