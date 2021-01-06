import React, {useState} from 'react';
import ImageGrid from './comps/ImageGrid/ImageGrid';
import Title from './comps/Title/Title';
import Uploader from './comps/Uploader/Uploader';
import Modal from './comps/ImageModal/ImageModal';
import Footer from './comps/Footer/Footer'

function App() {
  const[selectedImg,setSelectedImg] = useState(null);
  return (
    <div className="App">
      <Title/>
      <Uploader/>
      <ImageGrid setSelectedImg = {setSelectedImg}/>
      {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg = {setSelectedImg }/> }
      <Footer/>
    </div>
  );
}

export default App;
