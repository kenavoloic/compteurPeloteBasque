
const Couleurs = function(liste){

    const listeLangues = Object.keys(liste[0].noms);
    const listeCouleurs = liste.map(x => x.couleur);
    let indexCouleur = 0;
    let indexLangue = 0;
    let couleurFond = undefined ;
    let couleurBordure = undefined ;
    let langueActuelle = undefined ;

    const changementCouleur = () => {
        indexCouleur = (indexCouleur + 1) % listeCouleurs.length;
        return indexCouleur;
    };

    const changementLangue = () => {
        indexLangue = (indexLangue + 1) % listeLangues.length;
        langueActuelle = listeLangues[indexLangue];
        return indexLangue;
    };

    const getTraduction = () => {
        return liste[indexCouleur].noms[listeLangues[indexLangue]];
    };

    const getLangues = () => listeLangues;
    const getCouleurs = () => listeCouleurs;
    const getIndexLangue = () => indexLangue;
    const getIndexCouleur = () => indexCouleur;

    /*const getLangueActuelle = () => {
        return listeLangues[indexLangue];
    };*/

    const getCouleur = (envoi) => {
        let indexValide = envoi % listeCouleurs.length;
        return liste[indexValide].couleur;
    };

    const getNom = (envoi) => {
        let indexValide = envoi % listeLangues.length;
        return liste[indexCouleur].noms[listeLangues[indexValide]];
    };

    const couleurHexadecimalVersDecimal = couleur => {         
        if(couleur.length === 7){                
            return couleur.replace('#','').match(/.{1,2}/g).map(x => parseInt(x, 16));          
        } else {                
            return couleur.match(/.{1,2}/g).map(x => parseInt(x, 16));          
        }    
    };

    const getCouleurLabelFond = (envoi, intensiteCouleur=0.65) => {
        let indexValide = envoi % listeCouleurs.length;
        let teinte = listeCouleurs[indexValide];
        let hexa = couleurHexadecimalVersDecimal(teinte);
        let couleurFond = `rgba(${hexa[0]}, ${hexa[1]}, ${hexa[2]}, ${intensiteCouleur})`;  
        return couleurFond;
    };

    const getCouleurLabelBordure = (envoi, intensiteCouleur=1.0) => {
        let indexValide = envoi % listeCouleurs.length;
        let teinte = listeCouleurs[indexValide];
        let hexa = couleurHexadecimalVersDecimal(teinte);
        let couleurBordure = `rgba(${hexa[0]}, ${hexa[1]}, ${hexa[2]}, ${intensiteCouleur})`;  
        return couleurBordure;
    };

    return {getLangues, getCouleurs, getIndexLangue, getIndexCouleur, getCouleur, getNom, changementLangue, changementCouleur, getCouleurLabelFond, getCouleurLabelBordure, getTraduction};
}

export default Couleurs;

