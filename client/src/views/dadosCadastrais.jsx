import React, { Component } from 'react';
import { Card, Form } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class DadosCadastrais extends Component {

  constructor(props) {
    super(props);

    this.state = {
      startDate: new Date()
    };
  }


  handleChange = date => {
    console.log(date);
    this.setState({
      startDate: date
    });
  };

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
        <Card className="text-center" bg="primary" text="white" style={{ height: "10em" }}>
          <Card.Body style={styleCenter}>
            <Card.Title >Dados Cadastrais</Card.Title>
            <Card.Text>
              <Form.Group >
                <Form.Label>Nome:</Form.Label>
                <Form.Control onKeyUp={(e) => { console.log(e.target.value) }} placeholder="Nome" />
              </Form.Group>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="text-center" bg="secondary" text="white" style={{ height: "10em" }}>
          <Card.Body style={styleCenter}>
            <Card.Title >Data de Aniversário</Card.Title>
            <DatePicker
              selected={this.state.startDate}
              onChange={this.handleChange}
            />
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default DadosCadastrais;