import React, { Component } from "react";
import { variables } from "../utils/Variables.js";

import "../styles/kontaktprind.css";


export class KontaktPrindd extends Component {
  constructor(props) {
    super(props);

    this.state = {
      prinderit: [],
      kontaktetp: [],
      modalTitle: "",
      KontaktPId: 0,
      Prindi: "",
      NrTel: "",
    };
  }

  refreshList() {
    fetch(variables.API_URL + "prindi")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ prinderit: data });
      });

    fetch(variables.API_URL + "kontaktprind")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ kontaktetp: data });
      });
  }

  componentDidMount() {
    this.refreshList();
  }

  render() {
    const {
      kontaktetp,
    } = this.state;
    return (
      <div>
      <div className="back">
      <button className="bback"><a href="javascript:history.back()">Go Back</a></button>       </div>
        <div class="KontaktPrindApp">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>KontaktPId</th>
                <th>Prindi</th>
                <th>NrTel</th>
              </tr>
            </thead>
            <tbody>
              {kontaktetp.map((kp) => (
                <tr key={kp.KontaktPId}>
                  <td>{kp.KontaktPId}</td>
                  <td>{kp.Prindi}</td>
                  <td>{kp.NrTel}</td>
                </tr>
              ))}
            </tbody>
          </table> 
        </div>
      </div>
    );
  }
}
