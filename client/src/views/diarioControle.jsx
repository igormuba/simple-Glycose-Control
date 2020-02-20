import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class DiarioControle extends Component {
  render() {

    let styleCenter = {
      padding: "15px 25px",
      width: "100%",
      maxWidth: "500px",
      position: "absolute",
      transform: "translate(-50%, -50%)",
      left: "50%",
      top: "50%"
    }
    return (
      <div>
        <>
          <Link to="/dadoscadastrais">
            <Card className="text-center" bg="primary" text="white" style={{ height: "10em" }} >
              <Card.Body style={styleCenter}>
                <Card.Title >Dados Cadastrais</Card.Title>

              </Card.Body>
            </Card>
          </Link>



          <Card className="text-center" bg="secondary" text="white" style={{ height: "10em" }}>
            <Card.Body style={styleCenter}>
              <Card.Title >Minha Glicose Hoje</Card.Title>

            </Card.Body>
          </Card>



          <Card className="text-center" bg="success" text="white" style={{ height: "10em" }}>
            <Card.Body style={styleCenter}>
              <Card.Title >Minha Glicose Essa Semana</Card.Title>

            </Card.Body>
          </Card>



          <Card className="text-center" bg="danger" text="white" style={{ height: "10em" }}>
            <Card.Body style={styleCenter}>
              <Card.Title >Minha Glicose Esse Mês</Card.Title>

            </Card.Body>
          </Card>



          <Card className="text-center" bg="warning" text="white" style={{ height: "15em" }}>
            <Card.Body style={styleCenter}>
              <Card.Title >Você Sabia?</Card.Title>

            </Card.Body>
          </Card>



        </>
      </div>
    );
  }
}

export default DiarioControle;