import React, {useState, useEffect} from 'react';
import axios from 'axios';
const Api = props => {
    const [pokemon, setpokemon] = useState([]);
    const [show, setshow] = useState(false);
    const List = [];

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon')
            .then(response => {return response.data})
            .then(response =>{ setpokemon(response.results)})
    }, []);

    return (
        <center>
            <button onClick={() => setshow(true)} >useEffect</button>
            {show === true && pokemon.map((pokemon)=> (<div>{pokemon.name}</div>))}

        </center>
    );
}
export default Api;
