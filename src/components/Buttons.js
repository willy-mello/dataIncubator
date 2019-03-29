import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons'


const Buttons = (props) => {
  return (
    <div className='buttons fadein'>
      <div className='button' >
        <label htmlFor='single' >
          <FontAwesomeIcon icon={faImage} size='10x' color='#3B5998' />
        </label>
        <input type='file' id='single' onChange={props.onChange} />
      </div>

    </div>
  )
}

export default Buttons