import React, { Component } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import { Link } from "react-router-dom";
import "../../Css/Tablas.css";

//------ tener el url a mano
let url = "https://back.jopaco.online/api/excel";
const cookies = new Cookies();

const token = cookies.get("token");

class Venta extends React.Component {
  state = {
    usuario: [],
    mensaje: "",
    url: "",
    downloadUrl: "",
  };

  render() {
    return <div id="contenedorVenta"></div>;
  }

  componentDidMount() {
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const link = document.createElement("a");
        const div = document.getElementById("contenedorVenta");
        link.href = "https://back.jopaco.online/excel";
        link.text = "Descarga el archivo";
        div.appendChild(link);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

export default Venta;
