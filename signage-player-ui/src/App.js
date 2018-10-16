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

  checkForUpdates = async () => {
    const slides = await slideService.getAll()
    if (slides && slides.length !== this.state.content.length) {
      this.setState({
        content: slides
      })
    }
  }

  componentDidMount = async () => {
    const slides = await slideService.getAll()
    this.setState({
      content: slides
    })

    this.interval = setInterval(() => this.checkForUpdates(), 5000)
  }
  componentWillUnmount() {
    clearInterval(this.interval);
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
