import './listePlats.scss';
import { useState, useEffect } from 'react';
import { firestore } from '../firebase';

export default function listePlats({etatPlats}){
    // const [dossiers, setDossiers] = useState([]);
    const [ plats, setPlats ] = useState;
    const [utilisateur] = etatUtilisateur;

    useEffect(
        () => {
            async function chercherPlats() {
                const tabPlats = [];
                const reponse = await firestore.collection('pvt-leila').get();
                reponse.forEach(
                    doss => tabPlats.push(doss.data())
                );
                setPlats(tabPlats);
            }
            chercherPlats();
        }, []
    );

}