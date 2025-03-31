import ScrollVelocity from '../components/scrollthing';
import './about.css'; 
function About() {
  return (
    <div className="about-container"> 
        <div className='intro-container'>
            <div className='intro'>
                <p className='so'>So..</p>
                    <div className='title'>
                        <h1 className="asking-the-question"><span className='italic'>WHO</span> are you??</h1>
                    </div>
                <div className='me-arrow'>
                    <h2 className='pfp-writing'>me!</h2>
                        <div className='arrow2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="191" height="72" viewBox="0 0 191 72" fill="none">
                                <path d="M2.06885 54.2756C10.7065 62.0495 24.9219 64.1949 35.6367 67.8536C43.5444 70.5538 58.1856 71.4611 65.4328 66.9316C75.0483 60.9219 79.1579 52.0566 79.7232 41.0328C80.207 31.5991 79.9922 20.8248 86.3865 13.1225C92.5365 5.71462 101.141 5.99826 109.938 5.99826C121.089 5.99826 129.666 10.2298 140.279 12.7873C146.63 14.3174 152.919 16.0976 159.263 17.6485C161.751 18.2565 165.119 19.5763 167.687 19.5763C172.074 19.5763 176.309 21.8393 180.846 21.8393" stroke="black" stroke-width="3" stroke-linecap="round"/>
                                <path d="M171.04 2.22668C174.203 2.57822 179.113 8.94734 181.6 10.9015C182.614 11.6978 189.05 14.9728 189.144 16.559C189.179 17.1645 189.268 18.0225 188.976 18.5706C186.262 23.6591 180.317 28.2023 176.404 32.3162C171.36 37.6181 165.645 45.658 158.97 48.9953" stroke="black" stroke-width="3" stroke-linecap="round"/>
                            </svg>
                    </div>
                </div>
            </div>
            <div className='profile'>
                
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
