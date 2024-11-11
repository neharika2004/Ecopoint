import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Container, Grid, Paper, Button, LinearProgress, Card, CardContent, CardMedia, CardActions } from '@mui/material';

const rewards = [
  { id: 1, name: 'Eco-friendly Water Bottle', points: 50, image: '/placeholder.svg?height=200&width=200' },
  { id: 2, name: 'Reusable Shopping Bag', points: 30, image: '/placeholder.svg?height=200&width=200' },
  { id: 3, name: 'Plant a Tree', points: 100, image: '/placeholder.svg?height=200&width=200' },
  { id: 4, name: '10% Off at Local Eco Store', points: 200, image: '/placeholder.svg?height=200&width=200' },
  { id: 5, name: 'Bamboo Utensil Set', points: 75, image: '/placeholder.svg?height=200&width=200' },
  { id: 6, name: 'Compost Bin', points: 150, image: '/placeholder.svg?height=200&width=200' },
];

function RedeemPointsPage({ user }) {
  const [points, setPoints] = useState(300); // In a real app, this would be fetched from an API
  const nextLevel = 500;
  const progress = (points / nextLevel) * 100;

  const handleRedeem = (rewardPoints) => {
    if (points >= rewardPoints) {
      setPoints(points - rewardPoints);
      alert('Reward redeemed successfully!');
    } else {
      alert('Not enough points to redeem this reward.');
    }
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
          Redeem Your Eco-Points
        </Typography>
        <Paper sx={{ p: 2, mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            Your current points: {points}
          </Typography>
          <Typography variant="body2" gutterBottom>
            Progress to Next Level
          </Typography>
          <LinearProgress variant="determinate" value={progress} sx={{ height: 10, borderRadius: 5 }} />
          <Typography variant="body2" sx={{ mt: 1 }}>
            Earn {nextLevel - points} more points to reach the next level!
          </Typography>
        </Paper>
        <Grid container spacing={3}>
          {rewards.map((reward) => (
            <Grid item key={reward.id} xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={reward.image}
                  alt={reward.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {reward.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {reward.points} points
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button 
                    size="small" 
                    onClick={() => handleRedeem(reward.points)}
                    disabled={points < reward.points}
                  >
                    Redeem
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default RedeemPointsPage;