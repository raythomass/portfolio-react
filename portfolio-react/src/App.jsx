import { Outlet } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav';

function App() {
    return (
      <>
        <Nav />
        <main className="mx-3">
          <Outlet />
        </main>
      </>
    );
  }

export default App
