import './project1.css';

function Projectlayout1({ 
    imageUrl = 'https://example.com/default-image.jpg', 
    title = 'Default Project Title',
    date = '2023',
    description = 'Default project description. This is a placeholder text for the project description.'
}) {
    return (
        <div className='project-container'>
            <div className='project-containers'>
            <div className='project-img' style={imageUrl ? { backgroundImage: `url(${imageUrl})` } : {}}>
            </div>
                <div className='project-desc'>
                    <h1 className='project-title'>{title}</h1>
                    <h2 className='project-date'>{date}</h2>
                    <p className='project-details'>{description}</p>
                </div>
            </div>
       </div>
    )
}

export default Projectlayout1;