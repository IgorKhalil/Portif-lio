import styles from "./Presentation.module.css"
import ButtonA from "../Elementos/ButtonA"
import {useState, useEffect} from "react"

function Presentation(){

    const [text, setText] = useState('');
    const toRotate = ["Igor Khalil", 'Desenvolvedor Front End'];
    const [loop, setLoop] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const period = 100;
    const[delta, setDelta] = useState(100)


    useEffect(()=>{
        let ticker = setInterval(()=>{
            toType()
        },delta)
        return ()=>{clearInterval(ticker)}
    }, [text])

    const toType = () =>{
        let i = loop % toRotate.length;
        let fullText = toRotate[i];
        let updateText = isDeleting ? fullText.substring(0,text.length-1) : fullText.substring(0,text.length+1)
        
        setText(updateText);

        if(!isDeleting && updateText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }else if (isDeleting && updateText === ""){
            setIsDeleting(false);
            setDelta(period);
            setLoop(loop+1);
        }
    }



    return(
        <div id="Presentation" className={styles.presentation}>
            <h4><strong>Bem vindo ao meu portifólio</strong></h4>
            <h1>Olá, eu sou o {text}</h1>
            <p> 
                Sou técnico em Eletrônica e em Engenharia Clínica e atualmente estou fazendo minha graduação em Ciências da Computação pela UFMA.
                <br/>Minhas experiências no mercado de trabalho me permitiram absolver muitas habilidades como, trabalho em grupo, proatividade, busca de conhecimento,
                <br/> capacidade de resolução de problemas etc... as quais utilizo constantemente no meu desenvolvimento pessoal.
                <br/>Gosto muito de aprender coisas novas e me divirto com desafios.
            </p>
            <ButtonA link="https://github.com/IgorKhalil" text="Conecte-se comigo!"/>

        </div>
    )
}

export default Presentation