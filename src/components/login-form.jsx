import {
  TextField,
  Button,
  Typography,
  Box,
  Container,
  CssBaseline,
  Avatar,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const LoginForm = ({ onSubmit }) => {
  const schema = z.object({
    Email: z.string().nonempty("Email is required").email("Invalid Email"),
    Password: z
      .string()
      .nonempty("Password is required")
      .min(8, "Minimum 8 characters"),
  });

  const { register, formState, handleSubmit } = useForm({
    defaultValues: {
      Email: "",
      Password: "",
    },
    resolver: zodResolver(schema),
    mode: "onTouched",
  });

  const { errors } = formState;

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>

        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box
          component={"form"}
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="rounded-md shadow-md"
        >
          <Typography variant="p">to continue to Admission.</Typography>
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            {...register("Email")}
            error={!!errors.Email}
            helperText={errors.Email?.message}
          />
          <TextField
            id="password"
            label="Password"
            variant="outlined"
            {...register("Password")}
            error={!!errors.Password}
            helperText={errors.Password?.message}
          />
          <div>
            <Button type="submit" variant="contained">
              LOGIN
            </Button>
            <Button type="button" variant="text">
              Forgot password?
            </Button>
          </div>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginForm;
