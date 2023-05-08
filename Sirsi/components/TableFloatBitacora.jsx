import React, { useEffect, useState } from "react";
// import DataTable from "react-data-table-component";
import DataTable from "react-data-table-component";
// import BitacoraHeader from "./BitacoraHeader";
import BitacoraDetail from "./BitacoraDetail";

export default function TableFloatBitacora({ clickID, oderId, handleClickId }) {
  const [checkTabla, setCheckTabla] = useState("");
  const [data, setData] = useState([]);
  const [encabezado, setEncabezado] = useState([]);
  const [activeSection, setActiveSection] = useState("");

  // const handleBotonClick = (e) => {
  //   setCheckTabla(e.target.value);
  // };

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  useEffect(() => {
    // document.addEventListener("DOMContentLoaded", function () {
    //   const bsOffcanvas = new bootstrap.Offcanvas("#offcanvasBottom");
    // });
    const url = `${process.env.RUTA_API}/sirsi/web/BuscarBitacoraDatos?id=${oderId}&pacid=${clickID}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data.data))
      .catch((error) => console.log(error, "⣿⣿⣿⠟⢹⣶⣶⣝⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⡟⢰⡌⠿⢿⣿⡾⢹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⢸⣿⣤⣒⣶⣾⣳⡻⣿⣿⣿⣿⡿⢛⣯⣭⣭⣭⣽⣻⣿⣿⣿ ⣿⣿⣿⢸⣿⣿⣿⣿⢿⡇⣶⡽⣿⠟⣡⣶⣾⣯⣭⣽⣟⡻⣿⣷⡽⣿ ⣿⣿⣿⠸⣿⣿⣿⣿⢇⠃⣟⣷⠃⢸⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣽ ⣿⣿⣿⣇⢻⣿⣿⣯⣕⠧⢿⢿⣇⢯⣝⣒⣛⣯⣭⣛⣛⣣⣿⣿⣿⡇ ⣿⣿⣿⣿⣌⢿⣿⣿⣿⣿⡘⣞⣿⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇ ⣿⣿⣿⣿⣿⣦⠻⠿⣿⣿⣷⠈⢞⡇⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇ ⣿⣿⣿⣿⣿⣿⣗⠄⢿⣿⣿⡆⡈⣽⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢻ ⣿⣿⣿⣿⡿⣻⣽⣿⣆⠹⣿⡇⠁⣿⡼⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⣾ ⣿⠿⣛⣽⣾⣿⣿⠿⠋⠄⢻⣷⣾⣿⣧⠟⣡⣾⣿⣿⣿⣿⣿⣿⡇⣿ ⢼⡟⢿⣿⡿⠋⠁⣀⡀⠄⠘⠊⣨⣽⠁⠰⣿⣿⣿⣿⣿⣿⣿⡍⠗⣿ ⡼⣿⠄⠄⠄⠄⣼⣿⡗⢠⣶⣿⣿⡇⠄⠄⣿⣿⣿⣿⣿⣿⣿⣇⢠⣿"));
  }, []);

  const columnHead = [
    {
      name: "Detalle",
      selector: "botón",
      sortable: true,
      cell: () => (
        <button className='btn'>
          <i className='bi bi-search'></i>
        </button>
      ),
    },
    {
      name: "Bita ID",
      selector: "BitacoraId.Int64",
      sortable: true,
    },
    {
      name: "Tabla",
      selector: "Tabla.String",
      sortable: true,
    },
    {
      name: "Tabla_ID",
      selector: "TablaId.Int64",
      sortable: true,
    },
    {
      name: "Accion",
      selector: "Accion.String",
      sortable: true,
    },
    {
      name: 'Fecha',
      selector: 'Fecha',
      sortable: true,
      cell: row => {
        const fechaOriginal = row.Fecha.String;
        const fecha = new Date(fechaOriginal);
        const dia = fecha.getDate().toString().padStart(2, '0');
        const mes = (fecha.getMonth() + 1).toString().padStart(2, '0');
        const anio = fecha.getFullYear();
        const hora = fecha.getHours().toString().padStart(2, '0');
        const minutos = fecha.getMinutes().toString().padStart(2, '0');
        const fechaFormateada = `${dia}/${mes}/${anio} ${hora}:${minutos}`;
        return <div>{fechaFormateada}</div>;
      }
    },
    {
      name: "Usuario",
      selector: "Usuario.String",
      sortable: true,
    },
  ];

  const columnHeadDetalle = [
    {
      name: "Detalle",
      selector: "botón",
      sortable: true,
      cell: () => (
        <button className='btn'>
          <i className='bi bi-search'></i>
        </button>
      ),
    },
    {
      name: "BITA Id",
      selector: "BitacoraId.Int64",
      sortable: true,
    },
    {
      name: "Tabla",
      selector: "Tabla.String",
      sortable: true,
    },
    {
      name: "Estudio",
      selectpr: "Estudio.String",
      sortable: true,
    },
    {
      name: "Accion",
      selector: "Accion.String",
      sortable: true,
    },
    {
      name: "Fecha",
      selector: "Fecha",
      sortable: true,
      cell: row => {
        const fechaOriginal = row.Fecha.String;
        const fecha = new Date(fechaOriginal);
        const dia = fecha.getDate().toString().padStart(2, '0');
        const mes = (fecha.getMonth() + 1).toString().padStart(2, '0');
        const anio = fecha.getFullYear();
        const hora = fecha.getHours().toString().padStart(2, '0');
        const minutos = fecha.getMinutes().toString().padStart(2, '0');
        const fechaFormateada = `${dia}/${mes}/${anio} ${hora}:${minutos}`;
        return <div>{fechaFormateada}</div>;
      }
    },
    {
      name: "Usuario",
      selector: "Usuario.String",
      sortable: true,
    },
    {
      name: "TablaId",
      selector: "TablaId.Int64",
      sortable: true,
    },
  ];

  const columnHeadPagos = [
    {
      name: "Detalle",
      selector: "botón",
      sortable: true,
      cell: () => (
        <button className='btn'>
          <i className='bi bi-search'></i>
        </button>
      ),
    },
    {
      name: "BITA ID",
      selector: "BitacoraId.Int64",
      sortable: true,
    },
    {
      name: "Tabla",
      selector: "Tabla.String",
      sortable: true,
    },
    {
      name: "TablaId",
      selector: "TablaId.Int64",
      sortable: true,
    },
    {
      name: "Accion",
      selector: "Accion.String",
      sortable: true,
    },
    {
      name: "Fecha",
      selector: "Fecha.String",
      sortable: true,
      cell: row => {
        const fechaOriginal = row.Fecha.String;
        const fecha = new Date(fechaOriginal);
        const dia = fecha.getDate().toString().padStart(2, '0');
        const mes = (fecha.getMonth() + 1).toString().padStart(2, '0');
        const anio = fecha.getFullYear();
        const hora = fecha.getHours().toString().padStart(2, '0');
        const minutos = fecha.getMinutes().toString().padStart(2, '0');
        const fechaFormateada = `${dia}/${mes}/${anio} ${hora}:${minutos}`;
        return <div>{fechaFormateada}</div>;
      }
    },
    {
      name: "Usuario",
      selector: "Usuario.String",
      sortable: true,
    },
    {
      name: "OTPa OTEn ID",
      selector: "OTPa_OTEnId.Int64",
      sortable: true,
    },
  ];

  const columnHeadTickets = [
    {
      name: "Detalle",
      selector: "botón",
      sortable: true,
      cell: () => (
        <button className='btn'>
          <i className='bi bi-search'></i>
        </button>
      ),
    },
    {
      name: "Ti ID",
      selector: "TicketId.Int64",
      sortable: true,
    },
    {
      name: "TiNoTicket",
      selector: "TicketNumero.Int64",
      sortable: true,
    },
    {
      name: "TiPago",
      selector: "TicketPago.Float64",
      sortable: true,
    },
    {
      name: "TiFecha",
      selector: "TicketFecha",
      sortable: true,
      cell: row => {
        const fechaOriginal = row.TicketFecha.String;
        const fecha = new Date(fechaOriginal);
        const dia = fecha.getDate().toString().padStart(2, '0');
        const mes = (fecha.getMonth() + 1).toString().padStart(2, '0');
        const anio = fecha.getFullYear();
        const hora = fecha.getHours().toString().padStart(2, '0');
        const minutos = fecha.getMinutes().toString().padStart(2, '0');
        const fechaFormateada = `${dia}/${mes}/${anio} ${hora}:${minutos}`;
        return <div>{fechaFormateada}</div>;
      }
    },
  ];

  const columnHeadPacientes = [
    {
      name: "Detalle",
      selector: "botón",
      sortable: true,
      cell: () => (
        <button className='btn'>
          <i className='bi bi-search'></i>
        </button>
      ),
    },
    {
      name: "BitacoraId",
      selector: "BitacoraId.Int64",
      sortable: true,
    },
    {
      name: "Tabla",
      selector: "Tabla.String",
      sortable: true,
    },
    {
      name: "TablaId",
      selector: "TablaId.Int64",
    },
    {
      name: "Accion",
      selector: "Accion.String",
      sortable: true,
    },
    {
      name: "Fecha",
      selector: "Fecha",
      sortable: true,
      cell: row => {
        const fechaOriginal = row.Fecha.String;
        const fecha = new Date(fechaOriginal);
        const dia = fecha.getDate().toString().padStart(2, '0');
        const mes = (fecha.getMonth() + 1).toString().padStart(2, '0');
        const anio = fecha.getFullYear();
        const hora = fecha.getHours().toString().padStart(2, '0');
        const minutos = fecha.getMinutes().toString().padStart(2, '0');
        const fechaFormateada = `${dia}/${mes}/${anio} ${hora}:${minutos}`;
        return <div>{fechaFormateada}</div>;
      }
    },
    {
      name: "Usuario",
      selector: "Usuario.String",
      sortable: true,
    }
  ]

  const columnHeadTrazabilidad = [
    {
      name: "Detalle",
      selector: "botón",
      sortable: true,
      cell: () => (
        <button className='btn'>
          <i className='bi bi-search'></i>
        </button>
      ),
    },
    {
      name: "Fecha",
      selector: "Fecha.String",
      sortable: true,
    },
    {
      name: "Muestra",
      selector: "Muestra.String",
      sortable: true,
    },
    {
      name: "Estatus",
      selector: "Estatus.String",
      sortable: true,
    },
    {
      name: "Usuario",
      selector: "Usuario.String",
      sortable: true,
    },
  ]

  return (
    <>
      <div className='offcanvas-header'>
        <h5 className='offcanvas-title' id='offcanvasBottomLabel'>
          {oderId}
        </h5>
        <button
          type='button'
          className='btn-close'
          data-bs-dismiss='offcanvas'
          aria-label='Close'
        ></button>
      </div>
      <div className=''>
        <div className='ms-1 row'>
          <div></div>
          <div className=' mb-3 col-12 col-xxl-5 col-xl-12 col-sm-12 table-responsive'>
            {/* /////////// */}

            <div
              className='btn-group col-5 pe-3'
              role='group'
              aria-label='Basic radio toggle button group'
            >
              <input
                type='radio'
                className='btn-check bitacora-checked'
                name='btnradio'
                id='btnradio1'
                autocomplete='off'
                // value={"1"}
                checked={activeSection === "Encabezado"}
                onChange={() => handleSectionChange("Encabezado")}
              />
              <label className='btn btn-outline-secondary' htmlFor='btnradio1'>
                Encabezado
              </label>

              <input
                type='radio'
                className='btn-check bitacora-checked'
                name='btnradio'
                id='btnradio2'
                autocomplete='off'
                // value={"2"}
                checked={activeSection === "Detalle"}
                onChange={() => handleSectionChange("Detalle")}
              />
              <label className='btn btn-outline-secondary' htmlFor='btnradio2'>
                Detalle
              </label>

              <input
                type='radio'
                className='btn-check bitacora-checked'
                name='btnradio'
                id='btnradio3'
                autocomplete='off'
                // value={"3"}
                checked={activeSection === "Pagos"}
                onChange={() => handleSectionChange("Pagos")}
              />
              <label className='btn btn-outline-secondary' htmlFor='btnradio3'>
                Pagos
              </label>

              <input
                type='radio'
                className='btn-check bitacora-checked'
                name='btnradio'
                id='btnradio4'
                autocomplete='off'
                // value={"4"}
                checked={activeSection === "Tickets"}
                onChange={() => handleSectionChange("Tickets")}
              />
              <label className='btn btn-outline-secondary' htmlFor='btnradio4'>
                Tickets
              </label>

              <input
                type='radio'
                className='btn-check bitacora-checked'
                name='btnradio'
                id='btnradio5'
                autocomplete='off'
                // value={"5"}
                checked={activeSection === "Pacientes"}
                onChange={() => handleSectionChange("Pacientes")}
              />
              <label className='btn btn-outline-secondary' htmlFor='btnradio5'>
                Paciente
              </label>

              <input
                type='radio'
                className='btn-check bitacora-checked'
                name='btnradio'
                id='btnradio6'
                autocomplete='off'
                // value={"6"}
                checked={activeSection === "Trazabilidad"}
                onChange={() => handleSectionChange("Trazabilidad")}
              />
              <label className='btn btn-outline-secondary' htmlFor='btnradio6'>
                Trazabilidad
              </label>
            </div>

            {/* /////////// */}

            {/* /// Data como estado asi que también columnas como un estado
            para cada input */}

            {activeSection === "Encabezado" && (
              <DataTable data={data.Encabezado} columns={columnHead} />
            )}

            {activeSection === "Detalle" && (
              <DataTable data={data.Detalle} columns={columnHeadDetalle} />
            )}

            {activeSection === "Pagos" && (
              <DataTable data={data.Pagos} columns={columnHeadPagos} />
            )}

            {activeSection === "Tickets" && (
              <DataTable data={data.Tickets} columns={columnHeadTickets} />
            )}

            {activeSection === "Pacientes" && (
              <DataTable data={data.Paciente} columns={columnHeadPacientes} />
            )}

            {activeSection === "Trazabilidad" && (
              <DataTable data={data.Trazabilidad} columns={columnHeadTrazabilidad} />
            )}
          </div>

          <BitacoraDetail />
        </div>
      </div>
    </>
  );
}

// consulta individual y horas con minutos
