import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Container, Grid, Paper, TextField, Button, Select, MenuItem, FormControl, InputLabel, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import RecyclingIcon from '@mui/icons-material/Recycling';
import NatureIcon from '@mui/icons-material/Nature';
import OpacityIcon from '@mui/icons-material/Opacity';

function SubmitGarbagePage({ user }) {
  const [weight, setWeight] = useState('');
  const [date, setDate] = useState('');
  const [garbageType, setGarbageType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', { weight, date, garbageType });
    // In a real app, you'd send this data to an API
    alert('Garbage entry submitted successfully!');
    setWeight('');
    setDate('');
    setGarbageType('');
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            EcoTracker
          </Typography>
          <Button color="inherit" component={Link} to="/dashboard">Dashboard</Button>
          <Button color="inherit" component={Link} to="/submit">Submit Garbage</Button>
          <Button color="inherit" component={Link} to="/redeem">Redeem Points</Button>
          <Button color="inherit" component={Link} to="/">Logout</Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          Submit Garbage Entry
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 2 }}>
              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  label="Weight (kg)"
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  required
                  margin="normal"
                />
                <TextField
                  fullWidth
                  label="Date"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <FormControl fullWidth margin="normal">
                  <InputLabel>Garbage Type</InputLabel>
                  <Select
                    value={garbageType}
                    onChange={(e) => setGarbageType(e.target.value)}
                    required
                  >
                    <MenuItem value="plastic">Plastic</MenuItem>
                    <MenuItem value="paper">Paper</MenuItem>
                    <MenuItem value="glass">Glass</MenuItem>
                    <MenuItem value="metal">Metal</MenuItem>
                    <MenuItem value="organic">Organic</MenuItem>
                  </Select>
                </FormControl>
                <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
                  Submit Entry
                </Button>
              </form>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>
                Recycling Tips
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <RecyclingIcon />
                  </ListItemIcon>
                  <ListItemText primary="Rinse containers before recycling" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <NatureIcon />
                  </ListItemIcon>
                  <ListItemText primary="Compost organic waste when possible" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <OpacityIcon />
                  </ListItemIcon>
                  <ListItemText primary="Avoid contaminating recyclables with food or liquids" />
                </ListItem>
              </List>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default SubmitGarbagePage;