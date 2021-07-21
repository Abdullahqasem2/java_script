import React, {useState, useEffect} from 'react';
import axios from 'axios';
const DisplayP = (props) => {
   const [planet, setPlanet] = useState('');
   useEffect(() => {
        axios.get(`https://swapi.dev/api/planet/${props.id}`)
             .then(response=> console.log(response.data) )
             .then(response=> setPlanet(response.data) )
             .catch(err => console.log(err) )
    }, [props.id])
  return(
    <center>
      <h2> {planet.name}</h2>
      <p>Climate: {planet.climate}</p>
      <p>Terrian: {planet.terrian}</p>
      <p>Surface Water: {planet.surface_water}</p>
      <p>Resident: {planet.residents}</p>
    </center>

  );
};
export default DisplayP;
