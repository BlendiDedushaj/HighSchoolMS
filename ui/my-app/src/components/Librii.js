import React, { Component } from "react";
import { variables } from "../utils/Variables.js";

import "../styles/libri.css";


export class Librii extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lendet: [],
      librat: [],
      modalTitle: "",
      LibriId: 0,
      LibriName: "",
      Lenda: "",
    };
  }

  refreshList() {
    fetch(variables.API_URL + "libri")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ librat: data });
      });

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
    const {
      librat,
    } = this.state;
    return (
      <div>
      <div className="back">
      <button className="bback"><a href="javascript:history.back()">Go Back</a></button>       </div>
        <div class="libriApp">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>LibriId</th>
                <th>LibriName</th>
                <th>Lenda</th>
              </tr>
            </thead>
            <tbody>
              {librat.map((lib) => (
                <tr key={lib.LibriId}>
                  <td>{lib.LibriId}</td>
                  <td>{lib.LibriName}</td>
                  <td>{lib.Lenda}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
