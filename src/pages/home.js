import './home.css';
import Overview from '../components/projects-overview';


function Home() { 
    return (
        <div className='Homepage'>
            <div className="MainTitle">
                <div className="headline-container">
                    <div className="headline">
                        <h1 className="first-row"><span className="typing-text"> <span className="Yellow">Veronika Sgariboldi</span></span></h1>
                        <p className="in-between-row"><span className="typing-text"> <span className="gray">student, front-end developer, and much more!</span></span></p>
                        <h1 className="third-row"><span className="typing-text">the one <span className="green">you</span> need</span></h1>
                        <div className="arrow-container">
                            <div className="arrow"></div>
                        </div>  
                        <p className='scroll'>you can scroll down now</p>
                    </div>
                </div>
            </div>
            <div className='Overview'>
                <Overview/>
            </div>
        </div>
    ); 
}

export default Home;