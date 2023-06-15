import { flexbox, width } from "@mui/system";

const Navbar = () =>{
    

    return (
        <header className="headerNav" style={{position: "fixed", top : "0", width: "100%", backgroundColor: "rgb(92, 50, 50)", textDecoration: "none"}}>
            <nav className="nav">
                <ul style={{display: "flex", flexDirection: "row", listStyle: "none", gap: "1em", justifyContent: "space-around", alignItems: "center" }}>
                    <li>
                        <a href="" style={{textDecoration: "none", color : "black"}}><p className="titulo">COMPLEJO EL CONDOR</p></a>
                    </li>
                    <li ><a href="" style={{textDecoration: "none", color: "black"}}>Home</a></li>
                    <li><a href="" style={{textDecoration: "none", color: "black"}}>Contacto</a></li>
                </ul>
            </nav>
        </header>
    )
}
export default Navbar;