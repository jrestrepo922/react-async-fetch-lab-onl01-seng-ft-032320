// create your App component here
import React, { Component } from 'react'

export default class App extends Component {
    
    constructor(){
        super(),
        this.state = {
            peopleInSpace: []
        }
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(response => response.json())
        .then(data => {
            this.setState({
                peopleInSpace: data.people
            })
        })
        console.log(this.state.peopleInSpace)
    }
    
    
    
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
