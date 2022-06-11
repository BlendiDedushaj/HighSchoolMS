import React,{Component} from "react";
import "../styles/signup.css";
import { Link } from "react-router-dom";

export class Signup extends Component{
    render(){
        return(
          <div>
          <form method="get" action="" id="mainForm">

            <fieldset>
                <legend>Get In Touch</legend>
                <table>
                    <tr>
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
                    </tr>
                    <tr>
                        <td>
                            <p>
                                <label>Continent</label><br />
                                <select name="continent">
                                    <option>Choose continent</option>
                                    <option>Africa</option>
                                    <option>Asia</option>
                                    <option>Europe</option>
                                    <option>North America</option>
                                    <option>South America</option>
                                    <option>Australia</option>
                                    <option>Antarctica</option>
                                </select>
                            </p>
                            <p>
                                <label>Country</label><br />
                                <select name="country">
                                    <option>Choose country</option>
                                    <option>Albania</option>
                                    <option>Brazil</option>
                                    <option>United States</option>
                                    <option>Kosovo</option>
                                    <option>Scotland</option>
                                    <option>Canada</option>
                                    <option>Italy</option>
                                </select>
                            </p>


                            <p>
                                <label>City</label><br />
                                <input type="text" id="text" name="City" placeholder="Your city..." size="80" class="required" />
                            </p>

                        </td>
                        <td>
                            <div class="box">
                                <label>Gender </label><br />
                                <input type="radio" name="gender" value="1">Male<br />
                                <input type="radio" name="gender" value="2" checked>Female<br />
                                <input type="radio" name="gender" value="3" checked>Unspecified<br />

                            </div>
                            <div class="box">
                                <label>Interests </label><br />
                                <input type="checkbox" name="cc">Technology <br />
                                <input type="checkbox" name="cc">Sport <br />
                                <input type="checkbox" name="cc">Science <br />
                                <input type="checkbox" name="cc">Movies<br />
                                <input type="checkbox" name="cc">Vehicles<br />
                                <input type="checkbox" name="cc">Other
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <div class="rectangle">
                                <label>I accept terms and conditions for this website</label>
                                <input type="checkbox" name="accept" class="required">
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>
                                <label>Rate this page: <br /></label>
                                <input type="number" min="1" max="5" name="rate" />
                            </p>
                        </td>
                        <td>
                            <div class="box">
                                <p>
                                    <label>Date Taken: <br /></label>
                                    <input type="date" name="date" />
                                </p>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <div class="rectangle centered">
                                <input type="submit" class="rounded"> <input type="reset" value="Clear Form" class="rounded">

                                <br />

                                <button class="rounded" onclick="getLocation()">Get your coordinates</button>
                                <p id="location" style="color: black; font-weight: bold; "></p>

                            </div>
                        </td>
                    </tr>
                </table>
            </fieldset>
      
     
        )
    }
}
export default Signup;