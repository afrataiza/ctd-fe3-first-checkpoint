import { useState } from "react"
import Card from "./components/Card"

function App() {
  const [colorsList, setColorsList] = useState([]);
  const [color, setColor] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [isError, setIsError] = useState(false)

  const validateInput = (colorName, colorHexa) => {
    const colorRegex = /^#([A-Fa-f0-9]{6})$/;
    if (colorName.length < 3 || !colorRegex.test(colorHexa)) {
      setError('Por favor, verifique os dados inseridos no formulário');
      setIsError(true);
    } else {
      setIsError(false);
      setError('');
    }
  }

  const handleChange = ({ target }) => {
    const id = target.id;
    const value = target.value;
    if (id === 'name') {
      setIsError(false);
      setError('');
      setName(value);
      
    } else {
      setIsError(false);
      setError('');
      setColor(value);
      
    }
  }

  const handleOnsubmit = () => {
    validateInput(name, color);
    if (color.length > 0 && name.length > 0) {
      setColorsList((state) => [...state, {name, color}]) 
    }
    setColor('');
    setName('');
       
  }

  return (
    <div className="App main">
      <form action="" className={isError ? 'form form_error': 'form form_neutral' }>
        <h2>ADICONAR NOVA COR</h2>
        <div className="container_input">
            <div className="div_input">
                <label htmlFor="name">Nome</label>
                <input placeholder="Por favor digite o nome da cor" type="text" id="name" onChange={handleChange} value={name}/>
            </div>
            <div className="div_input">
                <label htmlFor="color">Cor</label>
                <input placeholder="Insita sua cor no formato Hexadecimal" type="text" id="color" onChange={handleChange} value={color}/>
            </div>
        </div>
        <button type="button" onClick={handleOnsubmit}>ADICIONAR</button>
      </form>
      <span className="span_error">{error}</span>
      <div className="card_container">
        <h2>CORES FAVORITAS</h2>
        <div className="div_container">
          {colorsList.length > 0 && 
          (
            colorsList.map(({name, color}, index) => 
            <Card key={index} color={color} name={name}></Card>
            )
          )
          }
        </div>
      </div>
    </div>
  )
}

export default App