import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Container, Grid, Paper, Button } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import NatureIcon from '@mui/icons-material/Nature';

function DashboardPage({ user }) {
  const [garbageEntries, setGarbageEntries] = useState([]);
  const [ecoPoints, setEcoPoints] = useState(0);
  const [rank, setRank] = useState(0);
  const [level, setLevel] = useState(1);

  useEffect(() => {
    // In a real app, you'd fetch this data from an API
    setGarbageEntries([
      { date: '2023-05-01', weight: 2.5 },
      { date: '2023-05-03', weight: 1.8 },
      { date: '2023-05-05', weight: 3.2 },
      { date: '2023-05-07', weight: 2.1 },
      { date: '2023-05-09', weight: 2.8 },
    ]);
    setEcoPoints(75);
    setRank(342);
    setLevel(3);
  }, []);

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
          Welcome, {user.username}!
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 240 }}>
              <Typography variant="h6" gutterBottom>
                Your Eco-Points
              </Typography>
              <Typography variant="h3" component="div" sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {ecoPoints}
              </Typography>
              <Typography variant="body2" align="center">
                Great job! You're making a real difference.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 240 }}>
              <Typography variant="h6" gutterBottom>
                Your Rank
              </Typography>
              <Typography variant="h3" component="div" sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                #{rank}
              </Typography>
              <Typography variant="body2" align="center">
                Keep it up! You're among the top recyclers.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 240 }}>
              <Typography variant="h6" gutterBottom>
                Your Level
              </Typography>
              <Typography variant="h3" component="div" sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {level}
              </Typography>
              <Typography variant="body2" align="center">
                You're a recycling pro! Next level: {level + 1}
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>
                Your Garbage Submissions
              </Typography>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={garbageEntries}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="weight" fill="#4caf50" />
                </BarChart>
              </ResponsiveContainer>
              <Button variant="contained" component={Link} to="/submit" sx={{ mt: 2 }}>
                Submit New Entry
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <TrendingUpIcon color="primary" sx={{ fontSize: 48, mb: 2 }} />
              <Typography variant="h6" gutterBottom>
                Consistent Recycler
              </Typography>
              <Typography variant="body2" align="center">
                You've recycled for 5 consecutive days!
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <EmojiEventsIcon color="primary" sx={{ fontSize: 48, mb: 2 }} />
              <Typography variant="h6" gutterBottom>
                Top 500
              </Typography>
              <Typography variant="body2" align="center">
                You're among the top 500 recyclers this month!
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <NatureIcon color="primary" sx={{ fontSize: 48, mb: 2 }} />
              <Typography variant="h6" gutterBottom>
                Tree Planter
              </Typography>
              <Typography variant="body2" align="center">
                Your efforts have led to 5 trees being planted!
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default DashboardPage;