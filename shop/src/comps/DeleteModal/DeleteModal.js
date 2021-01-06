import React from 'react';
import './DeleteModal.css';
import {storage, db} from '../../firebase/config';
const DeleteModal = ({deleteStorage, setDeleteStorage, deleteImg, setDeleteImg}) => {
    const closeModal = (e) => {
        setDeleteImg(null);
        setDeleteStorage(null);
    }

    const confirmDelete = (deleteImg,deleteStorage) => {
        const storageRef = storage.ref(deleteStorage);
        storageRef.delete().then(function(){
            setDeleteStorage(null);
        });
        db.collection("images").doc(deleteImg).delete().then(function(){
            setDeleteImg(null);
        });
    }

    const handleClick = (e) => {
        if(e.target.classList.contains('backdrop-2')){
            setDeleteImg(null);
            setDeleteStorage(null);
        }
    }

    return(
    <div className="backdrop-2" onClick={handleClick}>
        <div className="modal">
            <h3>Confirm Delete</h3>
            <p className="fileName">{deleteStorage}</p>
            <button className="button-yes button-modal" onClick={() => confirmDelete(deleteImg,deleteStorage)}>Yes</button>
            <button className="button-modal" onClick={closeModal}>Cancel</button>
        </div>
    </div>
    )
}

export default DeleteModal;