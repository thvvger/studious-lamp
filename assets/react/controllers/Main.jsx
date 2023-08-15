import React, {useEffect, useState} from 'react';
import {apiUrl} from "../constants";
import Select from 'react-select';
import {ToastContainer, toast} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


const Main = () => {
    const [materiaux, setMateriaux] = useState([]);
    const [materiels, setMateriels] = useState([]);
    const [personnels, setPersonnels] = useState([]);

    const [materiauPointe, setMateriauPointe] = useState([]);
    const [materielPointe, setMaterielPointe] = useState([]);
    const [personnelPointe, setPersonnelPointe] = useState([]);

    const [selectedItem, setSelectedItem] = useState(0);
    const [itemLabel, setItemLabel] = useState("");

    const [tabArray, setTabArray] = useState([]);

    const [totalMateriaux, setTotalMateriaux] = useState(0);
    const [totalMateriels, setTotalMateriels] = useState(0);
    const [totalPersonnels, setTotalPersonnels] = useState(0);

    useEffect(() => {
        loadData();
    }, []);

    const saveItem = () => {
        let url = "";

        switch (selectedItem) {
            case "MATERIAUX":
                url = `${apiUrl}materiaus`;
                break;
            case "MATERIELS":
                url = `${apiUrl}materiels`;
                break;
            case "PERSONNELS":
                url = `${apiUrl}personnels`;
                break;
            default:
                break;
        }

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                libelle: itemLabel
            })
        }).then(response => response.json())
            .then(data => {
                setItemLabel("");

                switch (selectedItem) {
                    case "MATERIAUX":
                        setMateriaux([...materiaux, {
                            value: data.id,
                            label: data.libelle
                        }]);

                        setTabArray([...materiaux, {
                            value: data.id,
                            label: data.libelle
                        }])
                        break;

                    case "MATERIELS":
                        setMateriels([...materiels, {
                            value: data.id,
                            label: data.libelle
                        }])

                        setTabArray([...materiels, {
                            value: data.id,
                            label: data.libelle
                        }])
                        break;

                    case "PERSONNELS":
                        setPersonnels([...personnels, {
                            value: data.id,
                            label: data.libelle
                        }])

                        setTabArray([...personnels, {
                            value: data.id,
                            label: data.libelle
                        }])
                        break;

                    default:
                        break;
                }

                toast.success("Enregistrement effectué avec succès !");
            })
    }

    const showModalAdd = (type) => {
        setSelectedItem(type)

        switch (type) {
            case "MATERIAUX":
                setTabArray(materiaux);
                break;
            case "MATERIELS":
                setTabArray(materiels);
                break;
            case "PERSONNELS":
                setTabArray(personnels);
                break;
            default:
                setTabArray([]);
                break;
        }
    }

    const loadData = () => {
        fetch(`${apiUrl}materiaus`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        })
            .then(response => response.json())
            .then(data => {
                //map data to value and label
                setMateriaux(data.map(item => {
                    return {
                        value: item.id,
                        label: item.libelle
                    }
                }))
            })


        fetch(`${apiUrl}materiels`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        })
            .then(response => response.json())
            .then(data => {
                //map data to value and label
                setMateriels(data.map(item => {
                    return {
                        value: item.id,
                        label: item.libelle
                    }
                }))
            })

        fetch(`${apiUrl}personnels`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        })
            .then(response => response.json())
            .then(data => {
                //map data to value and label
                setPersonnels(data.map(item => {
                    return {
                        value: item.id,
                        label: item.libelle
                    }
                }))
            })
    }

    const handleMatiereChange = (item, type) => {
        const materierePointe = {
            id: item.value,
            libelle: item.label,
            unite: "KG",
            quantite: 0,
            prixUnitaire: 0
        }

        switch (type) {
            case "MATERIAUX":
                //item already exist
                if (materiauPointe.find(element => element.id === item.value)) {
                    toast.error("Cet élément existe déjà dans le tableau !");
                    return;
                }

                setMateriauPointe([...materiauPointe, materierePointe]);
                break;
            case "MATERIELS":

                if (materielPointe.find(element => element.id === item.value)) {
                    toast.error("Cet élément existe déjà dans le tableau !");
                    return;
                }
                setMaterielPointe([...materielPointe, materierePointe]);
                break;
            case "PERSONNELS":

                if (personnelPointe.find(element => element.id === item.value)) {
                    toast.error("Cet élément existe déjà dans le tableau !");
                    return;
                }
                setPersonnelPointe([...personnelPointe, materierePointe]);
        }
    }

    const handleQteChange = (id, value, type) => {
        switch (type) {
            case "MATERIAUX":
                setMateriauPointe(materiauPointe.map(item => {
                    if (item.id === id) {
                        item.quantite = parseFloat(value);
                        item.montant = item.quantite * item.prixUnitaire;
                    }

                    return item;
                }))

                setTotalMateriaux(materiauPointe.reduce((a, b) => a + (b['montant'] || 0), 0));

                break;
            case "MATERIELS":
                setMaterielPointe(materielPointe.map(item => {
                    if (item.id === id) {
                        item.quantite = parseFloat(value);
                        item.montant = item.quantite * item.prixUnitaire;
                    }

                    return item;
                }))

                setTotalMateriels(materielPointe.reduce((a, b) => a + (b['montant'] || 0), 0));
                break;
            case "PERSONNELS":
                setPersonnelPointe(personnelPointe.map(item => {
                    if (item.id === id) {
                        item.quantite = parseFloat(value);
                        item.montant = item.quantite * item.prixUnitaire;
                    }

                    return item;
                }))

                setTotalPersonnels(personnelPointe.reduce((a, b) => a + (b['montant'] || 0), 0));
                break;
        }
    }

    const handlePrixUnitaireChange = (id, value, type) => {
        switch (type) {
            case "MATERIAUX":
                setMateriauPointe(materiauPointe.map(item => {
                    if (item.id === id) {
                        item.prixUnitaire = parseFloat(value);
                        item.montant = item.quantite * item.prixUnitaire;
                    }

                    return item;
                }))

                setTotalMateriaux(materiauPointe.reduce((a, b) => a + (b['montant'] || 0), 0));
                break;
            case "MATERIELS":
                setMaterielPointe(materielPointe.map(item => {
                    if (item.id === id) {
                        item.prixUnitaire = parseFloat(value);
                        item.montant = item.quantite * item.prixUnitaire;
                    }

                    return item;
                }))

                setTotalMateriels(materielPointe.reduce((a, b) => a + (b['montant'] || 0), 0));
                break;
            case "PERSONNELS":
                setPersonnelPointe(personnelPointe.map(item => {
                    if (item.id === id) {
                        item.prixUnitaire = parseFloat(value);
                        item.montant = item.quantite * item.prixUnitaire;
                    }

                    return item;
                }))

                setTotalPersonnels(personnelPointe.reduce((a, b) => a + (b['montant'] || 0), 0));
                break;
        }

        setTotalMateriaux(materiauPointe.reduce((a, b) => a + (b['montant'] || 0), 0));
    }

    return <>
        <ToastContainer position={'top-left'} autoClose={5000} theme={'dark'}/>

        <div className="card">
            <div className="card-header d-flex flex-row">
                <h5>Elaboration du cout de production</h5>

                <div className="row ms-auto g-1 d-flex align-items-end">
                    <div className="col-8">
                        <label htmlFor="numero">Numéro de cout de production</label>
                        <input type="text" id="numero" className="form-control"/>
                    </div>
                    <div className="col-4">
                        <button className="btn btn-success">Charger</button>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                Matériaux
                            </button>

                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne">
                            <div className="accordion-body">
                                <div className="row g-1">
                                    <div className="col-4">
                                        <Select onChange={(item) => {
                                            handleMatiereChange(item, 'MATERIAUX')
                                        }} options={materiaux}/>
                                    </div>
                                </div>

                                <table className="styled-table mt-2">
                                    <thead>
                                    <tr>
                                        <th>Matériaux</th>
                                        <th>Unité</th>
                                        <th style={{width: "15%"}}>Quantité</th>
                                        <th style={{width: "15%"}}>Prix Unitaire</th>
                                        <th>Montant</th>
                                        <th>Actions</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        materiauPointe.length > 0
                                            ? <>
                                                {
                                                    materiauPointe.map((item, index) => {
                                                        return (
                                                            <tr key={index}>
                                                                <td>{item.libelle}</td>
                                                                <td>{item.unite}</td>
                                                                <td>
                                                                    <input type="number"
                                                                           value={item.quantite}
                                                                           onChange={(event) => {
                                                                               handleQteChange(item.id, event.target.value, 'MATERIAUX')
                                                                           }}
                                                                    />
                                                                </td>
                                                                <td>
                                                                    <input type="number"
                                                                           value={item.prixUnitaire}
                                                                           onChange={(event) => {
                                                                               handlePrixUnitaireChange(item.id, event.target.value, 'MATERIAUX')
                                                                           }}
                                                                    />
                                                                </td>
                                                                <td>{item.montant}</td>
                                                                <td>
                                                                    <button className="btn btn-sm btn-danger"><i
                                                                        className="fa fa-minus"></i>
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                        )
                                                    })
                                                }

                                                <tr>
                                                    <td colSpan="4" className="text-end">Total</td>
                                                    <td colSpan={2}>{totalMateriaux}</td>
                                                </tr>
                                            </>
                                            : <tr>
                                                <td colSpan="5">Aucun matériau pointé</td>
                                            </tr>
                                    }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Matériels
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse show" aria-labelledby="headingTwo">
                            <div className="accordion-body">
                                <div className="row g-1">
                                    <div className="col-4">
                                        <Select onChange={(item) => {
                                            handleMatiereChange(item, 'MATERIELS')
                                        }} options={materiels}/>
                                    </div>
                                </div>

                                <table className="styled-table mt-2">
                                    <thead>
                                    <tr>
                                        <th>Matériels</th>
                                        <th>Unité</th>
                                        <th style={{width: "15%"}}>Quantité</th>
                                        <th style={{width: "15%"}}>Prix Unitaire</th>
                                        <th>Montant</th>
                                        <th>Actions</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        materielPointe.length > 0
                                            ? <>
                                                {
                                                    materielPointe.map((item, index) => {
                                                        return (
                                                            <tr key={index}>
                                                                <td>{item.libelle}</td>
                                                                <td>{item.unite}</td>
                                                                <td>
                                                                    <input type="number"
                                                                           value={item.quantite}
                                                                           onChange={(event) => {
                                                                               handleQteChange(item.id, event.target.value, 'MATERIELS')
                                                                           }}
                                                                    />
                                                                </td>
                                                                <td>
                                                                    <input type="number"
                                                                           value={item.prixUnitaire}
                                                                           onChange={(event) => {
                                                                               handlePrixUnitaireChange(item.id, event.target.value, 'MATERIELS')
                                                                           }}
                                                                    />
                                                                </td>
                                                                <td>{item.montant}</td>
                                                                <td>
                                                                    <button className="btn btn-sm btn-danger"><i
                                                                        className="fa fa-minus"></i>
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                        )
                                                    })
                                                }

                                                <tr>
                                                    <td colSpan="4" className="text-end">Total</td>
                                                    <td colSpan={2}>{totalMateriels}</td>
                                                </tr>

                                            </>
                                            : <tr>
                                                <td colSpan="5">Aucun matériel pointé</td>
                                            </tr>
                                    }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Personnels
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse show"
                             aria-labelledby="headingThree">
                            <div className="accordion-body">
                                <div className="row g-1">
                                    <div className="col-4">
                                        <Select onChange={(item) => {
                                            handleMatiereChange(item, 'PERSONNELS')
                                        }} options={personnels}/>
                                    </div>
                                </div>

                                <table className="styled-table mt-2">
                                    <thead>
                                    <tr>
                                        <th>Personnels</th>
                                        <th>Unité</th>
                                        <th style={{width: "15%"}}>Quantité</th>
                                        <th style={{width: "15%"}}>Prix Unitaire</th>
                                        <th>Montant</th>
                                        <th>Actions</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        personnelPointe.length > 0
                                            ? <>
                                                {
                                                    personnelPointe.map((item, index) => {
                                                        return (
                                                            <tr key={index}>
                                                                <td>{item.libelle}</td>
                                                                <td>{item.unite}</td>
                                                                <td>
                                                                    <input type="number"
                                                                           value={item.quantite}
                                                                           onChange={(event) => {
                                                                               handleQteChange(item.id, event.target.value, 'PERSONNELS')
                                                                           }}
                                                                    />
                                                                </td>
                                                                <td>
                                                                    <input type="number"
                                                                           value={item.prixUnitaire}
                                                                           onChange={(event) => {
                                                                               handlePrixUnitaireChange(item.id, event.target.value, 'PERSONNELS')
                                                                           }}
                                                                    />
                                                                </td>
                                                                <td>{item.montant}</td>
                                                                <td>
                                                                    <button className="btn btn-sm btn-danger"><i
                                                                        className="fa fa-minus"></i>
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                        )
                                                    })
                                                }

                                                <tr>
                                                    <td colSpan="4" className="text-end">Total</td>
                                                    <td colSpan={2}>{totalPersonnels}</td>
                                                </tr>
                                            </>
                                            : <tr>
                                                <td colSpan="5">Aucun personnel pointé</td>
                                            </tr>
                                    }

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className="d-flex justify-content-center mt-2">
                        <button className="btn btn-success">Enregistrer le pointage</button>
                    </div>
                </div>
            </div>
            <div className="card-footer d-flex flex-row">
                <button className="btn btn-info">Liste des pointages</button>

                <div className="ms-auto">
                    <button className="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop"
                            onClick={() => {
                                showModalAdd("MATERIAUX")
                            }}>
                        Ajouter matériau
                    </button>

                    <button className="btn btn-success ms-1"
                            data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop"
                            onClick={() => {
                                showModalAdd("MATERIELS")
                            }}>
                        Ajouter matériel
                    </button>

                    <button className="btn btn-dark ms-1"
                            data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop"
                            onClick={() => {
                                showModalAdd("PERSONNELS")
                            }}>
                        Ajouter matériel
                    </button>
                </div>
            </div>

            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false"
                 tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel"> {selectedItem} </h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="row g-1 d-flex align-items-end">
                                <div className="col-5">
                                    <input type="text"
                                           className="form-control"
                                           value={itemLabel}
                                           placeholder={"Libellé " + selectedItem}
                                           onChange={(e) => setItemLabel(e.target.value)}
                                    />
                                </div>
                                <div className="col">
                                    <button onClick={() => saveItem()} type="button"
                                            className="btn btn-success">Enregistrer
                                    </button>
                                </div>
                            </div>

                            <table className="styled-table mt-2">
                                <thead>
                                <tr>
                                    <th>Libellé</th>
                                    <th style={{
                                        width: "10%"
                                    }}>Actions
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    tabArray.length > 0
                                        ? tabArray.map((item, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{item.label}</td>
                                                    <td>
                                                        <button className="btn btn-sm btn-danger"><i
                                                            className="fa fa-minus"></i>
                                                        </button>
                                                    </td>
                                                </tr>
                                            )
                                        }) :
                                        <tr>
                                            <td colSpan="2">Aucun élément</td>
                                        </tr>
                                }
                                </tbody>
                            </table>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>;
}

export default Main;
