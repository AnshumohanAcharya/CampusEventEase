import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";

const Footer = () => {
  const theme = useTheme();
  const isNonMobile = useMediaQuery("(min-width: 600px)");

  return (
    <Box
      borderRadius='0.55rem'
      sx={{
        backgroundColor: theme.palette.background.alt,
        m: "1rem auto",
        p: "1rem 0 ",
      }}
    >
      <Typography textAlign='center' fontSize={!isNonMobile && "0.7rem"}>
        Developed with ❤️ By
        <Typography mx={1} variant='span' fontWeight='bold' color='secondary'>
          Group 8
        </Typography>
      </Typography>
    </Box>
  );
};

export default Footer;
