//Este componente deverá receber dados por Props e mostrar as Informações em Tela

function Card ({name, color}) {
  const cardStyle = {
    backgroundColor: color,
    color: 'white',
    width: '300px',
    height: '100px',
    display: 'flex',
    gap: '10px',
    justifyContent: 'center',
    alignItems: 'center'
  }
  return (
    <div>
      <div style={cardStyle}>
          <span>{name}</span>
          <span>{color}</span>
      </div>
    </div>
  )
}

export default Card;