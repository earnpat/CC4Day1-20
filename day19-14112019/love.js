const red = { color: 'red' }
const yellow = { color: 'yellow' }

function Hello(props) {
    const text = {
        fontSize: props.size,
        borderStyle: 'solid',
        borderColor: props.borderColor,
        borderWidth: '2px',
        display: 'inline-block',
        padding: '10px'
    }

    return (
        <div style={text}>
            <span style={{color: props.Rcolor}}>L</span>
            .
            <span style={yellow}>O</span>
            .
            <span style={{color: props.Rcolor}}>V</span>
            .
            <span style={yellow}>E</span>
        </div>
    )
}

  const App = <Hello Rcolor="red" borderColor="black" size="100px"/>

  ReactDOM.render(
    App,
    document.getElementById('root')
  )