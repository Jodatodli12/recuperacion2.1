export const AdminConci = () => {
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="col-md-11 mt-4">
          <table className="table table-striped table-hover">
            <thead>
              <tr className="table-danger">
                <th style={{ width: "10%" }}>Nro</th>
                <th style={{ width: "30%" }}>Nombre del artista</th>
                <th style={{ width: "25%" }}>Gira</th>
                <th style={{ width: "25%" }}>Fecha</th>
                <th style={{ width: "10%" }}> </th>
              </tr>
            </thead>
            <tbody>
            <tr className="align-middle">
                <td>1</td>
                <td>Andres cepeda</td>
                <td>Nuestro sueño en canciones</td>
                <td>Noviembre 1 2024</td>
                <td className="text-center">
                  <a href="/#">
                    <i className="fa-solid fa-trash-can rojito" ></i>
                  </a>{" "}
                  <a href="/pactual/1">
                    <i className="fa-regular fa-pen-to-square verde"></i>
                  </a>
                </td>
              </tr>
              <tr className="align-middle">
                <td>2</td>
                <td>MORAT</td>
                <td>Los Estadios</td>
                <td>Diciembre 2 2024</td>
                <td className="text-center">
                  <a href="/#">
                    <i className="fa-solid fa-trash-can rojito"></i>
                  </a>{" "}
                  <a href="/pactual/2">
                    <i className="fa-regular fa-pen-to-square verde"></i>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
