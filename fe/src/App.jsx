import './App.css';
import Nav from './components/nav/Nav';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Main from './components/main/Main';

function App() {
  return (
    <BrowserRouter>
    <Nav/>
    <Routes>
    <Route path='/' element={<Main/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
