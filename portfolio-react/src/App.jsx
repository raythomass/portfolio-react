import { Outlet } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav';
import PDFComp from './PDFComp'

import { pdfjs } from 'react-pdf';

function App() {

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

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
