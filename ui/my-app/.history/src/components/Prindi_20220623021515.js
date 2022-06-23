import React, { Component } from "react";
import { variables } from "../utils/Variables.js";

import "../styles/prindi.css";


export class Prindi extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nxenesit: [],
      prinderit: [],
      modalTitle: "",
      PrindiId: 0,
      PrindiName: "",
      PrindiSurname: "",
      Nxenesi: "",
    };
  }

  refreshList() {
    fetch(variables.API_URL + "nxenesi")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ nxenesit: data });
      });

    fetch(variables.API_URL + "prindi")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ prinderit: data });
      });
  }

  componentDidMount() {
    this.refreshList();
  }

  changePrindiName = (e) => {
    this.setState({ PrindiName: e.target.value });
  };
  changePrindiSurname = (e) => {
    this.setState({ PrindiSurname: e.target.value });
  };
  changeNxenesi = (e) => {
    this.setState({ Nxenesi: e.target.value });
  };

  addClick() {
    this.setState({
      modalTitle: "Shto Prindin",
      PrindiId: 0,
      PrindiName: "",
      PrindiSurname: "",
      Nxenesi: "",
    });
  }

  editClick(pr) {
    this.setState({
      modalTitle: "Edit Prindin",
      PrindiId: pr.PrindiId,
      PrindiName: pr.PrindiName,
      PrindiSurname: pr.PrindiSurname,
      Nxenesi: pr.Nxenesi,
    });
  }

  createClick() {
    fetch(variables.API_URL + "prindi", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        PrindiName: this.state.PrindiName,
        PrindiSurname: this.state.PrindiSurname,
        Nxenesi: this.state.Nxenesi,
      }),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          alert(result);
          this.refreshList();
        },
        (error) => {
          alert("Failed");
        }
      );
  }

  updateClick() {
    fetch(variables.API_URL + "prindi", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        PrindiId:this.state.PrindiId,
        PrindiName: this.state.PrindiName,
        PrindiSurname: this.state.PrindiSurname,
        Nxenesi: this.state.Nxenesi,
      }),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          alert(result);
          this.refreshList();
        },
        (error) => {
          alert("Failed");
        }
      );
  }

  deleteClick(id) {
    if (window.confirm("A jeni i sigurt?")) {
      fetch(variables.API_URL + "prindi/" + id, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then(
          (result) => {
            alert(result);
            this.refreshList();
          },
          (error) => {
            alert("Failed");
          }
        );
    }
  }

  render() {
    const {
      prinderit,
      nxenesit,
      modalTitle,
      PrindiId,
      PrindiName,
      PrindiSurname,
      Nxenesi,
    } = this.state;
    return (
    <div>
    <div className="back">
    <button className="bback"><a href="javascript:history.back()">Go Back</a></button>       </div>
        <div class="PrindiApp">
          <button
            type="button"
            className="btn btn-primary m-2 float-end"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            onClick={() => this.addClick()}
          >
            Shto Prindin
          </button>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>PrindiId</th>
                <th>PrindiName</th>
                <th>PrindiSurname</th>
                <th>Nxenesi</th>
                <th>Options</th>
              </tr>
            </thead>
            <tbody>
              {prinderit.map((pr) => (
                <tr key={pr.PrindiId}>
                  <td>{pr.PrindiId}</td>
                  <td>{pr.PrindiName}</td>
                  <td>{pr.PrindiSurname}</td>
                  <td>{pr.Nxenesi}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-light mr-1"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      onClick={() => this.editClick(pr)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-pencil-square"
                        viewBox="0 0 16 16"
                      >
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                        <path
                          fillRule="evenodd"
                          d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                        />
                      </svg>
                    </button>
                    <button
                      type="button"
                      className="btn btn-light mr-1"
                      onClick={() => this.deleteClick(pr.PrindiId)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-trash-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-lg modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">{modalTitle}</h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>

                <div className="modal-body">
                  <div className="d-flex flex-row bd-highlight mb-3">
                    <div className="p-2 w-50 bd-highlight">
                      <div className="input-group mb-3">
                        <span className="input-group-text">Prindi Name</span>
                        <input
                          type="text"
                          className="form-control"
                          value={PrindiName}
                          onChange={this.changePrindiName}
                        />
                      </div>
                      <div className="input-group mb-3">
                        <span className="input-group-text">Prindi Surname</span>
                        <input
                          type="text"
                          className="form-control"
                          value={PrindiSurname}
                          onChange={this.changePrindiSurname}
                        />
                      </div>
                      <div className="input-group mb-3">
                        <span className="input-group-text">Nxenesi</span>
                        <select
                          className="form-select"
                          onChange={this.changeNxenesi}
                          value={Nxenesi}
                        >
                          {nxenesit.map((nx) => (
                            <option key={nx.NxenesiId}>{nx.NxenesiName}</option>
                          ))}
                        </select>
                      </div>
                  </div>
                  {PrindiId === 0 ? (
                    <button
                      type="button"
                      className="btn btn-primary float-start"
                      onClick={() => this.createClick()}
                    >
                      Create
                    </button>
                  ) : null}

                  {PrindiId !== 0 ? (
                    <button
                      type="button"
                      className="btn btn-primary float-start"
                      onClick={() => this.updateClick()}
                    >
                      Update
                    </button>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}
