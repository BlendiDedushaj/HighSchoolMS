import React, { Component } from "react";
import { variables } from "../utils/Variables.js";

import "../styles/syllabusi.css";


export class Syllabusii extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lendet: [],
      profesoret: [],
      syllabuset: [],
      modalTitle: "",
      SyllabusiId: 0,
      Lenda: "",
      Profesori: "",
      Tekst: "",
    };
  }

  refreshList() {
    fetch(variables.API_URL + "lenda")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ lendet: data });
      });

    fetch(variables.API_URL + "profesori")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ profesoret: data });
      });
      fetch(variables.API_URL + "syllabusi")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ syllabuset: data });
      });
  }

  componentDidMount() {
    this.refreshList();
  }

  render() {
    const {
      syllabuset,
    } = this.state;
    return (
    <div>
    <div className="back">
    <button className="bback"><a href="javascript:history.back()">Go Back</a></button>    </div>
        <div class="SyllabusiApp">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>SyllabusiId</th>
                <th>Lenda</th>
                <th>Profesori</th>
                <th>Tekst</th>
              </tr>
            </thead>
            <tbody>
              {syllabuset.map((sy) => (
                <tr key={sy.SyllabusiId}>
                  <td>{sy.SyllabusiId}</td>
                  <td>{sy.Lenda}</td>
                  <td>{sy.Profesori}</td>
                  <td>{sy.Tekst}</td>
                </tr>
              ))}
            </tbody>
          </table>
      </div>
    </div>
    );
  }
}
