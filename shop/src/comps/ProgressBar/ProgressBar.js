import React, {useEffect} from 'react';
import useStorage from '../../hooks/useStorage';
import {motion} from 'framer-motion';
import './ProgressBar.css'

const ProgressBar = ({file,setFile}) => {
    const {fileUrl,progress} = useStorage(file);

    useEffect(() => {
        if(fileUrl)
        {
            setFile(null);
        }
    }, [fileUrl, setFile])
    return (
        <motion.div className = "progress-bar" 
        initial={{width:0}}
        animate={{width:progress+'%'}}  ></motion.div>
    )
}

export default ProgressBar;