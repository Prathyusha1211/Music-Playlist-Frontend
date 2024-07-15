import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PlayListPage from './components/PlayListPage/PlayListPage';
import SongsList from './components/SongsList/SongsList';
import { useState } from 'react';

const initialPlaylists = [
  { id: 1, name: 'Melody',songsCount:0 },
  { id: 2, name: 'Pop',songsCount:0},
  { id: 3, name: 'Folk' ,songsCount:0},
];
function App() {
  const [playlists, setPlaylists] = useState(initialPlaylists);

  const addPlaylist = (name) => {
    const newPlaylist = {
      id: playlists.length + 1,
      name,
      songsCount:0
    };
    setPlaylists([...playlists, newPlaylist]);
  };

  const deletePlaylist = (id) => {
    setPlaylists(playlists.filter(playlist => playlist.id !== id));
  };

  const addToPlaylist = (songId, playlistId) => {
    setPlaylists(playlists.map(playlist => {
        if (playlist.id === playlistId) {
            return { ...playlist, songsCount: (playlist.songsCount||0) + 1 };
        }
        return playlist;
    }));
};

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<SongsList playlists={playlists} onAddToPlaylist={addToPlaylist} />} />
          <Route path="/playlists" element={<PlayListPage playlists={playlists} onAddPlaylist={addPlaylist} onDeletePlaylist={deletePlaylist} />} />
        </Routes>

      </div>
    </BrowserRouter>

  );
}

export default App;
