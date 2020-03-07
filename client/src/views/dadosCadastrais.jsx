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
        <Card className="text-center" bg="success" text="white" style={{ height: "10em" }}>
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

        <Card className="text-center" bg="success" text="white"  style={{ height: "10em" , overflow : "visible"}}>
          <Card.Body style={{styleCenter, overflow: "visible"}}>
            <Card.Title >Data de Nascimento</Card.Title>
            <Row>
              <Col style={{display: "flex", justifyContent: "flex-end" }}>
                <DatePicker
                  dateFormat='P'
                  selected={this.state.startDate}
                  onChange={this.handleChange}
                  onKeyUp={this.handleChange}
                  showYearDropdown style={{overflow : "visible"}}
                />
              </Col>
              <Col style={{display: "flex", justifyContent: "flex-start"}}>
                {calculateAge(this.state.startDate)} Anos
              </Col>
            </Row>

          </Card.Body>
        </Card>

        <Card className="text-center" bg="success" text="white" style={{ height: "10em" , overflow : "visible"}}>
          <Card.Body style={styleCenter}>
            <Card.Title >Duração da Diabetes</Card.Title>
            <Card.Text>
              <Form.Group >
                <Form.Control onKeyUp={(e) => { console.log(e.target.value) }} placeholder="Duração" />
              </Form.Group>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="text-center" bg="success" text="white" style={{ height: "10em" , overflow : "visible"}}>
          <Card.Body style={styleCenter}>
            <Card.Title >Tipo de tratamento:</Card.Title>
            <Form>
              {['checkbox'].map(type => (
                <div key={`inline-${type}`} className="mb-2">
                  <Form.Check inline label="Anti-glicêmico Oral" type={type} id={`inline-${type}-1`} />
                  <Form.Check inline label="Insulina" type={type} id={`inline-${type}-2`} />
                </div>
              ))}
            </Form>
          </Card.Body>
        </Card>

        <Card className="text-center" bg="success" text="white" style={{ height: "10em" , overflow : "visible"}}>
          <Card.Body style={styleCenter}>
            <Card.Title >Data da ultima consulta:</Card.Title>
            <Row>
              <Col style={{display: "flex", justifyContent: "flex-start" }}>
                <DatePicker
                  dateFormat='P'
                  selected={this.state.startDate}
                  onChange={this.handleChange}
                  onKeyUp={this.handleChange}
                  showYearDropdown style={{overflow : "visible"}}
                />
              </Col>
            </Row>
          </Card.Body>
        </Card>

        <Card className="text-center" bg="success" text="white" style={{ height: "10em" , overflow : "visible"}}>
          <Card.Body style={styleCenter}>
            <Card.Title >Nivel de atividade:</Card.Title>
            <Form>
              {['checkbox'].map(type => (
                <div key={`inline-${type}`} className="mb-2">
                  <Form.Check label="Até 3 vezes por semana" type={type} id={`inline-${type}-1`} />
                  <Form.Check label="Mais de 3 vezes por semana" type={type} id={`inline-${type}-2`} />
                  <Form.Check label="Não pratico atividades fisicas" type={type} id={`inline-${type}-2`} />
                </div>
              ))}
            </Form>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default DadosCadastrais;