import { Component } from 'react'
// import axios from 'axios'
// axios.defaults.baseURL = `https://pixabay.com/api/?q=cat&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
// const API_KEY = '29903218-d7c1d4763f314c7a924bce31a'

class API extends Component {
    state = {
        searchAPI: "",
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.inputString !== this.props.inputString) {
            console.log('prevProps:', prevProps.inputString)
            console.log('this.props:', this.props.inputString)
            fetch(`https://pixabay.com/api/?q=${this.props.inputString}&page=1&key=29903218-d7c1d4763f314c7a924bce31a&image_type=photo&orientation=horizontal&per_page=12`)
                .then(response => response.json())
                .then(response => {
                    console.log(response.hits[0].downloads)
                })
        }
    }
    //     handleSearchString = (this.props.inputString) => {
    //     return
    // }



    render() {
        return (
            <div>Строка поиска компонента API: {this.props.inputString}</div>
        )
    }
}
export default API