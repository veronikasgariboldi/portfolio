import ScrollVelocity from '../components/scrollthing';
import './about.css'; 
function About() {
  return (
    <div className="about-container"> 
        <div className='intro'>
            <div className='title'>
            <h1 className="asking-the-question">WHO are you??</h1>

            </div>
        </div>
            <div className='scrolling'>
                <ScrollVelocity 
                    texts={['so talented!', 'so true']} 
                    velocity={50} 
                    numCopies={50}
                    className="custom-scroll-text"
                />
            </div>
        </div>
  );
}

export default About;
