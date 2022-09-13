import React, { Component } from 'react';



class SearchBar extends Component {
    state = {
        onSubmit: "",
    }


    render() {
        return (<header className="searchbar">
            <form className="form" type="submit">
                <button type="submit" className="button">
                    <span className="button-label" type="submit" >Search</span>
                </button>

                <input
                    className="input"
                    type="text"
                    autocomplete="off"
                    autofocus
                    placeholder="Search images and photos"
                />
            </form>
        </header>
        )
    }
}

export default SearchBar