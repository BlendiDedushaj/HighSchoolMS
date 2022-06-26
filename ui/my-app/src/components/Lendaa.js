import React, { Component } from "react";
import { variables } from "../utils/Variables.js";

import "../styles/lenda.css";


export class Lendaa extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lendet: [],
      modalTitle: "",
      LendaName: "",
      LendaId: 0,
    };
  }

  refreshList() {
    fetch(variables.API_URL + "lenda")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ lendet: data });
      });
  }

  componentDidMount() {
    this.refreshList();
  }

  render() {
    const { lendet,} = this.state;
    return (
      <div>
      <div className="back">
      <button className="bback"><a href="javascript:history.back()">Go Back</a></button>      </div>
        <div class="LendaApp">
          <table className="table table-striped">
            <thead>
            <tr>
                <th>LendaId</th>
                <th>LendaName</th>
              </tr>
            </thead>
            <tbody>
              {lendet.map((len) => (
                <tr key={len.LendaId}>
                  <td>{len.LendaId}</td>
                  <td>{len.LendaName}</td>
                  </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
