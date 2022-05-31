import React, { useReducer,useState, Component } from 'react';
import './Favorites.css';
import { Link } from 'react-router-dom';
import { initialState, reducer } from '../../cases';

const Favorites =(props)=> {
    const [state, dispatch] = useReducer(reducer, initialState);
    
    const [text, setText] = useState("");
    const [showlink, setLink] = useState("");
    const [listId, setId] = useState("");

// const checkDisabled=(e)=>{
//     console.log(e.target.disabled);
// }
const TextChange=(e)=>{
    setText(e.target.value)

}
const getListId = (idList) => {
    dispatch({
        type: 'GET_ID',
        payload: {
            listId: idList,
        }
    })
}
const saveFavList = (title, movies) => {
    // for(var i in movies){
    let data = { title: text, movies: []}
    for(let i = 0;i < props.movies.length;i++){
        data.movies.push(props.movies[i].imdbID)
    }

    fetch('https://acb-api.algoritmika.org/api/movies/list', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    })
        .then(response => response.json())
        .then(data => {
            let listId = data.id;
            setId(listId);
        })
        console.log(data)
    if (props.movies.length !== 0) {
        setLink({ showLink: false });
    } else {
        setLink({ showLink: true })
    };
};

        return (
            <div className="favorites">
                <input type = "text" onChange={(e)=>TextChange(e)} value={text} placeholder="Enter Text" className="favorites__name" />
                <ul className="favorites__list">
                    {props.movies.map((item,index) => {
                        return <li key={item.imdbID}>{item.Title} ({item.Year})
                        <button className = "dlt_btn" onClick={() => props.removeItem(item)}>X</button></li>;
                    })}
                </ul>
                <button type="button"className={props.showLink ? 'favorites__save' : 'favorites__save-none'} disabled={!text} 
                onClick={()=>saveFavList()} >Сохранить список</button>
                <div className={props.showLink ? 'favorites-link' : ''}>
                    {showlink && <Link to={`/list/${listId}`}>Go to list page</Link>}
                </div>
            </div>
        );
    }
 
export default Favorites;