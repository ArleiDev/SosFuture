import React from 'react';
import { Button, TextField, Typography, Box, Container, CssBaseline, Avatar } from '@mui/material';
import Logo from './imgs/logo.png'

const LoginPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <div
      className="h-screen flex justify-center items-center bg-cover bg-center"
      style={{ backgroundImage: "url('./bg.jpeg')" }} // Substitua pela URL da sua imagem
    >
      <Container component="main" maxWidth="xs" className="bg-white  rounded-lg shadow-lg p-8">
        <CssBaseline />
        <Box
          className="flex flex-col items-center"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div className="logo w-32 mb-6">
            <img src={Logo} alt="" srcset="" />
          </div>
          <Typography component="h1" variant="h5" className="mb-6 text-center text-gray-800">
            Faça o login para <br />entrar  no sistema
  
          </Typography>
          
          {/* Formulário */}
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Endereço de Email"
              name="email"
              autoComplete="email"
              autoFocus
              className="mb-4"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Senha"
              type="password"
              id="password"
              autoComplete="current-password"
              className="mb-4"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className="bg-blue-500 h-12 hover:bg-blue-700 text-white py-2"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
          <h1 className='text-gray-500'>Desenvolvido por Arlei junio</h1>
        </Box>
      </Container>
    </div>
  );
};

export default LoginPage;
