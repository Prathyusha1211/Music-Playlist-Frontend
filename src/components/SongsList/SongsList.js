import { Box, Button, List, ListItem, ListItemSecondaryAction, ListItemText } from "@mui/material";
import React from "react";

const allSongs = [
        {id:1,title:"Song 1"},
        {id:2,title:"Song 2"},
        {id:3,title:"Song 3"},
        {id:4,title:"Song 4"},
];

const SongsList = () =>{
    return(
        <Box style={{padding: 2,
        borderRadius: 1,
        maxWidth: '400px',
        margin: '10 auto',}}>
            <List>
            {allSongs.map((song)=>(
                <ListItem key={song.id}>
                    <ListItemText primary={song.title} />
                    <ListItemSecondaryAction>
                        <Button variant="contained" color="primary">
                            Add to Playlist
                        </Button >
                    </ListItemSecondaryAction>
                </ListItem>
            ))}
        </List>
        </Box>
        
    );
}

export default SongsList;