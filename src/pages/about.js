import ScrollVelocity from '../components/scrollthing';
import './about.css'; 
function About() {
  return (
    <div className="about-container"> 
      <ScrollVelocity 
        texts={['so talented!', 'so true']} 
        velocity={50} 
        numCopies={50}
        className="custom-scroll-text"
      />
    </div>
  );
}

export default About;
