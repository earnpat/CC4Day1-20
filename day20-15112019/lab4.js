class AppA extends React.Component {
    state = { name: 'john',skill: {status: false, lang: []} }
    handleChangeName = () => {
      this.setState({ name: 'smith' });
    }
    handleChangeSkill = () => {
      if(this.state.skill.status) {
        this.setState({
          skill:{
            status: true,
            lang:  [{id: 3, name: 'Java' },
            { id: 4, name: 'C++' },
            { id: 5, name: 'Swift' } 
            ]}         
        })
      }
      else {
        this.setState(
          {skill: {
          status: false,
          lang: []
        }})
      }
    }
    render () {
      return (
        <>
        <button onClick={this.handleChangeName}>
          change name: {this.state.name}
        </button>
        <button onClick={this.handleChangeSkill}>
          change skills: {this.state.skill.skills.map(s => s.name)}
        </button>
        </>
      )
    }
  }
  ReactDOM.render(
      <AppA />, 
    document.getElementById('root')
  )