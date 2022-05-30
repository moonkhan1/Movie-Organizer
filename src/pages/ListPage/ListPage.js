import React, { useState, useReducer, Component } from 'react';
import { initialState, reducer } from '../../cases';
import './ListPage.css';


class ListPage extends Component {
    state = {
        title: '',
        movies: []
    }
    componentDidMount () {
        const id = this.props.match.params.imdbID;
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
                       this.setState({ movies: data.movies, title: data.title })
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
                    {this.state.movies.map((item) => {
                        return (
                            <li key={item.movies}>
                                <a href={`https://www.imdb.com/title/${item.imdbID}/`} target="_blank">{item.Title} ({item.Year})</a>

                            </li>
                        )
                    })}
                </ul>
            </div >
        );
                }
}
export default ListPage;