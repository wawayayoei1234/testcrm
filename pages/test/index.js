import { TextField, Button, Checkbox, FormControlLabel, Typography, Link, Container } from '@mui/material';

export default function LoginPage() {
  return (
    <Container component="main" maxWidth="xs" sx={{ display: 'flex', alignItems: 'center', height: '100vh', backgroundColor: '#e0f2f1' }}>
      <div style={{ width: '100%', padding: '40px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', borderRadius: 10, backgroundColor: 'white' }}>
        <Typography variant="h5" gutterBottom align="center" mb={3}>Login</Typography>
        <Typography variant="body2" align="center" mb={4}>Welcome to ChiCRM! Please login your account.</Typography>
        
        <TextField
          fullWidth
          label="Email"
          variant="outlined"
          placeholder="Enter your email"
          margin="normal"
        />
        <TextField
          fullWidth
          label="Password"
          variant="outlined"
          type="password"
          placeholder="8+ strong character"
          margin="normal"
        />
        <FormControlLabel
          control={<Checkbox color="primary" />}
          label="Remember for 30 days"
        />

        <Button variant="contained" color="primary" fullWidth style={{ margin: '20px 0' }}>
          Next
        </Button>

        <Typography variant="body2" align="right" mb={1}>
          <Link href="#" color="primary" underline="hover">
            Forgot password
          </Link>
        </Typography>
        
        <Typography variant="body2" align="center">
          Don't have an account? <Link href="#" color="primary" underline="hover">Sign up</Link>
        </Typography>
      </div>
    </Container>
  );
}
