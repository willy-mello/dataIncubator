import React, { Component } from 'react';
import { Buttons, Spinner, Images } from './components'
import { API_URL } from './config'
import './App.css';
import { faEraser } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios'
require('dotenv').config()

class App extends Component {
  constructor() {
    super()
    this.state = {
      uploading: false,
      images: []
    }
    this.onChange = this.onChange.bind(this)
    this.removeImage = this.removeImage.bind(this)

  }

  async onChange(evt) {
    try {
      const files = Array.from(evt.target.files)
      this.setState({ uploading: true })

      const formData = new FormData()
      const errs = []

      const types = ['image/png', 'image/jpeg', 'image/gif', 'image/jpg']

      files.forEach((file, idx) => {
        if (types.every(type => file.type !== type)) {
          errs.push(`'${file.type}' is not a supported format`)
        }
        if (file.size > 150000) {
          errs.push(`this file is too large`)
        }
        formData.append(idx, file)
      })
      if (errs.length) {
        return errs.forEach(err => console.log(err))
      }
      const imageResult = await axios.post(`${API_URL}/image-upload`, formData)


      this.setState({
        uploading: false,
        images: imageResult.data
      })






    } catch (error) {
      console.error(error)
    }
  }

  removeImage = (id) => {
    this.setState({
      images: this.state.images.filter(image => image.public_id !== id)
    })
  }



  render() {
    const { uploading, images } = this.state
    const content = () => {
      switch (true) {
        case uploading:
          return <Spinner />
        case images.length > 0:
          return <Images images={images} removeImage={this.removeImage} />
        default:
          return <Buttons onChange={this.onChange} />
      }
    }

    if (this.state.uploading) {
      return (
        <div>
          <div className='buttons'>
            <Spinner />

          </div>
        </div>
      )
    }
    return (
      <div>
        <div className='buttons'>
          <Images images={images} removeImage={this.removeImage} />
          <Buttons onChange={this.onChange} />

        </div>
      </div>
    );
  }
}

export default App;
