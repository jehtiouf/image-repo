import React, {useState} from 'react';
import ImageGrid from './comps/ImageGrid/ImageGrid';
import Title from './comps/Title/Title';
import Uploader from './comps/Uploader/Uploader';
import Modal from './comps/ImageModal/ImageModal';

function App() {
  const[selectedImg,setSelectedImg] = useState(null);
  return (
    <div className="App">
      <Title/>
      <Uploader/>
      <ImageGrid setSelectedImg = {setSelectedImg}/>
      {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg = {setSelectedImg }/> }

    </div>
  );
}

export default App;
