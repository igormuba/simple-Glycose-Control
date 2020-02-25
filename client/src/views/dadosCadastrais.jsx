import React, { Component } from 'react';
import { Card, Form, Row, Col } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import br from 'date-fns/locale/pt-BR';
import "react-datepicker/dist/react-datepicker.css";

registerLocale('br', br);
setDefaultLocale('br');


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

    function calculateAge(birthday) {
      var ageDifMs = Date.now() - birthday;
      var ageDate = new Date(ageDifMs);
      return Math.abs(ageDate.getUTCFullYear() - 1970);
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

        <Card className="text-center" bg="secondary" text="white"  style={{ height: "10em" }}>
          <Card.Body style={styleCenter}>
            <Card.Title >Data de Aniversário</Card.Title>
            <Row>
              <Col>
                <DatePicker
                style={{
                  "z-index":"9999 !important"
                }}
                  dateFormat='P'
                  selected={this.state.startDate}
                  onChange={this.handleChange}
                  onKeyUp={this.handleChange}
                  showYearDropdown
                />
              </Col>
              <Col>
                {calculateAge(this.state.startDate)} Anos
              </Col>
            </Row>

          </Card.Body>
        </Card>

        <Card className="text-center" bg="warning" text="white" style={{ height: "10em" }}>
          <Card.Body style={styleCenter}>
            <Card.Title >Duração da adohbsudgha</Card.Title>
            <Card.Text>
              <Form.Group >
                <Form.Control onKeyUp={(e) => { console.log(e.target.value) }} placeholder="Duração" />
              </Form.Group>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default DadosCadastrais;