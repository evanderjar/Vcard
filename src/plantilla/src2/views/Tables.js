import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";

class Tables extends React.Component {
  render() {
    return (
      <>
        <div className="content">
        <Row>
          <div className="update ml-auto mr-auto">
            <Button
              className="btn-round"
              color="primary"
              type="submit"
            >
             Agregar Nuevo Usuario
            </Button>
              </div>
              <div className="update ml-auto mr-auto">
            <Button
              className="btn-round"
              color="primary"
              type="submit"
            >
             Exportar
            </Button>
              </div>
              <div className="update ml-auto mr-auto">
            <Button
              className="btn-round"
              color="primary"
              type="submit"
            >
             ACTUALIZAR
            </Button>
              </div>
              <div className="update ml-auto mr-auto">
            <Button
              className="btn-round"
              color="primary"
              type="submit"
            >
             ACTUALIZAR
            </Button>
              </div>
          </Row>
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Simple Table</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table responsive style={{paddingBottom: "92px"}}>
                    <thead className="text-primary">
                      <tr>
                        <th>Ruta Dinamica</th>
                        <th>fecha</th>
                        <th>Acciones</th>
                        <th>Enviar</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Dakota Rice</td>
                        <td>Niger</td>
                        <td>Oud-Turnhout</td>
                        <td><Row>
                        <Button
                        style={{marginRight:"10px"}}
                        color="primary"
                        type="submit"
                        size="sm"
                        >
                        VCard
                        </Button>
                        <Button
                        color="primary"
                        type="submit"
                        size="sm"
                        >
                        Enviado
                        </Button>
                          </Row>
                        </td>
                      </tr>
                      <tr>
                        <td>Minerva Hooper</td>
                        <td>Curaçao</td>
                        <td>Sinaai-Waas</td>
                        <td >
                        <Row>
                        <Button
                        style={{marginRight:"10px"}}
                        color="primary"
                        type="submit"
                        size="sm"
                        >
                        VCard
                        </Button>
                        <Button
                        color="primary"
                        type="submit"
                        size="sm"
                        >
                        Enviado
                        </Button>
                          </Row>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Tables;
