import React, {useState, useEffect} from 'react';
const Example = (props) => {
    const [pokemon, setpokemon] = useState([]);
    const [show, setshow] = useState(false);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=200')
            .then(response => response.json())
            .then(response => setpokemon(response.results))
    }, []);
    return (
        <center>
            <button onClick={() => setshow(true)} >useEffect</button>
            {show == true && pokemon.map((pokemon, index)=> (<div key={index}>{pokemon.name}</div>))}
        </center>
    );
}
export default Example;
