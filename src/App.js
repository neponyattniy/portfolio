import React from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import AboutPage from "./AboutPage";
import ContactsPage from "./ContactsPage";
import Projects from "./Projects";
import './App.css'

export default function App () {
  
    window.addEventListener('load', () => {
      document.querySelector('.links').style.display = 'none'
    })

    function showList () {
      document.querySelector('.menubutton').addEventListener('click',(event)=>{

        
        if(event.target.id === "")
        {
          document.querySelector('.links').style.display = 'none'
          event.target.id = "clicked"
        }
        else if (event.target.id  === "clicked")
        {
          document.querySelector('.links').style.display = 'block'
          event.target.id = ""
        }
      })
    }

    return (
      <BrowserRouter>
        <div>
          <div className="hat">
              <h1 className="hattext">My portfolio!</h1>
          </div>
          <div className="menu">

            <button 
            id=""
            className="menubutton"
            onClick = {showList}
            >
              ------
              <br></br>------<br></br>------
            </button>

          </div>
          <div className="links">
          <ul className="linkslist">
                <li className="nav-item">
                  <Link to="/AboutPage">
                    About me
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/ContactsPage">
                    My contacts
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Projects">
                    My projects
                  </Link>
                </li>
              </ul>
          </div>
          <Routes>
            <Route path="/AboutPage" element={<AboutPage/>}></Route>
            <Route path="ContactsPage" element={<ContactsPage/>}></Route>
            <Route path="/Projects" element={<Projects/>}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
