import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchFilms } from '../state/filmsSlice'

const Films = () => {
    const films = useSelector(state => state.films.films);
    const ceckValue = useSelector(state => state.films.value);
    
    
    const dispatch = useDispatch();

    const [value, setValue] = useState('Avengers')
    const movie = ceckValue

    useEffect(() => {
        dispatch(fetchFilms({filmName: undefined, type: undefined}));
    }, [])

    const search = () => {
        dispatch(fetchFilms({filmName: value, type: movie })) 
    }

    return (
        <>
            <div>
                <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
                <button onClick={search}>Search</button>
            </div>
            <div
                style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}
            >
                {
                   films ? films.map(film => (
                        <div style={{ width: 300 }} key={film.imdbID}>
                            <h2>{film.Title}</h2>
                            <img src={film.Poster} alt={film.Title} />
                            <p>{film.Year}</p>
                            <p>{film.Type}</p>
                        </div>
                    ))
                     : 
                    <div> <h2>There isn't any much</h2> </div>
                }
            </div>
        </>
    )
}

export { Films }
