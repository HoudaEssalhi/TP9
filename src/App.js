import React from 'react';
import CompteList from './components/CompteList';
import CompteForm from './components/CompteForm';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div className="App">
            {/* Barre de navigation */}
            <nav className="navbar navbar-dark bg-dark mb-4">
                <div className="container">
                    <a className="navbar-brand" href="/">Gestion des Comptes</a>
                </div>
            </nav>

            {/* Contenu principal */}
            <div className="container">
                <CompteForm />
                <hr />
                <CompteList />
            </div>
        </div>
    );
}

export default App;
