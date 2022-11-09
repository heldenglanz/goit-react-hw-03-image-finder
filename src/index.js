import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';

// ___________________________________________________________
// KODIM TUT I TRENIRUEMSIA:

const solarSystem = {
  star: "sun",
  diameter: 800,
  planets: [
    "mercury",
    "venus",
    "earth",
    "mars",
    "jupiter",
    "saturn",
    "uranium",
    "neptune",
    "pluto",
  ],
  satellites: [
    "moon",
    "phobos",
    "deimos",
    "io",
    "europa",
    "ganimed",
    "callisto",
    "enceladus",
    "tethys",
    "titan",
    "oberon",
    "miranda",
    "triton",
    "charon",
  ],
  asteroids: ["ast1", "ast2", "ast3", "ast4", "ast5", "ast6"],

  findPlanet(planetName) {
    for (const planet of planets) {

      if (planetName === planet) {
        console.log(planet)

      }

    }
  },
}

const { star, planets, ...restbb } = solarSystem
console.log(restbb)





// const planets = {
//   mercury: 0,
//   earth: 1,
//   jupiter: 86,
//   saturn: 37,
// }

// const keys = Object.keys(planets)
// const entries = Object.entries(planets)
// const values = Object.values(planets)

// const foundedMax = Math.max(...values);
// // console.log(foundedMax)

// for (const [planet, sattelites] of entries) {
//   if (sattelites === foundedMax) {
//     console.log(planet)
//   }

// }

// for (const key of keys) {
//   if (planets[key] === foundedMax) {
//     console.log(key)

//   }
// }



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
