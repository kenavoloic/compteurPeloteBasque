import React, { useState } from 'react';

const Pilotari = props => {
    const [total, setTotal] = useState(0);
    const [indexCouleur, setIndexCouleur] = useState(0);
    const [indexLangue, setIndexLangue] = useState(0);
    //////////////////////////////////////////////////////////////////////////
    const changementLangue = () => setIndexLangue(props.koloreak.changementLangue());    
    const changementCouleur = () => setIndexCouleur(props.koloreak.changementCouleur());    
    /////////////////////////////////////////////////////////////////////////
    //Compteur 
    const plus = () => setTotal(props.compteur.plus());
    const zero = () => setTotal(props.compteur.zero());
    const moins = () => setTotal(props.compteur.moins());
    const formatageNombre = nombre => String(nombre).padStart(2, '0');
    /////////////////////////////////////////////////////////////////////////
    const couleurFond = props.koloreak.getCouleurLabelFond(indexCouleur);
    const couleurBordure = props.koloreak.getCouleurLabelBordure(indexCouleur);
    const pilotariNomCouleur = props.koloreak.getNom(indexLangue);
    let retour = (
        <React.Fragment>

        <label className="nomCouleur" onClick={props.traduction}>{props.koloreak.getTraduction()}</label>
        <label className="couleur" onClick={changementCouleur} style={{backgroundColor: couleurFond, borderColor: couleurBordure}}></label>

        <button className="cadran" onClick={plus}>{formatageNombre(total)}</button>
        <button className="plus" onClick={plus}>+1</button>
        <button className="remiseAzero" onClick={zero}>O</button>
        <button className="moins" onClick={moins}>-1</button>

        </React.Fragment>
    );
    return retour;
};

export default Pilotari;
