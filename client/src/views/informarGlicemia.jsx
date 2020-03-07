import React, { Component } from 'react';
import { Card, Button, Container, Form } from 'react-bootstrap'
import { bg } from 'date-fns/locale';

class InformarGlicemia extends Component {
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
      <Card className="text-center" bg="success" text="white" style={{ height: "100vh" }}>
        <Card.Body style={styleCenter}>
          <Card.Title >Informe Sua Glicemia:</Card.Title>
          <Card.Text>
            <Form.Group >
              <Form.Control onKeyUp={(e) => { console.log(e.target.value) }} placeholder="159" />
            </Form.Group>
            <Button variant="primary">Adicionar</Button>
          </Card.Text>
        </Card.Body>
      </Card>

    );
  }
}

export default InformarGlicemia;