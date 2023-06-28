import "./navBar.css";
import CartWidget from "./CartWidget";

const Navbar = () =>{
    

    return (
        <header className="header">
        <nav className="navbar">
            <ul className="navUl">
                <li><a href="">RYMA COMPUTACION</a></li>
                <li className="categorias"><a href="">CATEGORIS</a>
                    <ul className="subCategorias">
                        <li>computers</li>
                        <li>mouses</li>
                        <li>keyboards</li>
                    </ul>
                </li>
                <li><a href="">CONTACT</a></li>
                <CartWidget/>
            </ul>
        </nav>
    </header>
    )
}
export default Navbar;