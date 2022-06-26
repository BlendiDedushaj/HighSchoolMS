import React, { Component } from "react";
import { variables } from "../utils/Variables.js";

import "../styles/autobusat.css";


export class Autobusatt extends Component {
  constructor(props) {
    super(props);

    this.state = {
      oraret: [],
      autobusat: [],
      modalTitle: "",
      AutobusatId: 0,
      AutobusatName: "",
      Orari: "",
      OraNisjes: "",
      OraMberritjes: "",
    };
  }
  refreshList() {
    fetch(variables.API_URL + "orari")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ oraret: data });
      });

    fetch(variables.API_URL + "autobusat")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ autobusat: data });
      });
  }
  componentDidMount() {
    this.refreshList();
  }
  render() {
    const {
      autobusat,
    } = this.state;
    return (
    <div>
    <div className="back">
    <button className="bback"><a href="javascript:history.back()">Go Back</a></button>
    </div>
        <div class="AutobusatApp">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>AutobusatId</th>
                <th>AutobusatName</th>
                <th>Orari</th>
                <th>OraNisjes</th>
                <th>OraMberritjes</th>
              </tr>
            </thead>
            <tbody>
              {autobusat.map((auto) => (
                <tr key={auto.AutobusatId}>
                  <td>{auto.AutobusatId}</td>
                  <td>{auto.AutobusatName}</td>
                  <td>{auto.Orari}</td>
                  <td>{auto.OraNisjes}</td>
                  <td>{auto.OraMberritjes}</td>
                </tr>
              ))}
            </tbody>
          </table>
      </div>
    </div>
    );
  }
}
