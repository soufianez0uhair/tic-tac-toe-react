import {FaGithubAlt} from'react-icons/fa';

const Footer = ({isGame}) =>{
    return (
        <footer style={{background: isGame ? '#DC2626' : '#fff'}}>
            2022 &copy; Soufiane Zouhair <a href="https://github.com/soufianez0uhair/tic-tac-toe-react.git" target="_blank" ><FaGithubAlt className="icon icon--github" /></a>
        </footer>
    )
}

export default Footer;