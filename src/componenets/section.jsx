import React from "react";
import { Box, Typography, Container } from "@mui/material";

const VideoSection = () => {
  return (
    <Container maxWidth="md" sx={{ textAlign: "center", py: 5, bgcolor: "#121212", color: "white", borderRadius: 3 }}>
      {/* Title */}
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        How to Book Our Wedding Event 🎉
      </Typography>

      {/* Description */}
      <Typography variant="body1" sx={{ mb: 3, opacity: 0.8 }}>
        Watch this video to learn how to book a wedding event with us and make your day special! 💍✨
      </Typography>

      {/* YouTube Video */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          paddingBottom: "56.25%", // 16:9 Aspect Ratio
          height: 0,
          overflow: "hidden",
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <iframe
          src="https://www.youtube.com/embed/zotshy8YzHE?si=shbjnAsooQXNlIZP"
          title="How to Book Our Wedding Event"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        ></iframe>
      </Box>
    </Container>
  );
};

export default VideoSection;
