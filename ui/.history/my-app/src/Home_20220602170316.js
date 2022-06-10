import React,{Component} from "react";

export class Home extends Component{
    render(){
        return(
            <div>
                <h3>This is Home Page</h3>
                <h1>hhhhhh</h1>
                <ul id="nav">
                    <li><a class="active" href="index.php">Home</a></li>
                    <li><a href="About.php">About</a></li>
                    <li><a class="active" href="Events.php">Events</a></li>
                    <li><a href="Contacts.php">Contact</a></li>
                    <li><a class="active" href="signup.php">Sign Up</a></li>
                    <li><a href="login.php">Log In</a></li>
                    <li><a class="active" a href="books.php">Books</a></li>
                    <li><a href="loginadmin.php">Admin</a></li>



            
                </ul>
            </div>
            
            
            
        )
    }
}
