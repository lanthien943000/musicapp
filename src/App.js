import React from "react";
import { MusicPlayerProvider } from "./contexts/MusicPlayerContext";
import TractList from "./components/TrackList";
import Controller from "./components/Controller";
import Display from "./components/Display";
import { Container } from "@mui/material";

const App = () => {
  return (
    <MusicPlayerProvider>
      <Container
        sx={{
          mt: 5,
        }}
      >
        <div className="container">
          <Display />
          <TractList />
          <Controller />
        </div>
      </Container>
    </MusicPlayerProvider>
  );
};

export default App;
