import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFilms } from "../state/filmsSlice";
import {setValue} from "../state/filmsSlice";

// import './buttons.css' 
const Buttons = () => {
    const ceckValue = useSelector(state => state.films.value);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(ceckValue);
    }, [ceckValue]);
      
    const appear  = (e) => {
        dispatch(setValue(e.target.value));
    }

    return (
        <form>
            <fieldset>
                <legend>Please select your preferred type</legend>
                <div>
                <input 
                    type="radio"
                    id="contactChoice1"
                    name="contact"
                    value="episode" 
                    onChange={appear}
                />
                <label >episode</label>

                <input type="radio" id="contactChoice2" name="contact" 
                value="series" 
                onChange={appear}/>
                <label >series</label>

                <input 
                type="radio" 
                id="contactChoice3" 
                name="contact" 
                value="movie"
                onChange={appear}
                checked
                 />
                <label >movie</label>
                </div>
            </fieldset>
        </form>
    )
}

export  {Buttons}