import React from 'react';
import { useQuery } from 'react-query'
// import 'bootstrap/dist/css/bootstrap.css';
import Planet from './Planet'


const fetchplanets = async () => {
    const res = await fetch("https://swapi.dev/api/planets/");
    return res.json()
}

const Planets = () => {
    const { data, status } = useQuery("planets", fetchplanets)
    console.log(data);

    return (
        <div>
            <h2>planets</h2>
            {status === "loading" && (
                <div className="loader">Loading...</div>
            )}
            {status === "error" && (
                <div >Something went wrong...</div>
            )}
            {status === "success" && (
                data.results.map(planet => {
                    return <Planet key={planet.name} planet={planet} />
                })
            )}

        </div>
    )
}

export default Planets
