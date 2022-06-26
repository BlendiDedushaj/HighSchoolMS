import React, { Component } from "react";
import { variables } from "../utils/Variables.js";

import "../styles/testi.css";


export class Testii extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profesoret: [],
      lendet: [],
      testet: [],
      modalTitle: "",
      TestiId: 0,
      TestiName: "",
      Profesori: "",
      Lenda: "",
      Ora: "",
      Data: "",
    };
  }

  refreshList() {
    fetch(variables.API_URL + "profesori")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ profesoret: data });
      });

    fetch(variables.API_URL + "lenda")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ lendet: data });
      });

    fetch(variables.API_URL + "testi")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ testet: data });
      });
  }

  componentDidMount() {
    this.refreshList();
  }

  render() {
    const {
      testet,
    } = this.state;
    return (
    <div>
    <div className="back">
    <button className="bback"><a href="javascript:history.back()">Go Back</a></button>    </div>
        <div class="TestiApp">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>TestiId</th>
                <th>TestiName</th>
                <th>Profesori</th>
                <th>Lenda</th>
                <th>Ora</th>
                <th>Data</th>
              </tr>
            </thead>
            <tbody>
              {testet.map((te) => (
                <tr key={te.TestiId}>
                  <td>{te.TestiId}</td>
                  <td>{te.TestiName}</td>
                  <td>{te.Profesori}</td>
                  <td>{te.Lenda}</td>
                  <td>{te.Ora}</td>
                  <td>{te.Data}</td>
                </tr>
              ))}
            </tbody>
          </table>
      </div>
    </div>
    );
  }
}
