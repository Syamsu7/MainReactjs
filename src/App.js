import ImgOne from './components/Image1';
import ImgTwo from './components/Image2';
import ImgThree from './components/Image3';
import ImgFour from './components/image4'
import Text from './components/Text1';
import Footer from './components/footer';
import Text2 from './components/Text2';
import Slide from './components/Slide';
import 'bootstrap/dist/css/bootstrap.min.css';
import Text3 from './components/Text3';
import Text4 from './components/Text4';
import Text5 from './components/Text5';
import React from 'react';
import MetaTags from 'react-meta-tags';
import YouTube from './components/YouTube';
import YouTube2 from './components/YouTube2';


class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <MetaTags>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        </MetaTags>
        <div>
          <ImgOne />
          <Text />
          <ImgTwo />
          <Text2 />
          <ImgThree />
          <Text3 />
          <Slide />
          <ImgFour />
          <Text4 />
          <YouTube />
          <Text5 />
          <YouTube2 />
          <Footer />
        </div>
      </div>

    )
  }
}

export default App;








// function App() {
//   return (
//     <div>
//       <ImgOne />
//       <Text />
//       <ImgTwo />
//       <Text2 />
//       <ImgThree />
//       <Slide />
//       <Footer />
//     </div>
//   );
// }


