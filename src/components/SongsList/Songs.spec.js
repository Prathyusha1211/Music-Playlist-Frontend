import React from "react";
import SongsList from "./SongsList";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe('Songs Rendering', () => {

    const mockPlaylists = [
        { id: 1, name: "Playlist 1" },
        { id: 2, name: "Playlist 2" },
    ];
    it('should display songs in the main page', async () => {

        render(<BrowserRouter><SongsList playlists={mockPlaylists}/></BrowserRouter>);

        const songsList = await screen.findAllByRole('listitem');

        expect(songsList).toHaveLength(4);

    });

    it('should display a add to playlist button', () => {
        render(<BrowserRouter><SongsList playlists={mockPlaylists} /></BrowserRouter>);

        const addToPlayListButton = screen.queryByTestId('add-to-playlist-button-1');

        fireEvent.click(addToPlayListButton);

        expect(screen.getByTestId("addToPlayList-dialog")).toBeInTheDocument();

    })

    




});