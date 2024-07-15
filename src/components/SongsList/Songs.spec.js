import React from "react";
import SongsList from "./SongsList";
import { render,screen } from "@testing-library/react";

describe('Songs Rendering',()=>{
   it ('should display songs in the main page',async ()=>{
        render(<SongsList/>);
    
        const songsList = await screen.findAllByRole('listitem');
    
        expect(songsList).toHaveLength(4);

   });

  
    

});