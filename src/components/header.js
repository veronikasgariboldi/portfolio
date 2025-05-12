import './header.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="header">
            <Link to="/" className="name">Veru</Link>
            <div className="header-right">
                <Link to="/" className="active">start</Link>
                <Link to="/projects" className="active">projects</Link>
                <Link to="/about" className="active">about</Link>
            </div>
        </div>
    )
}

export default Header;