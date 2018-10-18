import React, { Component } from 'react';
import slideService from './service/slide'
import Player from './component/Player'
import _ from 'lodash'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      content: null
    }
  }

  checkForUpdates = async () => {
    const slides = await slideService.getAll()
    let newList = slides
    let oldList = this.state.content
    if (!_.isEqual(newList.sort(), oldList.sort())) {
      this.setState({
        content: slides
      })
    }
  }

  componentDidMount = async () => {
    const slides = await slideService.getAll()
    console.log('slides', slides)
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
        {this.state.content === null || this.state.content.length === 0 ?
          <p>No Slides</p> :
          <Player images={this.state.content} />
        }
      </div>
    );
  }
}

export default App;
