import ImageGallery from '../ImageGallery'
import { Component } from 'react'
import Loader from 'components/Loader'
// import axios from 'axios'
// axios.defaults.baseURL = `https://pixabay.com/api/?q=cat&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
// const API_KEY = '29903218-d7c1d4763f314c7a924bce31a'
export default class API extends Component {
    state = {
        // loading: false,
        imageArray: [],
        error: null,
        status: 'idle',
    }
    // showImageAPI = () => {
    //     this.setState({
    //         searchIMG: data.hits[0].largeImageURL
    //     })
    // }
    componentDidUpdate(prevProps, prevState) {
        const prevSearch = prevProps.inputString
        const nextSearch = this.props.inputString
        if (prevSearch !== nextSearch) {
            this.setState({ status: 'pending' })
            // console.log('prevProps:', prevProps.inputString)
            // console.log('this.props:', this.props.inputString)
            // setTimeout(() => {
            fetch(`https://pixabay.com/api/?q=${nextSearch}&page=1&key=29903218-d7c1d4763f314c7a924bce31a&image_type=photo&orientation=horizontal&per_page=12`)
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    }
                    return Promise.reject(
                        new Error(`Failed loading`),
                    );
                })
                .then(response =>
                    this.setState({ imageArray: response.hits, status: 'resolved' })
                )
                .then(this.props.items(this.state.imageArray))
                .catch(error => this.setState({ error, status: 'rejected', }))
            // .finally(this.setState({ status: 'idle' }))
            // }, 2000);
        }
    }
    render() {
        const { inputString } = this.props;
        const { error, imageArray, status } = this.state;
        if (status === 'idle') {
            return <div>введіть щось у рядок</div>
        }
        if (status === 'pending') {
            return <Loader inputString={inputString} />
        }
        if (status === 'rejected') {
            return <p>здається, це не працює : {error.message}
            </p>
        }

        if (status === 'resolved') {
            return <ImageGallery items={imageArray} />
        }
        // return (
        //     <>
        // {status==='rejected && <h1>{error.message}</h1>}
        //         <ImageGallery items={imageArray} />
        //       
        //     </>
        //     //   <div>Строка поиска компонента API: {inputString}</div> 
        // )
    }
    // handleSearchString = (this.props.inputString) => {
    // const { inputString } = this.props;
    // const { imageArray } = this.state;
    // return(
    // <ImageGallery items={imageArray} />
    /* {error && <h1>{error.message}</h1>} */
    //  <div>Строка поиска компонента API: {inputString}</div> */
    // )
}
// export default API