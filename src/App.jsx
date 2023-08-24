import { useState } from "react"
import Card from "./components/Card"

function App() {
  const [colorsList, setColorsList] = useState([]);
  const [color, setColor] = useState('');
  const [name, setName] = useState('');

  const handleChange = ({ target }) => {
    if (target.id === 'name') {
        setName(target.value);
        console.log(name);
    } else {
        setColor(target.value);
        console.log(color);
    }
}

  const handleOnsubmit = () => {
    setColorsList((state) => [...state, {name, color}])    
  }

  return (
    <div className="App main">
      <form action="" className="form">
        <h2>ADICONAR NOVA COR</h2>
        <div>
            <div className="div_input">
                <label htmlFor="name">Nome</label>
                <input className="input" type="text" id="name" onChange={handleChange}/>
            </div>
            <div className="div_input">
                <label htmlFor="color">Cor</label>
                <input className="input" type="text" id="color" onChange={handleChange}/>
            </div>
        </div>
        <button type="button" onClick={handleOnsubmit}>ADICIONAR</button>
      </form>
      <div>
        <h2>Cores Favoritas</h2>
        {colorsList && 
        (
          colorsList.map(({name, color}, index) => 
          <Card key={index} color={color} name={name}></Card>
          )
        )
        }
      </div>
    </div>
  )
}

export default App