import React, { Component } from 'react';
import slideService from './service/slide'
import Playlist from './component/Playlist';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      content: null,
      newItem: '',
      message: ''
    }
  }

  newItemHandler = async (event) => {
    event.preventDefault()
    await slideService.create({
      url: this.state.newItem
    })
    this.setState({
      newItem: ''
    })
    window.location.reload()
  }

  deleteItem = async (item) => {
    console.log('item to delete', item)

    if (window.confirm('Are you sure?')) {
      await slideService.remove(item.id)
      this.setState({
        content: this.state.content.filter(
          slide => slide.id !== item.id
        )
      })
    }

  }

  handleFormFieldChange = (event) => {
    event.preventDefault()
    this.setState({ newItem: event.target.value })
  }

  newItemForm() {

    return (
      <div onClick={this.handleClose}>
        <form onSubmit={this.newItemHandler}>
          Add new slide url<br />
          <input
            name="slide"
            value={this.state.newItem}
            onChange={this.handleFormFieldChange}
          />
          <button type="submit">Add</button>
        </form>
      </div>

    )
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
        {this.newItemForm()}
        <h3>Items in playlist:</h3>
        <Playlist list={this.state.content} handleDelete={this.deleteItem} />


      </div>
    );
  }
}

export default App;
