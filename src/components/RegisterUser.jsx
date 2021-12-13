import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

function RegisterUser() {
  const [last, setLast] = useState("");
  const [first, setFirst] = useState("");
  const [date, setDate] = useState("");

  const get = () => {
    fetch(`http://localhost:4000/todos`).then((d) => d.json());
  };

  const handleChange = () => {
    fetch("http://localhost:4000/todos", {
      method: "POST",
      body: JSON.stringify({
        First_Name: first,
        Last_Name: last,
        DOB: date,
      }),
      headers: { "Content-type": "application/json" },
    }).then(get);
  };

  return (
    <div>
      <Container maxWidth="sm">
        <Box
          sx={{
            bgcolor: "#FEE3EC",
            height: "500px",
            margin: "20px",
            textAlign: "center",
            padding: "10px",
          }}
        >
          <div style={{ margin: "20px" }}>
            <Typography style={{ fontSize: "20px", color: "#781D42" }}>
              Register User Forms
            </Typography>
            <br />
          </div>

          <Typography style={{ marginLeft: "-119px", marginTop: "10px" }}>
            First Name:
          </Typography>
          <TextField
            id="filled-basic"
            label="Enter first name"
            variant="filled"
            onChange={(e) => setFirst(e.target.value)}
          />
          <Typography style={{ marginLeft: "-120px", marginTop: "10px" }}>
            Last Name:
          </Typography>
          <TextField
            id="filled-basic"
            label="Enter last name"
            variant="filled"
            onChange={(e) => setLast(e.target.value)}
          />
          <Typography style={{ marginLeft: "-1px", marginTop: "10px" }}>
            Date of Birth (DD:MM:YYYY)
          </Typography>
          <TextField
            id="filled-basic"
            label="Enter date of birth"
            variant="filled"
            onChange={(e) => setDate(e.target.value)}
          />
          <div style={{ marginTop: "50px" }}>
            <Button
              onClick={handleChange}
              variant="contained"
              style={{ backgroundColor: "#4F091D" }}
            >
              Submit
            </Button>
          </div>
        </Box>
      </Container>
    </div>
  );
}

export default RegisterUser;
