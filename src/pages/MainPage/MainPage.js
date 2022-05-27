import React, { useState, useReducer, useEffect , Component } from 'react';
import './MainPage.css';
import Header from '../../components/Header/Header';
import SearchBox from '../../components/SearchBox/SearchBox';
import Movies from '../../components/Movies/Movies';
import Favorites from '../../components/Favorites/Favorites';
import { initialState, reducer } from '../../cases';
import axios from "axios";


const MOVIE_API_URL = "https://www.omdbapi.com/?s=man&apikey=4a3b711b";
const MainPage =()=>{
    const [state, dispatch] = useReducer(reducer, initialState);
    const [favourites, setFavourites] = useState([]);
    useEffect(() => {
      axios.get(MOVIE_API_URL).then(jsonResponse => {
        dispatch({
          type: "SEARCH_MOVIES_SUCCESS",
          payload: jsonResponse.data.Search
        });
      });
    }, []);
  
    const refreshPage = () => {
      window.location.reload();
    };
  
    const search = searchValue => {
      dispatch({
        type: "SEARCH_MOVIES_REQUEST"
      });
  
      axios.get(`https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`).then(
        jsonResponse => {
          if (jsonResponse.data.Response === "True") {
            dispatch({
              type: "SEARCH_MOVIES_SUCCESS",
              payload: jsonResponse.data.Search
            });
          } else {
            dispatch({
              type: "SEARCH_MOVIES_FAILURE",
              error: jsonResponse.data.Error
            });
          }
        }
      );
    };
    const addtoFav = (movie) => {
      const newFavorites = [...favourites, movie];
      if(!favourites.includes(movie)){
      setFavourites(newFavorites);
      }
      console.log(favourites)
    };

    const removeItem = (movie) =>{
      const newFavorites = favourites.filter((elem) => elem.imdbID !== movie.imdbID)
      setFavourites(newFavorites);
    }
    const { movies, errorMessage, loading } = state;
      
      
        return (
            <div className="main-page">
                <Header />
                <main className="main-page__content">
                    <section className="main-page__main-section">
                        <div className="main-page__search-box">
                            <SearchBox search={search} />
                        </div>
                        <div className="main-page__movies">
                        {!!movies&& movies.map((movie, index) => {
                        return (<Movies addToFav={addtoFav} key={`${index}-${movie.Title}`} movie={movie}/>)
                        }
                        )}
                        </div>
                    </section>
                    <aside className="main-page__favorites">
                        <Favorites movies={favourites}
                        removeItem = {removeItem}
                       />
                    </aside>
                </main>
            </div>
        );
    }
 
export default MainPage;