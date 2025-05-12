import './projects-overview.css';
import Projectlayout1 from './projects shortview/project1';
import Projectlayout2 from './projects shortview/project2';
import eggImage from '../images/eggegg.png';
import Infostunde from '../images/infostunde.png';


function Overview() {

    const projectData = [
        { 
            layout: Projectlayout1, 
            imageUrl: eggImage,
            title: "Egg Timer", date: "March 2025", 
            description: "A simple and cute timer application for perfect eggs every time. Inspired by the tiktoker @nashla, and all images are done with Procreate and Figma! Runs with Electron Forge. Visit me at github.com/veronikasgariboldi to see the code!" 
        },

        { 
            layout: Projectlayout2, 
            imageUrl: Infostunde, 
            title: "Sales Webpage", date: "2023-2024", 
            description: "A commersial webpage, able to sell crocheted products. Visit infostun.de to see for yourself! It is one of the first full projects I have ever done, and where I discovered that backend is not quite for me!" 
        },

    ];
    
    return (
        <div className='projects-container'>
            <h1 className='projects-title'> My most recent <span className="pixel">projects!</span></h1>
            <div className="line-breakk"></div>
        <div className='overview-container'>
            {projectData.map((project, index) => {
                const Layout = project.layout;

                return (
                    <Layout
                        imageUrl={project.imageUrl}
                        title={project.title}
                        date={project.date}
                        description={project.description}
                    />
                );
            })}
        </div>
        </div>
    )  
}

export default Overview;