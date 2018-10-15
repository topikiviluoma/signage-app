import React, { Component } from 'react';
import Management from './component/Management';
import slideService from './service/slide'
import Playlist from './component/Playlist';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      content: null,
      visible: false,
      newItem: '',
      message: ''
    }
  }

  handleCose = () => {
    this.setState({ visible: false })
  }

  handleOpenSelection = () => {
    this.setState({ visible: true })
  }

  newItemHandler = async (event) => {
    await slideService.create({
      url: this.state.newItem
    })
    this.setState({
      newItem: ''
    })
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
        <button onClick={this.handleOpenSelection}>Manage</button>
        {this.newItemForm()}
        <p>Items in playlist:</p>
        <Playlist list={this.state.content} handleDelete={this.deleteItem} />


      </div>
    );
  }
}

export default App;
