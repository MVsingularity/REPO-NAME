import React from 'react';
import POPOSSpace from '../POPOSSpace/POPOSSpace';
import './POPOSList.css';
import data from '../sfpopos-data.json';

function POPOSList() {
const spaces = data.map(({ title, address, images, hours }, i) => {
  return (
    <POPOSSpace
        id={i}
        key={title}
        name={title}
        address={address}
        image={images[0]}
        hours={hours}
      />
    )
  });
  return (
    <div className="POPOSList">
      <POPOSSpace
        name="50 California Street"
        address="50 California St."
        image="50-california-st.jpg"
        hours="8 am to 7 pm"/>
      <POPOSSpace
        name="50 California Street"
        address="50 California St."
        image="100-pine.jpg"
        hours="8 am to 7 pm"/>
      <POPOSSpace
        name="50 California Street"
        address="50 California St."
        image="101-california.jpg"
        hours="8 am to 7 pm"/>
      <POPOSSpace
        name="50 California Street"
        address="50 California St."
        image="555-california.jpg"
        hours="8 am to 7 pm"/>
      <POPOSSpace
        name="50 California Street"
        address="50 California St."
        image="citigroup.jpg"
        hours="8 am to 7 pm"/>
    </div>
  )
}



export default POPOSList
