import React, { Component } from "react";
import { variables } from "../utils/Variables.js";

import "../styles/profesori.css";


export class Profesorii extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lendet: [],
      profesoret: [],
      modalTitle: "",
      ProfesoriId: 0,
      ProfesoriName: "",
      Lenda: "",
      DateOfJoining: "",
      PhotoFileName: "anonymous.png",
      PhotoPath: variables.PHOTO_URL,
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
  }

  componentDidMount() {
    this.refreshList();
  }

  render() {
    const {
      profesoret,
    } = this.state;
    return (
      <div>
      <div className="back">
      <button className="bback"><a href="javascript:history.back()">Go Back</a></button>      </div>
        <div class="profesoriApp">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>ProfesoriId</th>
                <th>ProfesoriName</th>
                <th>Lenda</th>
                <th>DOJ</th>
              </tr>
            </thead>
            <tbody>
              {profesoret.map((prof) => (
                <tr key={prof.ProfesoriId}>
                  <td>{prof.ProfesoriId}</td>
                  <td>{prof.ProfesoriName}</td>
                  <td>{prof.Lenda}</td>
                  <td>{prof.DateOfJoining}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
