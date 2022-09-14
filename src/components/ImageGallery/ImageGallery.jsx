import ImageGalleryItem from '../ImageGalleryItem';




const ImageGallery = ({ items }) => {

    return (
        <ul class="gallery">
            {items.map(item => {
                return (
                    <li key={item.id}>
                        <ImageGalleryItem src={item.largeImageURL} alt={item.webformatURL} />
                    </li>
                )
            })}
        </ul>
    )

}

export default ImageGallery