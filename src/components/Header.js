import './Header.css';
import { Link } from 'react-router-dom';
import { useDataContext } from "../providers/Data";

function Header() {

    const {data} = useDataContext();

    console.log('data', data);

    return (
        <nav>
            <ul className="Header-list">
                {data['navItems'].map(i => <li key={i.url} className="Header-item"><Link to={i.url}>{i.text}</Link></li>)}
            </ul>
        </nav>
    );
}

export default Header