import React, { Component } from "react";
import { variables } from "../utils/Variables.js";

import "../styles/njoftim.css";


export class Njoftimm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      njoftimet: [],
      modalTitle: "",
      NjoftimiId: 0,
      Data: "",
      Ora: "",
      Tekst: "",
    };
  }

  refreshList() {
    fetch(variables.API_URL + "njoftim")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ njoftimet: data });
      });
  }

  componentDidMount() {
    this.refreshList();
  }
  render() {
    const {
      njoftimet,
    } = this.state;
    return (
    <div>
    <div className="back">
    <button className="bback"><a href="javascript:history.back()">Go Back</a></button>    </div>
        <div class="NjoftimApp">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>NjoftimiId</th>
                <th>Data</th>
                <th>Ora</th>
                <th>Tekst</th>
              </tr>
            </thead>
            <tbody>
              {njoftimet.map((nj) => (
                <tr key={nj.NjoftimiId}>
                  <td>{nj.NjoftimiId}</td>
                  <td>{nj.Data}</td>
                  <td>{nj.Ora}</td>
                  <td>{nj.Tekst}</td>
                </tr>
              ))}
            </tbody>
          </table>
      </div>
    </div>
    );
  }
}
