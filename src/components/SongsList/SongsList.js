import { Box,  List } from "@mui/material";
import React from "react";
import Song from "./Song";

const allSongs = [
    { id: 1, title: "Song 1" },
    { id: 2, title: "Song 2" },
    { id: 3, title: "Song 3" },
    { id: 4, title: "Song 4" },
];

const SongsList = ({ playlists, onAddToPlaylist }) => {

    return (
        <Box style={{
            padding: 2,
            borderRadius: 1,
            maxWidth: '400px',
            margin: '10 auto',
        }}>
            <List>
                {allSongs.map((song) => (
                    <Song song={song} playlists={playlists} onAddToPlaylist={onAddToPlaylist} />
                ))}
            </List>
        </Box>


    );
}

export default SongsList;