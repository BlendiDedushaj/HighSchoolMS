import React, { Component } from "react";
import { variables } from "../utils/Variables.js";
import Navbar from "./Navbar.js";
import "../styles/syllabusi.css";


export class Syllabusi extends Component {
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

  changeLenda = (e) => {
    this.setState({ Lenda: e.target.value });
  };
  changeProfesori = (e) => {
    this.setState({ Profesori: e.target.value });
  };
  changeTekst = (e) => {
    this.setState({ Tekst: e.target.value });
  };

  addClick() {
    this.setState({
      modalTitle: "Shto Syllabus",
      SyllabusiId: 0,
      Lenda: "",
      Profesori: "",
      Tekst: "",
    });
  }

  editClick(sy) {
    this.setState({
      modalTitle: "Edit Syllabusin",
      SyllabusiId: sy.SyllabusiId,
      Lenda: sy.Lenda,
      Profesori: sy.Profesori,
      Tekst: sy.Tekst,
    });
  }

  createClick() {
    fetch(variables.API_URL + "syllabusi", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Lenda: this.state.Lenda,
        Profesori: this.state.Profesori,
        Tekst: this.state.Tekst,
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
    fetch(variables.API_URL + "syllabusi", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        SyllabusiId: this.state.SyllabusiId,
        Lenda: this.state.Lenda,
        Profesori: this.state.Profesori,
        Tekst: this.state.Tekst,
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
      fetch(variables.API_URL + "syllabusi/" + id, {
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
      lendet,
      profesoret,
      syllabuset,
      modalTitle,
      SyllabusiId,
      Lenda,
      Profesori,
      Tekst,
    } = this.state;
    return (
    <div>
        <Navbar />
        <div class="SyllabusiApp">
          <button
            type="button"
            className="btn btn-primary m-2 float-end"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            onClick={() => this.addClick()}
          >
            Shto Syllabusin
          </button>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>SyllabusiId</th>
                <th>Lenda</th>
                <th>Profesori</th>
                <th>Tekst</th>
                <th>Options</th>
              </tr>
            </thead>
            <tbody>
              {syllabuset.map((sy) => (
                <tr key={sy.SyllabusiId}>
                  <td>{sy.SyllabusiId}</td>
                  <td>{sy.Lenda}</td>
                  <td>{sy.Profesori}</td>
                  <td>{sy.Tekst}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-light mr-1"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      onClick={() => this.editClick(sy)}
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
                      onClick={() => this.deleteClick(sy.SyllabusiId)}
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
                        <span className="input-group-text">Lenda</span>
                        <select
                          className="form-select"
                          onChange={this.changeLenda}
                          value={Lenda}
                        >
                          {lendet.map((len) => (
                            <option key={len.LendaId}>{len.LendaName}</option>
                          ))}
                        </select>
                      </div>
                      <div className="input-group mb-3">
                        <span className="input-group-text">Profesori</span>
                        <select
                          className="form-select"
                          onChange={this.changeProfesori}
                          value={Profesori}
                        >
                          {profesoret.map((prof) => (
                            <option key={prof.ProfesoriId}>{prof.ProfesoriName}</option>
                          ))}
                        </select>
                      </div>
                      <div className="input-group mb-3">
                        <span className="input-group-text">Tekst</span>
                        <input
                          type="text"
                          className="form-control"
                          value={Tekst}
                          onChange={this.changeTekst}
                        />
                      </div>
                  </div>
                  {SyllabusiId === 0 ? (
                    <button
                      type="button"
                      className="btn btn-primary float-start"
                      onClick={() => this.createClick()}
                    >
                      Create
                    </button>
                  ) : null}

                  {SyllabusiId !== 0 ? (
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
