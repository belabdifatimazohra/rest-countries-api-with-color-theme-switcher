import React from "react";
import { Link } from "react-router-dom";
//import { useNavigate } from "react-router-dom";
//import { BsMoon} from 'react-icons/bs';
import DarkMode from "./DarkMode"
function NavBar() {

    // Search country State
    // const [search, setSearch] = useState();
    // const navigate = useNavigate();

    return (
        <div className="nav">
            <div>
                <Link to="/"> Where in the world? </Link>
            </div>
            {/* <div className="theme">
               <BsMoon size={20}/>
               <span> Dark mode </span>

            </div> */}
             <DarkMode />
        </div>
    );
}

export default NavBar;