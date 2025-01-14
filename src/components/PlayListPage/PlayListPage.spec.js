import { fireEvent, render ,screen} from "@testing-library/react";
import React from "react";
import PlayListPage from "./PlayListPage";
import { BrowserRouter } from "react-router-dom";

const mockPlaylists = [
    { id: 1, name: "Playlist 1" },
    { id: 2, name: "Playlist 2" },
];

const mockAddPlaylist = jest.fn();

const mockDeletePlaylist = jest.fn();

describe('PlayListPage Rendering',()=>{

    it('should display create playlist button',()=>{
        render(<BrowserRouter><PlayListPage playlists={mockPlaylists} onAddPlaylist={mockAddPlaylist} onDeletePlaylist={mockDeletePlaylist}/></BrowserRouter>);

        expect(screen.getByTestId("create-new-playlist-button")).toBeInTheDocument();
    });

    it('should create a new playlist',()=>{
        render(<PlayListPage playlists={mockPlaylists} onAddPlaylist={mockAddPlaylist} onDeletePlaylist={mockDeletePlaylist}/>);
        fireEvent.click(screen.getByTestId('create-new-playlist-button'));
        fireEvent.change(screen.getByLabelText('Playlist Name'), { target: { value: 'New Playlist' } });
        fireEvent.click(screen.getByText('Create'));
        expect(mockAddPlaylist).toHaveBeenCalledWith('New Playlist');
    })

    it('should delete a playlist', () => {
        render(<PlayListPage playlists={mockPlaylists} onAddPlaylist={mockAddPlaylist} onDeletePlaylist={mockDeletePlaylist} />);
        fireEvent.click(screen.getByTestId("delete-playlist-1"));
        expect(mockDeletePlaylist).toHaveBeenCalledWith(1); // assuming delete icon is for playlist id 1
    });
});