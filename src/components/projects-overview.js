import './projects-overview.css';
import Projectlayout1 from './projects shortview/project1';
import Projectlayout2 from './projects shortview/project2';
import eggImage from '../images/eggegg.png';


function Overview() {

    const projectData = [
        { 
            layout: Projectlayout1, 
            imageUrl: eggImage, 
            title: "Egg Timer", date: "March 2025", 
            description: "A simple and cute timer application for perfect eggs every time. Inspired by the tiktoker @nashla" 
        },

        { 
            layout: Projectlayout2, 
            imageUrl: "/path/to/image2.jpg", 
            title: "Sales Webpage", date: "February 2024", 
            description: "A commersial webpage, able to sell corcheted products.\n infostun.de" 
        },
        
        { 
            layout: Projectlayout1, 
            imageUrl: "/path/to/image2.jpg", 
            title: "Weather App", date: "2024", 
            description: "Real-time weather forecasting application." 
        },

    ];
    
    return (
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
    )  
}

export default Overview;