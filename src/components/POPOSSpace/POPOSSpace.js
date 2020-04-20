import React from 'react'
import './POPOSSpace.css';
import {Link} from 'react-router-dom'
function POPOSSpace(props) {
  const { name, image, address, hours, id} = props
  return (
    <div className="POPOSSpace">
      <Link to={'/details/${id}'}>
        <img src={`${process.env.PUBLIC_URL}images/50-california-st.jpg`} width="300" height="300" alt="Hello" />
      </Link>
      <h1>
        <Link to={'/details/${id}'}>
          {name}
        </Link>
      </h1>
      <div>{address}</div>
      <h2>{hours}</h2>
    </div>
  )
}

export default POPOSSpace
