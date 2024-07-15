import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import PlayListPage from './components/PlayListPage/PlayListPage';
import SongsList from './components/SongsList/SongsList';

const playlists=[
        { id: 1, name: 'Melody'},
        { id: 2, name: 'Pop'},
        { id: 3, name: 'Folk'},
];
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<SongsList playlists={playlists}/>} />
        <Route path="/playlists" element={<PlayListPage/>} />
      </Routes>
      
    </div>
    </BrowserRouter>
    
  );
}

export default App;
