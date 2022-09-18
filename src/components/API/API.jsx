import ImageGallery from '../ImageGallery'
import { Component } from 'react'

// import axios from 'axios'
// axios.defaults.baseURL = `https://pixabay.com/api/?q=cat&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
// const API_KEY = '29903218-d7c1d4763f314c7a924bce31a'
// 'idle'
// 'pending'
// 'resolved'
// 'rejected'
class API extends Component {
    state = {
        // loading: false,
        imageArray: [],
        // error: null,
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
            setTimeout(() => {


                fetch(`https://pixabay.com/api/?q=${nextSearch}&page=1&key=29903218-d7c1d4763f314c7a924bce31a&image_type=photo&orientation=horizontal&per_page=12`)
                    .then(response => {
                        if (response.ok) {
                            return response.json();
                        }
                        //     return Promise.reject(
                        //         new Error(`Failed ${nextSearch}`),
                        //     );
                    }
                    )
                    // .then(response => {
                    //     console.log(response)
                    // }
                    // )
                    .then(response => {
                        this.setState({ imageArray: response.hits, status: 'resolved' })
                    })
                    .then(this.props.items(this.state.imageArray))
                    .catch(error => this.setState({ status: 'rejected' }))
                // .finally(this.setState({ loading: false }))
            }, 1000);
        }
    }
    render() {
        const { imageArray, error, status } = this.state;
        if (status === 'idle') {
            return <div>введите что-нибудь в строку</div>
        }
        if (status === 'pending') {
            return <div>
                загружаем...</div>
        }
        if (status === 'rejected') {
            return <h1>{error.message}</h1>
        }

        if (status === 'resolved') {
            return <ImageGallery items={imageArray} />
        }
        // return (
        //     <>
        //         <ImageGallery items={imageArray} />
        //         {error && <h1>{error.message}</h1>}
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

export default API