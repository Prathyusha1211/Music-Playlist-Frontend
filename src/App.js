import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import PlayListPage from './components/PlayListPage/PlayListPage';
import SongsList from './components/SongsList/SongsList';
import { useState } from 'react';

const initialPlaylists=[
        { id: 1, name: 'Melody'},
        { id: 2, name: 'Pop'},
        { id: 3, name: 'Folk'},
];
function App() {
  const [playlists, setPlaylists] = useState(initialPlaylists);

  const addPlaylist = (name) => {
    const newPlaylist = {
        id: playlists.length + 1,
        name
    };
    setPlaylists([...playlists, newPlaylist]);
};
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<SongsList playlists={playlists}/>} />
        <Route path="/playlists" element={<PlayListPage playlists={playlists} onAddPlaylist={addPlaylist}/>} />
      </Routes>
      
    </div>
    </BrowserRouter>
    
  );
}

export default App;
