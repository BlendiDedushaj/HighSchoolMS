import React, { Component } from "react";
import { variables } from "../utils/Variables.js";

import "../styles/klasa.css";


export class Klasa extends Component {
  constructor(props) {
    super(props);

    this.state = {
      klasat: [],
      modalTitle: "",
      KlasaId: 0,
      KlasaName: "",
    };
  }

  refreshList() {
    fetch(variables.API_URL + "klasa")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ klasat: data });
      });
  }

  componentDidMount() {
    this.refreshList();
  }

  changeKlasaName = (e) => {
    this.setState({ KlasaName: e.target.value });
  };

  addClick() {
    this.setState({
      modalTitle: "Shto Klasen",
      KlasaId: 0,
      KlasaName: "",
    });
  }

  editClick(kl) {
    this.setState({
      modalTitle: "Edit Klasen",
      KlasaId: kl.KlasaId,
      KlasaName: kl.KlasaName,
    });
  }

  createClick() {
    fetch(variables.API_URL + "klasa", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        KlasaName: this.state.KlasaName,
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
    fetch(variables.API_URL + "klasa", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        KlasaId: this.state.KlasaId,
        KlasaName: this.state.KlasaName,
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
      fetch(variables.API_URL + "klasa/" + id, {
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
      klasat,
      modalTitle,
      KlasaId,
      KlasaName,
    } = this.state;
    return (
      <div>
      .back{
        display: flex;
       
        justify-content: flex-end;
        
    }
    .bback{
        background-color: rgb(18, 78, 255);
        border-radius: 30px;
        margin-right: 20px;
    }
        <div class="KlasaApp">
          <button
            type="button"
            className="btn btn-primary m-2 float-end"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            onClick={() => this.addClick()}
          >
            Shto Klasen
          </button>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>KlasaId</th>
                <th>KlasaName</th>
                <th>Options</th>
              </tr>
            </thead>
            <tbody>
              {klasat.map((kl) => (
                <tr key={kl.KlasaId}>
                  <td>{kl.KlasaId}</td>
                  <td>{kl.KlasaName}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-light mr-1"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      onClick={() => this.editClick(kl)}
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
                      onClick={() => this.deleteClick(kl.KlasaId)}
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
                        <span className="input-group-text">Klasa Name</span>
                        <input
                          type="text"
                          className="form-control"
                          value={KlasaName}
                          onChange={this.changeKlasaName}
                        />
                      </div>
                    </div>
                  </div>
                  {KlasaId === 0 ? (
                    <button
                      type="button"
                      className="btn btn-primary float-start"
                      onClick={() => this.createClick()}
                    >
                      Create
                    </button>
                  ) : null}

                  {KlasaId !== 0 ? (
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
    );
  }
}
