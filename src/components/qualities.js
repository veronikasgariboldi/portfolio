import "../pages/about.css";

function Qualities() {
    return (
        <div className="qualities-container">
        <h1 className='about-me-question'>What can I do?</h1>
        <div className='about-me-qualities'>
            <div className='about-me-softwares'>
                <h1 className='Qualitie-titles'>Software</h1>
                <div className="line-break"></div>
                <div className="line">
                    <div className='Software' id = "Figma">
                        <div className="figma-img"></div>
                        <h2 className='about-me-qualities-softwares'>Figma</h2>
                    </div>
                    <div className='Software' id = "VSCode">
                        <div className="vscode-img"></div>
                        <h2 className='about-me-qualities-softwares'>VS Code</h2>
                    </div>
                </div>
                <div className="line">
                    <div className='Software' id = "Affinity Photo 2">
                        <div className="affinity-img"></div>
                        <h2 className='about-me-qualities-softwares'>Affinity Photo</h2>
                    </div>
                    <div className='Software' id = "Procreate">
                        <div className="procreate-img"></div>
                        <h2 className='about-me-qualities-softwares'>Procreate</h2>    
                    </div>  
                </div>               
            </div>
            <div className='about-me-languages'>
                <h1 className='Qualitie-titles'>Languages</h1>
                <div className="line-break"></div>
                <div className="line">
                    <div className='Language' id = "React">
                        <div className="react-img"></div>
                        <h2 className='about-me-qualities-languages'>React</h2>    
                    </div>
                    <div className='Language' id = "HTML">
                        <div className="html-img"></div>
                        <h2 className='about-me-qualities-languages'>HTML</h2>
                    </div>
                    <div className='Language' id = "CSS">
                        <div className="css-img"></div>
                        <h2 className='about-me-qualities-languages'>CSS</h2>
                    </div>
                </div>
                <div className="line">
                    <div className='Language' id = "Tailwind CSS">
                        <div className="tailwind-img"></div>
                        <h2 className='about-me-qualities-languages'>Tailwind CSS</h2>
                    </div>
                    <div className='Language' id = "JavaScript">
                        <div className="javascript-img"></div>
                        <h2 className='about-me-qualities-languages'>JavaScript</h2>
                    </div>
                </div>
                    <div className="line">
                    <div className='Language' id = "C">
                        <div className="c-img"></div>
                        <h2 className='about-me-qualities-languages'>C</h2>
                    </div>
                    <div className='Language' id = "Python">
                        <div className="python-img"></div>
                        <h2 className='about-me-qualities-languages'>Python</h2>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Qualities;