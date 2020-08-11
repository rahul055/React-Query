import React from 'react';
import { useQuery } from 'react-query'
import Person from './Persone';
// import 'bootstrap/dist/css/bootstrap.css';


const fetchpeople = async () => {
    const res = await fetch("https://swapi.dev/api/people/");
    return res.json()
}

const People = () => {
    const { data, status } = useQuery("people", fetchpeople)
    console.log(data);

    return (
        <div>
            <h2>people</h2>
            {status === "loading" && (
                <div className="loader">Loading...</div>
            )}
            {status === "error" && (
                <div >Something went wrong...</div>
            )}
            {status === "success" && (
                data.results.map(person => {
                    return <Person key={person.name} person={person} />
                })
            )}

        </div >
    )
}

export default People
