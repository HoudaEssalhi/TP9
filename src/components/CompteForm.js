import React, { useState } from 'react';
import axios from 'axios';
import API_BASE_URL from '../config'; // ✅ important pour que l’URL du backend soit utilisée correctement

function CompteForm() {
    // État local pour stocker les données du formulaire
    const [compte, setCompte] = useState({
        solde: '',
        dateCreation: '',
        type: 'COURANT'
    });

    // Gérer les changements dans les champs du formulaire
    const handleChange = (e) => {
        setCompte({ ...compte, [e.target.name]: e.target.value });
    };

    // Gérer la soumission du formulaire
    const handleSubmit = (e) => {
        e.preventDefault(); // Empêche le rechargement de la page

        axios.post(`${API_BASE_URL}/comptes`, compte)
            .then(response => {
                alert('✅ Compte ajouté avec succès !');
                // Réinitialiser le formulaire après ajout
                setCompte({ solde: '', dateCreation: '', type: 'COURANT' });
            })
            .catch(error => {
                console.error('Erreur lors de l’ajout du compte :', error);
                alert('❌ Erreur lors de l’ajout du compte.');
            });
    };

    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4">Ajouter un Compte</h2>
            <form onSubmit={handleSubmit} className="border p-4 rounded shadow-sm bg-light">
                <div className="mb-3">
                    <label className="form-label">Solde</label>
                    <input
                        type="number"
                        name="solde"
                        className="form-control"
                        value={compte.solde}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Date de Création</label>
                    <input
                        type="date"
                        name="dateCreation"
                        className="form-control"
                        value={compte.dateCreation}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Type de Compte</label>
                    <select
                        name="type"
                        className="form-select"
                        value={compte.type}
                        onChange={handleChange}
                    >
                        <option value="COURANT">Courant</option>
                        <option value="EPARGNE">Épargne</option>
                    </select>
                </div>

                <button type="submit" className="btn btn-primary w-100">
                    Ajouter
                </button>
            </form>
        </div>
    );
}

export default CompteForm;
