import React from 'react';
import ReactDOM from 'react-dom';

import Compteur from './Compteur.js';
import Pilotari from './Pilotari.js';

import Couleurs from './Couleurs.js';
import nuancier from './Nuancier.js';

import './Application.css';

class Application extends React.Component {

    constructor(props){
        super(props);
        this.c1 = new Compteur(99);
        this.c2 = new Compteur(99);
        this.identifiant1 = this.suffixeAleatoire();
        this.identifiant2 = this.suffixeAleatoire();

        this.nuancier = nuancier;
        this.k1 = new Couleurs(this.nuancier);
        this.k2 = new Couleurs(this.nuancier);

        this.state = { 
            indexLangue1: 0, 
            indexLangue2: 0
       };
        
    }

    suffixeAleatoire = () => (Math.random()+1).toString(36).substring(2,6);

    indexAleatoire = () => Math.floor(Math.random() * 100);

    changementLangue = () => {
        this.setState({
            indexLangue1: this.k1.changementLangue(),
            indexLangue2: this.k2.changementLangue()
        });
    };
/*
    static getDerivedStateFromProps = (props, state) => {
        console.log("Application getDerivedStateFromProps");
        return null;
    };

    componentDidMount = () => {
        console.log("Application componentDidMount");
    };

    shouldComponentUpdate = () => {
        console.log("Application shouldComponentUpdate");
        return true;
    };

    getSnapshotBeforeUpdate = (prevProps, prevState) => {
        console.log("Application getSnapshotBeforeUpdate ");
        return null;
    };

    componentDidUpdate = (prevProps, prevState, snapshot) => {
        console.log("Application componentDidUpdate ");
    };
*/



    render(){

        return (
            <main id="principal">
            <article className="cadre" id={this.identifiant1}>
            <Pilotari compteur = {this.c1} langue={this.state.indexLangue1} traduction={this.changementLangue} koloreak={this.k1} />
            </article>
            <article className="cadre" id={this.identifiant2}>
            <Pilotari compteur = {this.c2} langue={this.state.indexLangue2}  traduction={this.changementLangue} koloreak={this.k2} />
            </article>
           </main>
        );
    }

}

export default Application;

