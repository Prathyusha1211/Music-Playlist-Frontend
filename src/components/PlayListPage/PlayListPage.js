import { Badge, Box, Button, Dialog, DialogActions, DialogContent, IconButton, List, ListItem, ListItemIcon, ListItemText, TextField } from "@mui/material";
import React, { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import MusicNoteIcon from '@mui/icons-material/MusicNote';

const PlayListPage = ({ playlists, onAddPlaylist, onDeletePlaylist }) => {

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
            <Box style={{
                padding: 2,
                borderRadius: 1,
                maxWidth: '400px',
                margin: '10px',
                
            }}>
                <Button variant="contained" data-testid="create-new-playlist-button" style={{ margin: '20px', }} onClick={() => { handleDialogOpen() }}>
                    Create Playlist
                </Button>

            </Box>

            <List>
                {playlists.map((playlist) => (
                    <Box style={{
                        padding: 2,
                        borderRadius: 1,
                        maxWidth: '400px',
                        margin: '20px',
                        backgroundColor: '#e3f2fd',
                    }}>
                        <ListItem key={playlist.id} secondaryAction={
                            <IconButton edge="end" aria-label="delete" onClick={() => handleDeletePlaylist(playlist.id)} data-testid={`delete-playlist-${playlist.id}`}>
                                <DeleteIcon />
                            </IconButton>}>
                            <ListItemIcon>
                                <Badge badgeContent={playlist.songsCount || 0} color="secondary">
                                    <MusicNoteIcon />
                                </Badge>
                            </ListItemIcon>
                            <ListItemText primary={playlist.name} />

                        </ListItem>
                    </Box>

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
                    <Button onClick={() => { handleDialogClose() }}>Cancel</Button>
                    <Button onClick={() => { handleCreatePlaylist() }}>Create</Button>
                </DialogActions>

            </Dialog>
        </>


    );
}
export default PlayListPage;