import ImgOne from './components/Image1.js';
import ImgTwo from './components/Image2.js';
import ImgThree from './components/Image3.js';
import Text from './components/Text1.js';
import Footer from './components/footer.js';
import Text2 from './components/Text2.js';
import Slide from './components/Slide.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Text3 from './components/Text3.js';
import React from 'react';
import MetaTags from 'react-meta-tags';


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


