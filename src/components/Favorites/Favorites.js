import React, { useState, Component } from 'react';
import './Favorites.css';


const Favorites =(props)=> {
        const [text, setText] = useState("");

const checkDisabled=(e)=>{
    console.log(e.target.disabled);
}
const TextChange=(e)=>{
    setText(e.target.value)

}
        return (
            <div className="favorites">
                <input type = "text" onChange={(e)=>TextChange(e)} value={text} placeholder="Enter Text" className="favorites__name" />
                <ul className="favorites__list">
                    {props.movies.map((item,index) => {
                        return <li key={item.imdbID}>{item.Title} ({item.Year})
                        <button className = "dlt_btn" onClick={() => props.removeItem(item)}>X</button></li>;
                    })}
                </ul>
                <button type="button" disabled={!text} onClick={(e)=>checkDisabled(e)} className="favorites__save">Сохранить список</button>
            </div>
        );
    }
 
export default Favorites;