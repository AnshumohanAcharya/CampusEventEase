import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";

const About = () => {
  const theme = useTheme();

  const isNonMobile = useMediaQuery("(min-width: 600px)");

  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Box>
      <Box
        sx={{
          margin: isNonMobile ? "2rem 5rem 2rem 5rem" : "1rem 2rem 1rem 2rem",
        }}
      >
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
          sx={{
            backgroundImage: "none",
            backgroundColor: theme.palette.background.alt,
          }}
        >
          <AccordionSummary
            aria-controls='panel1d-content'
            id='panel1d-header'
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography
              fontSize='1.1rem'
              textDecoration='underline'
              fontWeight='bold'
              width='90%'
              color={theme.palette.secondary.main}
            >
              About CampusEventEase
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Welcome to CampusEventEase, your one-stop solution for seamless academic event management!
            CampusEventEase is designed to revolutionize the way events are organized and accessed within college campuses. Our platform offers a user-friendly interface, empowering both event organizers and students to effortlessly navigate through the registration process and maximize their engagement with academic activities.
            With CampusEventEase, students can create personalized accounts, browse through a diverse range of events including workshops, seminars, and conferences, and easily register for those that pique their interest. Our intuitive system ensures that the registration process is smooth and hassle-free, allowing students to focus on what matters most - their academic and personal growth.
            For event organizers, CampusEventEase provides a comprehensive suite of tools to streamline event management. From creating event listings and managing attendee registrations to facilitating communication with participants, our platform simplifies every aspect of organizing academic events. With CampusEventEase, organizers can devote more time and energy to delivering impactful and enriching experiences for attendees.
            Join us on CampusEventEase and unlock the full potential of academic event management. Whether you're a student eager to explore new learning opportunities or an organizer striving to create memorable events, CampusEventEase is here to support your journey towards academic excellence.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
          sx={{
            backgroundImage: "none",
            backgroundColor: theme.palette.background.alt,
          }}
        >
          <AccordionSummary
            aria-controls='panel2d-content'
            id='panel2d-header'
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography
              fontSize='1.1rem'
              textDecoration='underline'
              fontWeight='bold'
              width='90%'
              color={theme.palette.secondary.main}
            >
              DEVELOPED BY
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Group 8
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
};

export default About;
