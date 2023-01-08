import { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class SearchBar extends Component {
    state = {
        inputString: "",
    }
    handeChanger = event => {
        this.setState({ inputString: event.target.value })
        // console.log(this.state.inputString)
    }
    handleSubmit = event => {
        event.preventDefault();
        if (this.state.inputString.trim() === "") {
            toast.error('Put any text here, please <<==')
            return
        }
        this.props.onInputString(this.state.inputString)
        this.setState({ inputString: "", })
    }

    render() {
        return (<header className="Searchbar" >
            <form className="form" type="submit" onSubmit={this.handleSubmit}>
                <button type="submit" className="button">
                    <span className="button-label" type="submit" >Search</span>
                </button>

                <input
                    className="input"
                    type="text"
                    autoComplete="off"
                    value={this.state.inputString}
                    onChange={this.handeChanger}
                    autoFocus
                    placeholder="Search images and photos"
                />
            </form>
        </header>
        )
    }
}

export default SearchBar