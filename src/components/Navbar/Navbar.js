import React from "react";
import { AppBar, Badge, IconButton, Toolbar, Typography } from '@mui/material'
import QueueMusicIcon from '@mui/icons-material/QueueMusic'
import { styled } from "@mui/material";
import { useNavigate } from "react-router-dom";

const CustomToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',
});




const Navbar = ({playlists}) => {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate('/playlists');
    }


    return (
        <AppBar position="sticky">
            <CustomToolbar>
                <Typography variant="h5">
                    Music Playlist
                </Typography>
                <IconButton style={{ color: "white" }} data-testid="queue-music-icon" onClick={handleNavigate}>
                    <Badge badgeContent={playlists.length} data-testid="playlist-count">
                        <QueueMusicIcon />
                    </Badge>
                </IconButton>
            </CustomToolbar>
        </AppBar>

    );

}
export default Navbar;