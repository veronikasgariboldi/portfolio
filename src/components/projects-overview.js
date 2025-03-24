import { motion } from 'framer-motion';
import './projects-overview.css';
import Projectlayout1 from './projects shortview/project1';
import Projectlayout2 from './projects shortview/project2';

function Overview() {

    const projectData = [
        { 
            layout: Projectlayout1, 
            imageUrl: "/path/to/image1.jpg", 
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
<motion.div
                        key={index}
                        className="project-container"
                        initial={{ opacity: 0, y: 50 }} // Initial state: invisible, below screen
                        animate={{ opacity: 1, y: 0 }} // Final state: visible and in position
                        transition={{
                            duration: 0.6, 
                            delay: index * 0.2, // Staggered delay based on index
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{ once: true, amount: 1 }} // Trigger animation when fully in view
                    >
                         {/* Wrapping the project content in Link */}
                                <Layout
                                    imageUrl={project.imageUrl}
                                    title={project.title}
                                    date={project.date}
                                    description={project.description}
                                />
                    </motion.div>
                );
            })}
        </div>
    )  
}

export default Overview;