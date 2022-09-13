



const ImageGallery = ({ items }) => {

    return (
        <ul class="gallery">
            {items.map(item => {
                <li key={items.id}>

                </li>
            })}
        </ul>
    )

}

export default ImageGallery