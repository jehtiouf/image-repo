import {useState, useEffect} from 'react';
import {storage, db, timeStamp} from '../firebase/config';

const useStorage = (file) => {
    const[progress,setProgress] = useState(0);
    const[error,setError] = useState(null);
    const[fileUrl,setFileUrl] = useState(null);

    useEffect(() => {
       const storageRef = storage.ref(file.name);
       const collectionRef = db.collection('images');

       storageRef.put(file).on('state_changed', (snap) => {
           let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
           setProgress(percentage);

       }, (err) => {
           setError(err);
       }, async () => {
            const url = await storageRef.getDownloadURL();
            const createdAt = timeStamp();
            const fileName = file.name;
            collectionRef.add({url, createdAt, fileName})
            setFileUrl(url);
       })
    }, [file]);

    return {progress,error,fileUrl};
}

export default useStorage;