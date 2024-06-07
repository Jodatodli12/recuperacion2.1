import Form from "react-bootstrap/Form";
import noFoto from "../../../assets/img/noDisponible.png";

export const RegisConci = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="col-md-8 mt-5 pb-4"> 
        <Form noValidate>
          <div className="card">
            <div className="card-header">
              <h2 className="rojito">Formulario creación</h2> 
            </div>

            <div className="card-body">
              <div className="mb-4"> 
                <Form.Group controlId="nombrePelicula">
                  <Form.Label>
                    <span className="rojito">*</span> Nombre del artista
                  </Form.Label>
                  <Form.Control size="lg" required type="text" name="nombrePelicula" /> 
                </Form.Group>
              </div>

              <div className="mb-4">
                <Form.Group controlId="pro">
                  <Form.Label>
                    <span className="rojito">*</span> Nombre de la Gira
                  </Form.Label>
                  <Form.Control size="lg" required type="text" name="protagonistaPelicula" />
                </Form.Group>
              </div>

              <div className="mb-4">
                <Form.Group controlId="pro">
                  <Form.Label>
                    <span className="rojito">*</span> Fecha
                  </Form.Label>
                  <Form.Control size="lg" required type="text" name="protagonistaPelicula" />
                </Form.Group>
              </div>

              <div className="mb-4">
                <Form.Group controlId="fot">
                  <Form.Label>
                    <span className="rojito">*</span> Imágen
                  </Form.Label>
                  <Form.Control size="lg" required type="file" name="imagenPelicula" />
                </Form.Group>
              </div>

              <div className="mb-4">
                <div className="d-flex justify-content-center">
                  <img src={noFoto} alt="no foto" className="maximoTamanoCreacion img-fluid" /> 
                </div>
              </div>
            </div>

            <div className="card-footer">
              <button type="submit" className="btn btn-primary btn-lg">
                Crear película
              </button> 
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};