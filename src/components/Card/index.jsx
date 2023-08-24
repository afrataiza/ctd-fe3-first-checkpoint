//Este componente deverá receber dados por Props e mostrar as Informações em Tela

function Card ({name, color}) {
  const cardStyle = {
    backgroundColor: color,
    color: 'darkgrey',
    width: '590px',
    height: '258px',
    display: 'flex',
    gap: '10px',
    padding: '32px',
    justifyContent: 'flex-end',
    borderRadius: '12px',
    border: '4px solid rgba(255, 255, 255, 0.20)',
    flexDirection: 'column',
    boxSizing: 'border-box'
  }

  const spanColor = {
    fontSize: '32px',
    fontWeight: '900'
  }

  return (
    <div>
      <div style={cardStyle}>
          <span>{name}</span>
          <span style={spanColor}>{color}</span>
      </div>
    </div>
  )
}

export default Card;