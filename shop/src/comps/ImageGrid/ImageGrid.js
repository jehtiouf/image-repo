import React, {useState} from 'react';
import useDb from '../../hooks/useDb';
import {motion} from 'framer-motion';
import './ImageGrid.css'
import DeleteModal from '../DeleteModal/DeleteModal';
import {useAuth} from '../Authentication/AuthContext';

const ImageGrid = ({setSelectedImg, userSelected}) =>
{
    const {docs} = useDb(userSelected);
    const [deleteImg, setDeleteImg] = useState(null);
    const [deleteStorage, setDeleteStorage] = useState(null);
    const {currentUser} = useAuth();

    const onDelete = (id,fileName) =>
    {
        setDeleteStorage(fileName);
        setDeleteImg(id);
    }
    return(
        <div className = "img-grid">
            {docs && docs.map(doc => (
                <motion.div className='img-wrap' key = {doc.id} 
                whileHover={{opacity:0.8}}
                layout
                >
                <motion.img src={doc.url} alt="image"
                    onClick={()=>setSelectedImg(doc.url)}
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{delay:0.5}}/>
               {currentUser.email == userSelected && <motion.button className="button"
                whileHover={{scale:1.5}}
                onClick={()=>onDelete(doc.id,doc.fileName)}
                >x</motion.button>}
                </motion.div>
            ))}
            {deleteImg && <DeleteModal deleteStorage={deleteStorage} 
            setDeleteStorage={setDeleteStorage} deleteImg={deleteImg} setDeleteImg={setDeleteImg}/>}
        </div>
    )
}

export default ImageGrid;