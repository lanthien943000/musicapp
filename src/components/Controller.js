import React from "react";
import useMusicPlayer from "../hooks/useMusicPlayer";
import { styled, useTheme } from "@mui/material";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import { Box, IconButton, Stack, Slider } from "@mui/material";

const PlayMusicBox = styled("div")(({ theme }) => ({
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

function Controller() {
  const theme = useTheme();
  const {
    togglePlay,
    playPreviousTrack,
    playNextTrack,
    isPlaying,
    disableControlArea,
  } = useMusicPlayer();

  const mainIconColor = theme.palette.mode === "dark" ? "#ffffff" : "#000";
  const lightIconColor = theme.palette.mode === "dark" ? "#808e9b" : "#1e272e";

  return (
    <Box sx={{ width: "100%", overflow: "hidden", mt: 1 }}>
      <PlayMusicBox>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mt: -1,
          }}
        >
          <IconButton
            aria-label="previous song"
            onClick={() => playPreviousTrack()}
            disabled={disableControlArea}
          >
            <SkipPreviousIcon fontSize="large" htmlColor={mainIconColor} />
          </IconButton>

          <IconButton
            onClick={() => togglePlay()}
            disabled={disableControlArea}
          >
            {isPlaying ? (
              <PauseIcon sx={{ fontSize: "3rem" }} htmlColor={mainIconColor} />
            ) : (
              <PlayArrowIcon
                sx={{ fontSize: "3rem" }}
                htmlColor={mainIconColor}
              />
            )}
          </IconButton>
          <IconButton
            aria-label="next song"
            onClick={() => playNextTrack()}
            disabled={disableControlArea}
          >
            <SkipNextIcon fontSize="large" htmlColor={mainIconColor} />
          </IconButton>
        </Box>
        <Stack
          spacing={2}
          direction="row"
          sx={{ mb: 1, px: 1 }}
          alignItems="center"
        >
          <VolumeDownIcon htmlColor={lightIconColor} />
          <Slider
            aria-label="Volume"
            defaultValue={30}
            sx={{
              color:
                theme.palette.mode === "dark" ? "#fff" : "rgba(0,0,0,0.87)",
              "& .MuiSlider-track": {
                border: "none",
              },
              "& .MuiSlider-thumb": {
                width: 24,
                height: 24,
                backgroundColor: "#fff",
                "&:before": {
                  boxShadow: "0 4px 8px rgba(0,0,0,0.4)",
                },
                "&:hover, &.Mui-focusVisible, &.Mui-active": {
                  boxShadow: "none",
                },
              },
            }}
          />
          <VolumeUpIcon htmlColor={lightIconColor} />
        </Stack>
      </PlayMusicBox>
    </Box>
  );
}

export default Controller;
