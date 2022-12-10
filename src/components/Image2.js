import { Parallax } from 'react-parallax';
import Two from '../img/2.png';

const image2 = () => (
    
    <Parallax className="image2" bgImage={Two} strength={200}>
        <div className='content2'>
            <h1>KEEP SCROLLING DOWN FOR SEEING HIS CREATIONS</h1>
        </div>
    </Parallax>
);

export default image2;