import React, { Component } from 'react';
import Slide from '../component/Slide'

class Player extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentIndex: 0,
        }
    }
    componentDidMount() {
        this.interval = setInterval(() => this.nextSlide(), 7000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
      }

    nextSlide = () => {
        if (this.state.currentIndex === this.props.images.length - 1) {
            return this.setState({
                currentIndex: 0,
            })
        }

        this.setState(prevState => ({
            currentIndex: prevState.currentIndex + 1,
        }));
    }

    render() {
        const currentItem = this.props.images[this.state.currentIndex]
        if (currentItem === undefined) this.nextSlide()
        return (
            <div className="slider">
            <h3>Image {this.state.currentIndex +1} of ({this.props.images.length})</h3>
            <div>
                {   
                    <Slide changer={this.nextSlide} image=
                    {currentItem.url} />
                 
                }
            </div>
    
          </div>
        )
    }
}

export default Player
