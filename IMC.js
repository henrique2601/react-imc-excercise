import React from 'react';
import {
  Container,
  Form,
  FormControl,
  Navbar,
  NavDropdown,
  Nav,
  Alert,
  Button
} from 'react-bootstrap';

class IMC extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      imc: 0,
      peso: 0,
      altura: 0
    };
  }

  calculaIMC = () => {
    const {peso, altura} = this.state;
    if (peso == 0 || altura == 0) {
      return;
    }
    let imc = (peso / (altura * altura)).toFixed(2);
    this.setState({ imc });
  }

  atualizaPeso = (event) => {
    this.setState({peso: event.target.value}, this.calculaIMC);
  }

  atualizaAltura = (event) => {
    this.setState({altura: event.target.value}, this.calculaIMC);
  }

  render() {
    return(
        <> 
          <div className="header">
            <h1> IMC </h1>
          </div>

          <div className="form">
            <div className="groupe">
              <p>Peso (Kg)</p>
              <input 
                type="text" 
                onChange={this.atualizaPeso} 
                placeholder="Informe seu peso"/>
            </div>

            <div className="groupe">
              <p>Altura (M)</p>
              <input 
                type="text" 
                onChange={this.atualizaAltura} 
                placeholder="Informe sua altura"/>
            </div>

            <button 
              disabled={this.state.peso==0 || this.state.altura ==0}
              onClick={this.calculaIMC}>
                Calcular
            </button>
          </div>

          <div className="result">
            <h2>{this.state.imc}</h2>
          </div>
        </>
    )
  }
}

export default IMC;