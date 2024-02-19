import ButtonB from "../Elementos/ButtonB"
import styles from "./Projects.module.css"
import Card from "../Elementos/Card"

function Projects(){
    return(
        <div className= {styles.projects} id = 'Projects'>
            <h1> Projetos</h1>
            <Card/>
            <Card/>
            <Card/>
            <ButtonB text="Acesse meu repositório" link="https://github.com/IgorKhalil?tab=repositories"/>
        </div>
    )
}

export default Projects