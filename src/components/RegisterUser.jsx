import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

function RegisterUser() {
  return (
    <div>
      <Container maxWidth="sm">
        <Box
          sx={{
            bgcolor: "#cfe8fc",
            height: "500px",
            margin: "20px",
            textAlign: "center",
            padding: "10px",
          }}
        >
          <div style={{ margin: "20px" }}>
            <Typography style={{ fontSize: "20px" }}>
              Register User Forms
            </Typography>
          </div>

          <Typography>First Name</Typography>
          <TextField
            id="filled-basic"
            label="Enter first name"
            variant="filled"
          />
          <Typography>Last Name</Typography>
          <TextField
            id="filled-basic"
            label="Enter last name"
            variant="filled"
          />
          <Typography>DOB</Typography>
          <TextField
            id="filled-basic"
            label="Enter date of birth"
            variant="filled"
          />
          <div style={{ marginTop: "10px" }}>
            <Button variant="contained">Submit</Button>
          </div>
        </Box>
      </Container>
    </div>
  );
}

export default RegisterUser;
