import styles from './Navbar.module.css'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Nav from 'react-bootstrap/Nav'

function Navbar(){
    return(
        <div className ={styles.navbar}>
            <ul>
                <li>Apresentação</li>
                <li>Habilidades</li>
                <li>Projetos</li>
            </ul>
            <ul>
                <li> <FaGithub size={30} /> </li>
                <li> <FaLinkedin size={30} /> </li>
            </ul>
        </div>
    )
}

export default Navbar