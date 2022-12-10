import { Parallax } from 'react-parallax';
import Two from '../img/2.png';

const image3 = () => (
    <Parallax className="image2"  bgImage={Two} strength={200}>
        <div className='content2'>
        <h1>THAT IS GETTING CLOSER, HAVE A GREAT EXPERIENCE</h1>
        </div>
    </Parallax>
);

export default image3;