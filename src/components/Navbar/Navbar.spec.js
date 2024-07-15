import React from "react";
import {render,screen,fireEvent} from '@testing-library/react'
import Navbar from "./Navbar";
import QueueMusicIcon from "@mui/icons-material/QueueMusic";
import { BrowserRouter } from "react-router-dom";

describe('Navbar Rendering',()=>{
    it('should display navbar with title as Music Playlist',()=>{
        render(<BrowserRouter><Navbar/></BrowserRouter>);

        expect(screen.getByText("Music Playlist")).toBeInTheDocument();

    });

    it('should contain a music playlist icon in the navbar with count of number of playlists',()=>{
        render(<BrowserRouter><Navbar/></BrowserRouter>);

        expect(screen.getByTestId('queue-music-icon')).toBeInTheDocument();
        expect(screen.getByTestId('playlist-count')).toHaveTextContent(3);
    });

    it('should navigate to playlists page by clicking on playlist icon in Navbar',()=>{
        render(<BrowserRouter><Navbar/></BrowserRouter>);

        fireEvent.click(screen.getByTestId('queue-music-icon'));

        expect(window.location.pathname).toBe('/playlists');

    });
});