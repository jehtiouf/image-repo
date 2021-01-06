import React, {useState} from 'react'
import ProgressBar from '../ProgressBar/ProgressBar';
import './Uploader.css'

const Uploader = () => {
    const [file,setFile] = useState(null);
    const [error,setError] = useState(null);

    const types = ['image/png','image/jpeg'];
    const fileUpload = async(e) => {
        let selectedFile = e.target.files[0];
        console.log(selectedFile);
        if(selectedFile && types.includes(selectedFile.type)){
            setFile(selectedFile)
            setError('');
        } else {
            setFile(null);
            setError('Please select an image file (png/jpeg)')
        }
    }

    return(
        <form>
            <label>
            <input type='file' onChange={fileUpload}/>
            <span>+</span>
            </label>
            <div className="output">
                {error && <div className="error">{error}</div>}
                {file && <div>{file.name}</div>}
                {file && <ProgressBar file={file} setFile={setFile}/>}
            </div>
        </form>
    )
}

export default Uploader;