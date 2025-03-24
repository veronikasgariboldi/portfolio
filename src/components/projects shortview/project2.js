import './project1.css';

function Projectlayout2({ 
  imageUrl, 
  title = "Egg Timer", 
  date = "2025", 
  description = "blablablablabla" 
}) {
    return (
        <div className='project-container'>
            <div className='project-containers'>
                <div className='project-desc'>
                    <h1 className='project-title'>{title}</h1>
                    <h2 className='project-date'>{date}</h2>
                    <p className='project-details'>{description}</p>
                </div>
                <div className='project-img' style={imageUrl ? {backgroundImage: `url(${imageUrl})`} : {}}>
                </div>
            </div>
       </div>
    )
}

export default Projectlayout2;