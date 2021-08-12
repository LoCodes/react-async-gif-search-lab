import React, { Component } from 'react'

class GifSearch extends Component {

    state = {
        query: ""
    }

    handleSubmit = (event) => {
        event.preventDefault()
        // console.log(this.state.query)
        this.props.fetchGifs(this.state.query)
      }
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                    type="text" 
                    value={this.state.query} 
                    onChange={event => this.setState({query: event.target.value})}
                    >

                    </input>
                </form>
                
            </div>
        )
    }

    
}

export default GifSearch
