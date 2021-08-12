import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {

    state = {
        gifs: []
    }
    render() {
        return (
            <div>
                <GifSearch search={this.fetchGifs}/>
                <GifList gifs={this.state.gifs}/>

                
            </div>
        )
    }

    fetchGifs = (query) => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=X8Pe5FYoyhYDnG7k1aH7IVYecGW93Rfr`)
        .then(resp => resp.json())
        .then(({data}) => {  
            this.setState({ 
                // gifs: console.log(data[0].images.original.url) 
                //since there are multiple object in the array we have to iterate each to get each url
                gifs: data.map( gif => ({ url: gif.images.original.url }) ) 
            })
            
            // this.setState({ gifs: data.map( gif => ({ url: gif.images.original.url }) )
        })
    }
    componentDidMount(){
        this.fetchGifs()
    
    }
}

export default GifListContainer
