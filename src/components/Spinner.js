import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBaseballBall } from '@fortawesome/free-solid-svg-icons'

const Spinner = () => {
  return (
    <div className='spinner fadein'>
      <FontAwesomeIcon icon={faBaseballBall} size='5x' color='#3B5998' />
    </div>
  )
}

export default Spinner