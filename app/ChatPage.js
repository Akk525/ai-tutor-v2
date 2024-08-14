// ChatApp.js
import React, { useState } from 'react';
import { Box, Button, IconButton, TextField, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const ChatApp = ({ isChatOpen, handleCloseChat }) => {

  const [prompt, setPrompt] = useState('');
  const [text, setText] = useState('');

  const handleGenerate = async () => {
    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          body: JSON.stringify({body: prompt})
        }
      });

      const data = await response.json();

      if (response.ok) {
        setText(data.text);
      } else {
        console.error(error);
      }
    } catch (error) {
      console.error("Error:" + error);
    }
  }

  return (
    <div>
      {/* Chat UI */}
      {isChatOpen && (
        <Box
          position="fixed"
          top={0}
          left={0}
          width="100vw"
          height="100vh"
          bgcolor="background.paper"
          zIndex={1300}
          display="flex"
          flexDirection="column"
        >
          {/* Close Button */}
          <Box display="flex" justifyContent="flex-start" p={2}>
            <IconButton onClick={handleCloseChat}>
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Chat History */}
          <Box flex={1} overflow="auto" p={2}>
            {/* Render chat messages here */}
            <Typography variant="body1">hi</Typography>
          </Box>

          {/* Input Box */}
          <Box p={2} display="flex" justifyContent="space-between" alignItems="center">
            <TextField
              variant="outlined"
              fullWidth
              placeholder="Type your message..."
              value={prompt}
              sx={{ mr: 2 }}
            />
            <Button onClick={handleGenerate} variant="contained">Send</Button>
          </Box>
        </Box>
      )}
    </div>
  );
};

export default ChatApp;