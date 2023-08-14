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

    return <>
        <ToastContainer position={'top-left'} autoClose={5000} theme={'dark'}/>

        <div className="card">
            <div className="card-header">
                <h5>Pointage</h5>
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
                                        <Select options={materiaux}/>
                                    </div>
                                </div>

                                <table className="styled-table mt-2">
                                    <thead>
                                    <tr>
                                        <th>Matériaux</th>
                                        <th>Unité</th>
                                        <th>Quantité</th>
                                        <th>Prix Unitaire</th>
                                        <th>Actions</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        materiauPointe.length > 0
                                            ? materiauPointe.map((item, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <td>{item.libelle}</td>
                                                        <td>{item.unite}</td>
                                                        <td>{item.quantite}</td>
                                                        <td>{item.prixUnitaire}</td>
                                                        <td>
                                                            <button className="btn btn-sm btn-danger"><i
                                                                className="fa fa-minus"></i>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                )
                                            })
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
                                        <Select options={materiels}/>
                                    </div>
                                </div>

                                <table className="styled-table mt-2">
                                    <thead>
                                    <tr>
                                        <th>Matériels</th>
                                        <th>Unité</th>
                                        <th>Quantité</th>
                                        <th>Prix Unitaire</th>
                                        <th>Actions</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        materielPointe.length > 0
                                            ? materielPointe.map((item, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <td>{item.libelle}</td>
                                                        <td>{item.unite}</td>
                                                        <td>{item.quantite}</td>
                                                        <td>{item.prixUnitaire}</td>
                                                        <td>
                                                            <button className="btn btn-sm btn-danger"><i
                                                                className="fa fa-minus"></i>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                )
                                            })
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
                        <div id="collapseThree" className="accordion-collapse collapse show" aria-labelledby="headingThree">
                            <div className="accordion-body">
                                <div className="row g-1">
                                    <div className="col-4">
                                        <Select options={personnels}/>
                                    </div>
                                </div>

                                <table className="styled-table mt-2">
                                    <thead>
                                    <tr>
                                        <th>Personnels</th>
                                        <th>Unité</th>
                                        <th>Quantité</th>
                                        <th>Prix Unitaire</th>
                                        <th>Actions</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        personnelPointe.length > 0
                                            ? personnelPointe.map((item, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <td>{item.libelle}</td>
                                                        <td>{item.unite}</td>
                                                        <td>{item.quantite}</td>
                                                        <td>{item.prixUnitaire}</td>
                                                        <td>
                                                            <button className="btn btn-sm btn-danger"><i
                                                                className="fa fa-minus"></i>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                )
                                            })
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
                <button className="btn ms-1 btn-warning">Consulter un pointage</button>

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
