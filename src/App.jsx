import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className='container-fluid p-4 mt-5 mb-5'>
    <NavBar />
    <ItemListContainer texto="Bienvenidos" />
    </div>
  );
}

export default App;
