import { Parallax } from 'react-parallax';
import One from '../img/1.png';

const image1 = () => (
    <Parallax className="image"  bgImage={One} strength={300}>
        <div className='content'>
            <h2>WELCOME TO SYAMSU'S PORTFOLIO</h2>
        </div>
    </Parallax>
);

export default image1;

