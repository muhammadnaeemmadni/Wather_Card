import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import React from 'react';

function App() {

  const [islit, setlit ] = useState(true);
  const state = React.useState(true);
  const isLit = state[0];
  const setLit = state[1];
  const brightness = isLit ? "lit" : "dark";


  // const city = ["Karachi","Lahore","Islamabad","Quetta","Peshawar","Multan"]
  var cityName = [{
    cityName: "Karachi",
    Temperature: "33°C",
    Precipitation: "2%"
  },
  {
    cityName: "Lahore",
    Temperature: "29°C",
    Precipitation: "0%"
  },

  {
    cityName: "Islamabad",
    Temperature: "27°C",
    Precipitation: "4%"
  },


  {
    cityName: "Quetta",
    Temperature: "21°C",
    Precipitation: "0%"
  },

  {
    cityName: "peshawar",
    Temperature: "28°C",
    Precipitation: "1%"
  },


  {
    cityName: "Multan",
    Temperature: "28°C",
    Precipitation: "0%"
  },
  ]


  return (
  <>
  <div className={`room ${brightness}`}>
    {/* the room is {isLit ? "ON" : "OFF"} */}
    <br />
    <p onClick={() => setLit(!isLit)}>
      <img src="https://www.trustedreviews.com/wp-content/uploads/sites/54/2020/03/Dark-Mode.jpg" height="50px"  className="img"/>
    </p>
  
  <div className="Main">
    <div className="header"><h1>Hello Header</h1></div>

    {/* {city.map((City)=>{
      return <h2>{City}</h2>
    }
    )} */}


    {/* {[<h1>Karachi</h1>,<h2>Lahore</h2>,<h3>Islamabad</h3>,<h4>Quetta</h4>,<h5>Peshawar</h5>,<h6>Multan</h6>]} */}

    {cityName.map((eachCity) => {
      return <div className="eachCity">
        <div>
          <h1>
            Name: {eachCity.cityName}
          </h1>
        </div>

        <div>
          <h3>
            Temperature:{eachCity.Temperature}
          </h3>
        </div>

        <div>
          <h3>
            Precipitation:{eachCity.Precipitation}
          </h3>
        </div>
      </div>
    })}

    <div className="footer"><h1>Hello Footer</h1></div>
  </div>
  </div>
  </>
  );
}

export default App;
