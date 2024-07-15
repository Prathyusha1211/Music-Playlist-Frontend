import { Button, Dialog, DialogActions, DialogContent, IconButton, List, ListItem, ListItemText, TextField } from "@mui/material";
import React, { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';

const PlayListPage = ({ playlists,onAddPlaylist,onDeletePlaylist }) => {

    const [open, setOpen] = useState(false);

    const [newPlaylistName, setNewPlaylistName] = useState("");

    const handleDialogOpen = () => {
        setOpen(true);
    }

    const handleDialogClose = () => {
        setOpen(false);
    }

    const handleCreatePlaylist = () => {
        if (newPlaylistName) {
            onAddPlaylist(newPlaylistName);
            setNewPlaylistName("");
            handleDialogClose();
        }
    };

    const handleDeletePlaylist = (id) => {
        onDeletePlaylist(id);
    }

    return (
        <>
            <Button variant="contained" data-testid="create-new-playlist-button" sx={{ margin: 5 }} onClick={() => { handleDialogOpen() }}>
                Create Playlist
            </Button>
            <List>
                {playlists.map((playlist) => (
                    <ListItem key={playlist.id} secondaryAction={
                        <IconButton edge="end" aria-label="delete" onClick={() => handleDeletePlaylist(playlist.id)} data-testid={`delete-playlist-${playlist.id}`}>
                            <DeleteIcon />
                        </IconButton>}>
                        <ListItemText primary={playlist.name} />

                    </ListItem>
                ))}
            </List>
            <Dialog open={open}>
                <DialogContent>
                    <TextField
                        margin="dense"
                        id="playlist-name"
                        label="Playlist Name"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={newPlaylistName}
                        onChange={(e) => setNewPlaylistName(e.target.value)} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={()=>{handleDialogClose()}}>Cancel</Button>
                    <Button onClick={()=>{handleCreatePlaylist()}}>Create</Button>
                </DialogActions>

            </Dialog>
        </>


    );
}
export default PlayListPage;