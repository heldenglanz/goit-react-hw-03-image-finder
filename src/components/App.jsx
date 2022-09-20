import { Component } from 'react';
import Searchbar from './Searchbar';
import { ToastContainer } from 'react-toastify';
import API from './API';
// import ImageGallery from './ImageGallery'
// import axios from 'axios'
// axios.defaults.baseURL = `https://pixabay.com/api/?q=cat&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
// const API_KEY = '29903218-d7c1d4763f314c7a924bce31a'
export class App extends Component {
  state = {
    articles: [],
    // isLoading: false,
    inputString: "",
    // loading: false,
  };

  handleFormSubmit = inputString => {
    this.setState({ inputString: inputString });
    // console.log(this.state.inputString);
  }
  componentDidMount = items => {
    this.setState({ articles: items });
  }
  // items = this.props;

  // componentDidMount() {
  //   fetch('https://pixabay.com/api/?q=cat&page=1&key=29903218-d7c1d4763f314c7a924bce31a&image_type=photo&orientation=horizontal&per_page=12')
  //     .then(res => res.json())
  //     .then(console.log)
  // }

  // async componentDidMount() {
  //   this.setState({ isLoading: true })
  //   const response = await axios.get("https://pixabay.com/api/?q=cat&page=1&key=29903218-d7c1d4763f314c7a924bce31a&image_type=photo&orientation=horizontal&per_page=12&category=education")
  //   console.log(response)
  //   this.setState({ articles: response.data, isLoading: false })
  // }
  render() {
    // const { articles } = this.state
    return (

      <div style={{ margin: 50 }}>
        <Searchbar onInputString={this.handleFormSubmit} />
        {/* <div>строка состояния App: {this.state.inputString}</div> */}
        <ToastContainer autoClose={3000} />
        <API inputString={this.state.inputString} items={this.componentDidMount} />
        {/* <ImageGallery items={articles} /> */}
      </div>

    );
  }

};
