import React, {useState} from 'react';
import ImageGrid from '../ImageGrid/ImageGrid';
import Title from '../Title/Title';
import Uploader from '../Uploader/Uploader';
import Modal from '../ImageModal/ImageModal';
import DropDownMenu from '../DropDownMenu/DropDownMenu';
import {useAuth} from '../Authentication/AuthContext';
import { Helmet } from 'react-helmet';

const Home = () => {
    const[selectedImg,setSelectedImg] = useState(null);
    const {currentUser} = useAuth();
    const [userSelected,setUserSelected] = useState(currentUser.email);
    const [userName, setUserName] = useState("Your");

    return (
      <div >
        <div>
            <Helmet>
                <title>Image Repo | {userName}'s</title>
            </Helmet>
        </div>
        <Title userSelected={userSelected} />
        <DropDownMenu userName={userName} setUserName={setUserName} selectedUser={userSelected} setUserSelected={setUserSelected}/>
        {currentUser.email === userSelected && <Uploader/>}  
        <ImageGrid setSelectedImg = {setSelectedImg} userSelected={userSelected}/>
        {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg = {setSelectedImg }/> }
      </div>
    );
  }
  
export default Home;
  