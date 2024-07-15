import { Box, Button, Dialog, DialogContent, DialogTitle, IconButton, List, ListItem, ListItemSecondaryAction, ListItemText } from "@mui/material";
import React, { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';

const allSongs = [
    { id: 1, title: "Song 1" },
    { id: 2, title: "Song 2" },
    { id: 3, title: "Song 3" },
    { id: 4, title: "Song 4" },
];

const SongsList = ({ playlists,onAddToPlaylist }) => {


    const [open, setOpen] = useState(false);

    const [selectedSong, setSelectedSong] = useState(null);

    const handleDialogOpen =(song)=>{
        setSelectedSong(song);
        setOpen(true);
    }

    const handleDialogClose =()=>{
        setOpen(false);
        setSelectedSong(null);
    }

    const handleAddToPlaylist = (playlistId) => {
        if (selectedSong) {
            onAddToPlaylist(selectedSong.id, playlistId);
            handleDialogClose();
        }
    };

    return (
        <Box style={{
            padding: 2,
            borderRadius: 1,
            maxWidth: '400px',
            margin: '10 auto',
        }}>
            <List>
                {allSongs.map((song) => (
                    <ListItem key={song.id}>
                        <ListItemText primary={song.title} />
                        <ListItemSecondaryAction>
                            <Button variant="contained" color="primary" onClick={()=>handleDialogOpen(song)} data-testid={`add-to-playlist-button-${song.id}`}>
                                Add to Playlist
                            </Button >
                        </ListItemSecondaryAction>
                    </ListItem>
                ))}
            </List>

            <Dialog open={open} maxWidth="sm" PaperProps={{style: {width: 500,},}} data-testid="addToPlayList-dialog">
                <DialogTitle>
                    Add to Playlist
                    <IconButton onClick={()=>handleDialogClose()} edge="end" sx={{ position: 'absolute', right: 30, top: 8 }}>
                        <CloseIcon/>
                    </IconButton>

                </DialogTitle>

                <DialogContent sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 1,
                    }}>
                    {playlists.map((playlist) => (
                        <Button variant="contained" color="primary" key={playlist.id} sx={{ mb: 1 }} onClick={() => handleAddToPlaylist(playlist.id)}>
                            {playlist.name}
                        </Button>
                    ))}
                </DialogContent>
            </Dialog>
        </Box>


    );
}

export default SongsList;