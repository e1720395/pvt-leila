import './listePlats.scss';
import { useState, useEffect } from 'react';
import { firestore } from '../firebase';

export default function listePlats({etatPlats}){
    // const [dossiers, setDossiers] = useState([]);
    const [ plats ] = etatPlats;

    let dossiers = [];
    firestore.collection('pvt-leila').get().then(
        response => response.forEach(
            doc=> dossiers.push(doc.data())
        )
    )

    }