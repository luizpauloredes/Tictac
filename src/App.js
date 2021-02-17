import './App.css';
import Board from './components/Board';
import logo from './assets/img/logo.png';

function App() {
  const styles = {imagem: {width:"200px"}}

  return (    
      <div className="container m-5">       
        <div className="row">
          <div className="col-md-6 ">
          <h2 className="m-5">Tic tac toe</h2>
          <img src={logo} style={styles.imagem}  alt="teste"/>
          </div>
          <div className="col-md-6">
          <Board/>
          </div>
        </div>
      </div>
       
  );
}

export default App;
