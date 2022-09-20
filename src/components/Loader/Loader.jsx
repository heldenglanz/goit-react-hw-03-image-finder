import { ImSearch } from "react-icons/im"

function Loader({ inputString }) {


    return (
        <div role="alert">
            <ImSearch size="22" />
            <p>Loading...   {inputString}</p>
        </div>
    )
}



export default Loader