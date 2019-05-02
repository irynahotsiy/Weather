import React, { Component } from "react";
import Load from "../Load/Load";
import Error from "../Error/Error";

import { Header, Details, Temp, Image, Allowed } from "./Style";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false
    };
  }

  componentDidMount() {
   
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.setState ({
          isAllowed: true
        })
        let lat = position.coords.latitude;
        let long = position.coords.longitude;
        let url =
          "https://fcc-weather-api.glitch.me/api/current?lon=" +
          long +
          "&lat=" +
          lat;
        console.log(url);
        
        fetch(url)
          .then(response => response.json())
          .then(
            result => {
              this.setState({
                isLoaded: true,
                location: result.name + ", " + result.sys.country,
                temp: Math.round(result.main.temp),
                sky: result.weather[0].description,
                img: result.weather[0].icon,
                letter: "C"
              });
            },
            error => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          );
        
         
      });
    }
  }
  

  handleClickLetter = () => {
    let temp = this.state.temp;
    if (this.state.letter === "C") {
      this.setState({
        letter: "F",
        temp: (temp * 9) / 5 + 32
      });
    } else {
      this.setState({
        letter: "C",
        temp: ((temp - 32) * 5) / 9
      });
    }
  };

  render() {
    const { error, isLoaded, isAllowed, img, location, temp, letter, sky } = this.state;
      if ( !isAllowed ) {
        return (
          <>
            <Allowed>Please, share your location</Allowed>
          </>
        )
      }
      else {
        if (this.state.location === "Shuzenji, JP" || error ) {
          return <>
            <Error />
          </>
        } else if (!isLoaded) {
          return (
            <>
              <Load />
            </>
          );
        } else {
          return (
            <>
              <Header>
                Free C<img src={img} alt="Weather-icon" />
                de Camp
                <br />
                Weather App
              </Header>
              <Details className="text-center">
                <p>{location}</p>
                <Temp>
                  <span>{temp > 0 ? "+" + temp + " °" : temp}</span>
                  <span onClick={this.handleClickLetter}>{letter}</span>
                </Temp>
                <p>{sky}</p>
                <Image>
                  <img src={img} alt="Weather-icon" />
                </Image>
    
                <footer>
                  Created by
                  <a
                    href="https://ihotsiy.netlify.com"
                    target="blank"
                    id="color"
                  >
                    {" "}
                    Iryna Vovk
                  </a>
                </footer>
              </Details>
            </>
          );
        }
      }
    }
      }
     
    
export default Main;
