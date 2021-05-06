import React, { Fragment, useState, useEffect } from 'react';

function App() {

  const [file, setfile] = useState(null)
  const [imageList, setimagelist] = useState([])

  useEffect(() => {
    fetch('http://localhost:9000/image/post') 
    .then(res => res.json())
    .then(res => setimagelist(res))
    .catch(err => {
      console.error(err)
    })
  }, [])

  const sendHandler = () => {
    if(!file){
      alert('you must upload file')
      return
    }

    fetch('http://localhost:9000/verduleria/post', {
      method: 'POST'
    })
    .then(res => res.text())
    .then(res => console.log(res))
    .catch(err => {
      console.error(err)
    })

    document.getElementById('fileinput').value = null

    setfile(null)
  }

  return (
    <Fragment>
      <nav className="navbar navbar-dark bg-dark">
        <div className="countainer">
          <a href="#!" className="navbar-brand">Bienvenido a la Verduleria</a>
        </div>
      </nav>

      <div className="App">
      <header className="App-header">
        <h1>Lista de la compra</h1>
      </header>
      <div className="ListApp">
      <ul>
          <li><a href="#!" className="navbar-brand">Frutas</a></li>
            <ul>
              <li>Naranja</li>
              <li>Fresa</li>
            </ul>
          <li><a href="#!" className="navbar-brand">Verduras</a></li>
            <ul>
              <li>Zanahoria</li>
              <li>Papas</li>
            </ul>
        </ul>
      </div>
      </div>


      <div className="countainer mt-3">
        <div className="card p-1">
          <div className="row">
            <div className="col-2">
              <button onClick={sendHandler} type="button" className="btn btn-primary col-10">Comprar</button>
            </div>
          </div>
        </div>
      </div>

    </Fragment>
  );
}

export default App;
