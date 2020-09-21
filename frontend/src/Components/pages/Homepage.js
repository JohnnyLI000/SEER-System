import React, { useState } from 'react';
import './Homepage.css';
import NavigationBar from './NavBar'
import CustomSearchCard from './CustomSearchCard'
import SearchBar from '../SearchComponents/Searchbar'
import { Button, Form, Row, Col, Dropdown } from 'react-bootstrap';

function Homepage() {

  const [formList, setFormList] = useState([])

  const Card = () => {
    return <p>CustomSearchCard</p>
  }

  const addCustomForm = (e) => {
    console.log("Added Form")
    // const info = {
    //   text: "hi"
    // }
    setFormList([<CustomSearchCard />,  ...formList])
    // document.getElementsByClassName('customForm').classList.toggle('active');
  }

  return (
    <div className="homepage">
      <NavigationBar></NavigationBar>
      <div className="homepage_body">
        <img src="./SEER_logo.png" alt="" />
        <SearchBar></SearchBar>
        <div className="d-flex justify-content-center">
          <div className="p-3">
            <Button id="customButton" variant="secondary" size="sm" onClick={e => addCustomForm(e)}>
              Custom Search
            </Button>
          </div>
        </div>
        <div className="customForm" className="d-flex justify-content-center">
          <CustomSearchCard seField="SE Field" operator="Operator"></CustomSearchCard>
        </div>
      </div>
    </div>
  );
};


export default Homepage;