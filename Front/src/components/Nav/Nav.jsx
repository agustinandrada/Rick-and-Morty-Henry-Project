import { Link } from "react-router-dom";

const Nav = ({onSearch}) =>{
    return(
        <>
            <Link to='/home'>
                <button>Home</button>
            </Link>
            <Link to='/about'>
                <button>About</button>
            </Link>
            <Link to='/'>
                <button>Login</button>
            </Link>
            <Link to='/favorites'>
                <button>Favorites</button>
            </Link>
        </>
    )
}

export default Nav;