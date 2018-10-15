import React, { Component } from 'react';
import slideService from './service/slide'
import Player from './component/Player'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      content: null
    }
  }

  componentDidMount = async () => {
    const slides = await slideService.getAll()
    this.setState({
      content: slides
    })
  }
  
  render() {
    return (
      <div>
       {this.state.content === null ? <p>No Slides</p> :
          <Player images={this.state.content} />
        }
      </div>
    );
  }
}

export default App;
