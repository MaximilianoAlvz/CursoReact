import { flexbox, width } from "@mui/system";
import "./navBar.css";

const Navbar = () =>{
    

    return (
        <header className="headerNav">
            <nav className="nav">
                <ul>
                    <a href=""><li>RYMA COMPUTACION</li></a>
                    <a href=""><li>CATEGORIAS</li></a>
                    <a href=""><li>CONTACTANOS</li></a>
                </ul>
            </nav>
        </header>
    )
}
export default Navbar;