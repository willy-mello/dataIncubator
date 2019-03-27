import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImages, faImage } from '@fortawesome/free-solid-svg-icons'


const Buttons = (props) => {
  return (
    <div className='buttons fadein'>
      <div className='button' >
        <label htmlFor='single' >
          <FontAwesomeIcon icon={faImage} size='10x' color='#3B5998' />
        </label>
        <input type='file' id='single' onChange={props.onChange} />
      </div>
      <div className='button' >
        <label htmlFor='multi'>
          <FontAwesomeIcon icon={faImages} color='#6d84b4' size='10x' />

        </label>

      </div>
    </div>
  )
}

export default Buttons