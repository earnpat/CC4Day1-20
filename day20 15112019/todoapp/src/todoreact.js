import React from 'react';
import './todoreact.css';

const check1 = { backgroundColor: '#ffffff' }
const check2 = { backgroundColor: 'green' }
const list1  = {}
const list2  = { textDecorationLine: 'line-through' }

class Todo extends React.Component {
    state = {
            todo: [],
            list: ''
        }
    addList = (e) => {
        this.setState({ list: e.target.value })
    }
    addClick = () => {
        console.log(this.state.list)
        this.setState({
            todo: [...this.state.todo, this.state.list]
        }
        , () => console.log(this.state.todo))
    }
    clickCheck = (i) => {
   
        (this.state.status === check2) ?
        this.setState({ status: check1,
                        midline: list1 }) :
        this.setState({ status: check2,
                        midline: list2 })
    }


    render = () => {
        const listItem = this.state.todo.map((value, index) => {
            return (
                <li key={index} class="list">
                    <div className="check" style={this.state.status} onClick={() => this.clickCheck({index})}>&nbsp; &nbsp; &nbsp;</div>
                    &nbsp; <span style={this.state.midline} onClick={() => this.clickCheck({index})}>{value}</span>
                </li>
            )})
        return (
            <div className="container">
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Enter Todo" onChange={this.addList}></input>
                    <div class="input-group-append">
                        <button onClick={this.addClick} class="btn btn-outline-secondary" type="button">ADD</button>
                    </div>
                </div>
                    <div>
                        <li className="list">
                            <div className="check" style={this.state.status} onClick={this.clickCheck}>&nbsp; &nbsp; &nbsp;</div>
                            &nbsp; <span style={this.state.midline} onClick={this.clickCheck}>to do list</span>
                        </li>
                        {listItem}
                    </div>
            </div>
        )
    }
}



export default Todo