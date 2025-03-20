import './header.css';

function Header(){
    return (
        <div className = "header">
            <a href="#default" className="name">Veru</a>
            <div className="header-right">
                <a className="active" href="#home">start</a>
                <a href="#about">about</a>
                <a href="#pricing">pricing</a>
                <a href="#contact">contact</a>
            </div>
        </div>
    )
}

export default Header;