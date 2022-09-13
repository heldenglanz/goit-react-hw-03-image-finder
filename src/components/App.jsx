import { Component } from 'react';


import axios from 'axios'
// axios.defaults.baseURL = `https://pixabay.com/api/?q=cat&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
// const API_KEY = '29903218-d7c1d4763f314c7a924bce31a'



export class App extends Component {
  state = {
    articles: null,
    isLoading: false,

  };

  // componentDidMount() {
  //   fetch('https://pixabay.com/api/?q=cat&page=1&key=29903218-d7c1d4763f314c7a924bce31a&image_type=photo&orientation=horizontal&per_page=12')
  //     .then(res => res.json())
  //     .then(console.log)
  // }

  async componentDidMount() {
    this.setState({ isLoading: true })
    const response = await axios.get("https://pixabay.com/api/?q=cat&page=1&key=29903218-d7c1d4763f314c7a924bce31a&image_type=photo&orientation=horizontal&per_page=12&category=education")
    console.log(response)
    this.setState({ articles: response.data, isLoading: false })
  }

  render() {
    return (
      // {

      <div style={{ maxWidth: 1170, margin: '0 auto', padding: 30 }}>
        {this.state.articles && (
          <div>{this.state.articles.name}</div>
        )
        }
      </div>
      // }

      //     <Searchbar items={this.state.articles}/>

      // <ImageGallery largeImageURL webformatURL id /> 

      //   <ImageGalleryItem />

      //     <Loader />

      //       <Button />
      //        <Modal /> 
    );
  }

};
