import React, { Component } from "react";
import { variables } from "../utils/Variables.js";

import "../styles/vleresimi.css";


export class Vleresimii extends Component {
  constructor(props) {
    super(props);

    this.state = {
      klasat: [],
      vleresimet: [],
      paralelet: [],
      notat: [],
      nxenesit: [],
      oraret: [],
      lendet: [],
      profesoret: [],
      modalTitle: "",
      VleresimiId: 0,
      Lenda: "",
      Profesori: "",
      Nxenesi: "",
      Klasa: "",
      Paralelja: "",
      Orari: "",
      Nota: "",
      Data: "",
    };
  }

  refreshList() {
    fetch(variables.API_URL + "nxenesi")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ nxenesit: data });
      });

      fetch(variables.API_URL + "vleresimi")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ vleresimet: data });
      });

    fetch(variables.API_URL + "klasa")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ klasat: data });
      });

      fetch(variables.API_URL + "paralelja")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ paralelet: data });
      });

      fetch(variables.API_URL + "orari")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ oraret: data });
      });

      fetch(variables.API_URL + "profesori")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ profesoret: data });
      });

      fetch(variables.API_URL + "nota")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ notat: data });
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
      vleresimet,
    } = this.state;
    return (
      <div>
      <div className="back">
       <button className="bback"><a href="javascript:history.back()">Go Back</a></button>
   
       </div>
        <div class="VleresimiApp">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>VleresimiId</th>
                <th>Lenda</th>
                <th>Profesori</th>
                <th>Nxenesi</th>
                <th>Klasa</th>
                <th>Paralelja</th>
                <th>Orari</th>
                <th>Nota</th>
                <th>Data</th>
              </tr>
            </thead>
            <tbody>
              {vleresimet.map((vl) => (
                <tr key={vl.VleresimiId}>
                  <td>{vl.VleresimiId}</td>
                  <td>{vl.Lenda}</td>
                  <td>{vl.Profesori}</td>
                  <td>{vl.Nxenesi}</td>
                  <td>{vl.Klasa}</td>
                  <td>{vl.Paralelja}</td>
                  <td>{vl.Orari}</td>
                  <td>{vl.Nota}</td>
                  <td>{vl.Data}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
