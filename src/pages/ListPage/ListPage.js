import React, { useState, useReducer, Component } from 'react';
import { initialState, reducer } from '../../cases';
import './ListPage.css';


class ListPage extends Component {
    state = {
        movies: [],
        title:''
    }
    componentDidMount () {
        const id = this.props.match.params.id;
        if (id) {
            fetch(`https://acb-api.algoritmika.org/api/movies/list/${id}`)
                .then(resp => {
                    if (resp.ok) {
                        return resp.json();
                    } else {
                        alert('No list')
                    };
                })
                .then(data => {
                    if (data) {
                        let movie=[]
                        data.movies.map(elem=>{
                            fetch(`http://www.omdbapi.com/?i=${elem}&apikey=53638081`)
                            .then(res => res.json())
                            .then(data => {movie.push({id: elem, name: data.Title});this.setState({ movies: movie})})
                        })
                    } else {
                        alert('No list')
                    }
                })
            }

    }

render(){

        return (
            <div className="list-page">
                <h1 className="list-page__title">{this.state.title}</h1>
                <ul>
                    {this.state.movies?.map((item) => {
                        return (
                            <li key={item.id}>
                                <a href={`https://www.imdb.com/title/${item.id}/`} target="_blank">{item.name}</a>

                            </li>
                        )
                    })}
                </ul>
            </div >
        );
                }
}
export default ListPage;