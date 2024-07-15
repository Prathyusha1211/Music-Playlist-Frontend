import React from "react";
import {render,screen} from '@testing-library/react'
import Navbar from "./Navbar";
import QueueMusicIcon from "@mui/icons-material/QueueMusic";

describe('Navbar Rendering',()=>{
    it('should display navbar with title as Music Playlist',()=>{
        render(<Navbar/>);

        expect(screen.getByText("Music Playlist")).toBeInTheDocument();

    });

    it('should contain a music playlist icon in the navbar',()=>{
        render(<Navbar/>);

        expect(screen.getByTestId('queue-music-icon')).toBeInTheDocument();
    })
});