import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Container, 
  Paper, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Button,
  TextField,
  Box
} from '@mui/material';
import { styled } from '@mui/system';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  fontWeight: 'bold',
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // In a real app, you'd fetch this data from an API
    const mockUsers = [
      { id: 1, username: 'user1', email: 'user1@example.com', points: 100, level: 2, garbageSubmitted: 50 },
      { id: 2, username: 'user2', email: 'user2@example.com', points: 200, level: 3, garbageSubmitted: 75 },
      { id: 3, username: 'user3', email: 'user3@example.com', points: 150, level: 2, garbageSubmitted: 60 },
      { id: 4, username: 'user4', email: 'user4@example.com', points: 300, level: 4, garbageSubmitted: 100 },
      { id: 5, username: 'user5', email: 'user5@example.com', points: 50, level: 1, garbageSubmitted: 25 },
    ];
    setUsers(mockUsers);
  }, []);

  const filteredUsers = users.filter(user =>
    user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box sx={{ flexGrow: 1, bgcolor: 'background.default', minHeight: '100vh' }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            EcoTracker Admin
          </Typography>
          {/* <Button color="inherit" component={Link} to="/dashboard">User Dashboard</Button> */}
          <Button color="inherit" component={Link} to="/">Logout</Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
          Admin Dashboard
        </Typography>
        <Paper sx={{ p: 2, mb: 4 }} elevation={3}>
          <TextField
            fullWidth
            label="Search users"
            variant="outlined"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{ mb: 2 }}
          />
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="user table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Username</StyledTableCell>
                  <StyledTableCell>Email</StyledTableCell>
                  <StyledTableCell align="right">Points</StyledTableCell>
                  <StyledTableCell align="right">Level</StyledTableCell>
                  <StyledTableCell align="right">Garbage Submitted (kg)</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredUsers.map((user) => (
                  <StyledTableRow key={user.id}>
                    <TableCell component="th" scope="row">
                      {user.username}
                    </TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell align="right">{user.points}</TableCell>
                    <TableCell align="right">{user.level}</TableCell>
                    <TableCell align="right">{user.garbageSubmitted}</TableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Container>
    </Box>
  );
}

export default AdminDashboard;