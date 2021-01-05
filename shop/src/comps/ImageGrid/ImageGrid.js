import React from 'react';
import useDb from '../../hooks/useDb';
import {motion} from 'framer-motion';
import './ImageGrid.css'

const ImageGrid = ({setSelectedImg}) =>
{
    const {docs} = useDb('images');
    return(
        <div className = "img-grid">
            {docs && docs.map(doc => (
                <motion.div className='img-wrap' key = {doc.id} 
                onClick={()=>setSelectedImg(doc.url)}
                whileHover={{opacity:0.8}}
                layout
                >
                <motion.img src={doc.url} alt="image"
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{delay:0.5}}/>
               <motion.button className="button"
                whileHover={{scale:1.5}}>x</motion.button>


                </motion.div>
            ))}
        </div>
    )
}

export default ImageGrid;