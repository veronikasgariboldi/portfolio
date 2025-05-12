import "./projects.css";
import Projectlayout1 from "../components/projects shortview/project1";
import eggImage from '../images/eggegg.png';
import Infostunde from '../images/infostunde.png';
import Projectlayout2 from "../components/projects shortview/project2";


function Projects() {
  return (
    <div className="projects-container">
      <h1 className="projects-title">My Projects</h1>
      <div className="project-list">
        <Projectlayout1
          imageUrl={eggImage}
          title="Egg Timer"
          date="2025"
          description= "A simple and cute timer application for perfect eggs every time. Inspired by the tiktoker @nashla, and all images are done with Procreate and Figma! Runs with Electron Forge. Visit me at github.com/veronikasgariboldi to see the code!" 
          />
        <Projectlayout2
          imageUrl={Infostunde}
          title="Sales Webpage"
          date="2023-2024"
          description="A commersial webpage, able to sell crocheted products. Visit infostun.de to see for yourself! It is one of the first full projects I have ever done, and where I discovered that backend is not quite for me!" 
        />
      </div>
      <div className="blabla">
        <h1 className="blablabla">More projects are coming soon!</h1>
        <h1 className="blablabla"> There are more that I have finished! I just do not have the time to imput them due to exam season and my graduation! so sorry!</h1>
      </div>
    </div>
  );
}

export default Projects;