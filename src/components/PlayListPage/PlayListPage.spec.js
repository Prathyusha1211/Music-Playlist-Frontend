import { render ,screen} from "@testing-library/react";
import React from "react";
import PlayListPage from "./PlayListPage";
import { BrowserRouter } from "react-router-dom";

describe('PlayListPage Rendering',()=>{
    it('should display create playlist button',()=>{
        render(<BrowserRouter><PlayListPage/></BrowserRouter>);

        expect(screen.getByTestId("create-new-playlist-button")).toBeInTheDocument();
    });
});