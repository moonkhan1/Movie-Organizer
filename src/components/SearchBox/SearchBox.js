import React, {useState, Component } from 'react';
import './SearchBox.css';
import MainPage from '../../pages/MainPage/MainPage';

// class SearchBox extends Component {
//     state = {
//         searchLine: ''
//     }
//     searchLineChangeHandler = (e) => {
//         this.setState({ searchLine: e.target.value });
//     }
//     searchBoxSubmitHandler = (e) => {
//         e.preventDefault();
//     }
//     render() {
//         const { searchLine } = this.state;

const SearchBox = ({ search }) => {
    const [searchValue, setSearchValue] = useState("");
  
    const handleSearchInputChanges = e => {
      setSearchValue(e.target.value);
    };
  
    const resetInputField = () => {
      setSearchValue("");
    };
  
    const callSearchFunction = e => {
      e.preventDefault();
      search(searchValue);
      resetInputField();
    };
  
        return (
            <div className="search-box">
                <form className="search-box__form" onSubmit={callSearchFunction}>
                    <label className="search-box__form-label">
                        Искать фильм по названию:
                        <input
                            value={searchValue}
                            type="text"
                            className="search-box__form-input"
                            placeholder="Например, Shawshank Redemption"
                            onChange={handleSearchInputChanges}
                        />
                    </label>
                    <button
                        type="submit"
                        className="search-box__form-submit"
                        // disabled={!searchLine}
                        onClick={callSearchFunction}
                        value ="SEARCH"
                    >
                        Искать
                    </button>
                </form>
            </div>
        );
    }
// }
 
export default SearchBox;