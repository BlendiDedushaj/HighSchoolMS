import React,{Component} from "react";

export class Home extends Component{
    render(){
        return(
            <div>
                <h3>This is Home Page</h3>
            </div>
            <div class="header">

            <!-- <div class="header">
                <ol style="float:left">
                    <li><button onclick="document.getElementById('id01').style.display='block'" class="btn">Login</button> | </li>
                    <li><button onclick="document.getElementById('id02').style.display='block'" class="btn">Sign up</button></li>
                </ol>

                <ol style="float:right">
                    <li><button onclick="document.getElementById('id01').style.display='block'" class="btn">Login</button> | </li>
                    <li><button onclick="document.getElementById('id02').style.display='block'" class="btn">Sign up</button> | </li>
                    <li><a class="a" href="#bottom"> Bottom</a> | </li>
                    <li><a class="a" href="Contacts.php#team"> Team </a></li>
                </ol>

            </div>
            <br> -->
            <div id="container">
                <div class="box1">
                    <span style="font-size: 32px;margin:0px;padding:0px">
                        Education

                    </span>
                    <br>
                    <span style="font-size: 12px;margin:0px;padding: 0px">
                    Nurture, Inspire, Flourish
                    </span>

                </div>
                <div class="box2">
                    <img src="Images/eco_schools_logo.jpg" width="468px" height="60px" alt="Llogo" style="float: right;overflow: auto">


                </div>

            </div>

            <!--**********************NAV_BAR*******************-->
            <div id="Modal2" class="modal2">

                <!--**********************Modal Content**********-->
                <div class="modal2-content">
                    <p id="demo"></p>
                </div>

            </div>

            <nav>
                <br>
                <ul id="nav">
                    <li><a class="active" href="index.php">Home</a></li>
                    <li><a href="About.php">About</a></li>
                    <li><a class="active" href="Events.php">Events</a></li>
                    <li><a href="Contacts.php">Contact</a></li>
                    <li><a class="active" href="signup.php">Sign Up</a></li>
                    <li><a href="login.php">Log In</a></li>
                    <li><a class="active" a href="books.php">Books</a></li>
                    <li><a href="loginadmin.php">Admin</a></li>



                    <li style="float:right;"><button onclick="search()">Search</button>
                        <li style="float:right;"><input id="srch" type="text" placeholder="Search Term Here..."></li>
                </ul>
                <br><br>
                <!--*******************************NAV_BAR_END***************************-->
            </nav>
        </div>
        </header>
        <!-- **************************************HEADER_END******************************** --></nav>
            
        )
    }
}