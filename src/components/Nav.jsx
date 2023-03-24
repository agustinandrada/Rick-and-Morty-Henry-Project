import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

const Nav = (props) =>{
    return(
        <>
            <Link to='/home'>
                <button>Home</button>
            </Link>
            <Link to='/about'>
                <button>About</button>
            </Link>
            <SearchBar onSearch={props.onSearch}/>
        </>
    )
}

export default Nav;