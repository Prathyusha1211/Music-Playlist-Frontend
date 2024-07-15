import React from "react";
import {render,screen,fireEvent} from '@testing-library/react'
import Navbar from "./Navbar";
import QueueMusicIcon from "@mui/icons-material/QueueMusic";
import { BrowserRouter } from "react-router-dom";

const mockPlaylists = [
    { id: 1, name: "Playlist 1" },
    { id: 2, name: "Playlist 2" },
];

describe('Navbar Rendering',()=>{
    it('should display navbar with title as Music Playlist',()=>{
        render(<BrowserRouter><Navbar playlists={mockPlaylists} /></BrowserRouter>);

        expect(screen.getByText("Music Playlist")).toBeInTheDocument();

    });

    it('should contain a music playlist icon in the navbar with count of number of playlists',()=>{
        render(<BrowserRouter><Navbar playlists={mockPlaylists}/></BrowserRouter>);

        expect(screen.getByTestId('queue-music-icon')).toBeInTheDocument();
        expect(screen.getByTestId('playlist-count')).toHaveTextContent(mockPlaylists.length);
    });

    it('should navigate to playlists page by clicking on playlist icon in Navbar',()=>{
        render(<BrowserRouter><Navbar playlists={mockPlaylists}/></BrowserRouter>);

        fireEvent.click(screen.getByTestId('queue-music-icon'));

        expect(window.location.pathname).toBe('/playlists');

    });
});