import React from "react";
import useMusicPlayer from "../hooks/useMusicPlayer";
import { styled } from "@mui/material/styles";
import { Box, Button, Typography } from "@mui/material";

const BackgroundPaper = styled("div")({
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  overflow: "hidden",
  backgroundColor: "black",
  backgroundImage:
    "radial-gradient(white, rgba(255,255,255,.2) 2px, transparent 40px), radial-gradient(white, rgba(255,255,255,.15) 1px, transparent 30px), radial-gradient(white, rgba(255,255,255,.1) 2px, transparent 40px), radial-gradient(rgba(255,255,255,.4), rgba(255,255,255,.1) 2px, transparent 30px)",
  backgroundSize: "550px 550px, 350px 350px, 250px 250px, 150px 150px",
  backgroundPosition: "0 0, 40px 60px, 130px 270px, 70px 100px",
});

const MainMusic = styled("div")(({ theme }) => ({
  padding: 16,
  borderRadius: 16,
  width: 343,
  maxWidth: "100%",
  margin: "auto",
  position: "relative",
  zIndex: 1,
  backgroundColor:
    theme.palette.mode === "dark" ? "rgba(0,0,0,0.6)" : "rgba(255,255,255,0.4)",
  backdropFilter: "blur(40px)",
}));

function Tracklist() {
  const { trackList, playTrack } = useMusicPlayer();
  return (
    <Box sx={{ width: "100%", overflow: "hidden", mt: 1, textAlign: "center" }}>
      <MainMusic>
        {trackList.map((track, index) => (
          <Box key={index}>
            <Button
              size="small"
              onClick={() => playTrack(index)}
              sx={{ width: "80%", mt: 1 }}
              className="Button"
            >
              <Typography color="text.secondary" fontWeight={600}>
                {track.name}
              </Typography>
            </Button>
          </Box>
        ))}
      </MainMusic>
      <BackgroundPaper />
    </Box>
  );
}

export default Tracklist;
