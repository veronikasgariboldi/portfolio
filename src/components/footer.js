import './footer.css';


function Footer() {
    const handleClick = (url) => {
        window.open(url, '_blank'); // opens in new tab
      };
    return (
        
        <div className="footer">
            <hr className="footer-divider" />
            <h1 className='title'>The many ways to get to me: </h1>
            <div className='socials-container'>
                <div className='social-container'>
                    <div className='instagram-img'></div>
                    <div className='social-user' id='instagram' onClick={() => handleClick('https://www.instagram.com/boomveronika')}>@boomveronika</div>
                </div>
                <div className='social-container'>
                    <div className='tiktok-img'></div>
                    <div className='social-user' id='tiktok' onClick={() => handleClick('https://www.tiktok.com/@boomveronika')}>@boomveronika</div>
                </div>
                <div className='social-container'>
                    <div className='discord-img'></div>
                    <div className='social-user' id='discord' onClick={() => handleClick('https://discordapp.com/users/714812521890054224')}>@boomveronika</div>
                </div>
            </div>
            <div className='socials-container'>
                <div className='social-container'>
                    <div className= 'linkedin-img'></div>
                    <div className='social-user' id='linkedin' onClick={() => handleClick('https://www.linkedin.com/in/veronika-sgariboldi-a32aa9255/')}>Veronika Sgariboldi</div>
                </div>
                <div className='social-container'>
                    <div className='gmail-img'></div>
                    <div className='social-user' id='gmail'>
                    <a href="mailto:veronika.sgariboldi@gmail.com" target="_blank" rel="noopener noreferrer" className="unstyled-link">veronika.sgariboldi@gmail.com</a>
                    </div>
                </div>
                <div className='social-container'>
                    <div className='github-img'></div>
                    <div className='social-user' id='gmail'>
                    <div className='social-user' id='github' onClick={() => handleClick('https://github.com/veronikasgariboldi')}>veronikasgariboldi</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;