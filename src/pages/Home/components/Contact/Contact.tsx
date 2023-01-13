import React from "react";
import {
  Container,
  FormControl,
  Grid,
  InputAdornment,
  TextField,
} from "@mui/material";
import { Email, Person, Send } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";

export interface ContactInterface {}

const Contact: React.FC<ContactInterface> = () => {
  return (
    <Container id={""}>
      <h2
        style={{
          textAlign: "center",
          marginTop: 50,
          letterSpacing: 1.5,
          marginBottom: 25,
          color: "#144272",
        }}
      >
        Contacto
      </h2>
      <Grid container spacing={2} justifyContent={"center"}>
        <Grid item sm={12} md={8} lg={6} xl={6}>
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: 15,
              marginBottom: 20,
            }}
          >
            <FormControl>
              <TextField
                label="Nombre"
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Person />
                    </InputAdornment>
                  ),
                }}
                variant="filled"
              />
            </FormControl>
            <TextField
              label="Correo"
              type={"email"}
              required
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email />
                  </InputAdornment>
                ),
              }}
              variant="filled"
            />

            <TextField
              sx={{}}
              label="Asunto"
              required
              multiline
              rows={4}
              maxRows={4}
              variant="filled"
            />
            <LoadingButton
              type={"submit"}
              loading={false}
              loadingPosition="start"
              startIcon={<Send />}
              variant="contained"
            >
              Enviar
            </LoadingButton>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
