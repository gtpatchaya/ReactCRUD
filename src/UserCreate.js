import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function UserCreate() {
    const handleSubmit = event => {
        event.preventDefault();
        var myHeaders = new Headers();
        myHeaders.append("Content-type", "application/json");

        var raw = JSON.stringify({
            "fname": fname,
            "lname": lname,
            "username": username,
            "email": email,
            "avatar": avartar
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://www.mecallapi.com/api/users/create", requestOptions)
            .then(response => response.json())
            .then(result => {
                alert(result['message']);
                if (result['status'] === 'ok')
                {
                    window.location.href = '/'
                }
            })
            .catch(error => console.log('error', error));
    }

    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [avartar, setAvartar] = useState('');

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm" sx={{ p: 2 }}>
                <Typography variant="h6" gutterBottom component="div">
                    Create User
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Grid contain spacing={2}>
                        
                        <Grid item xs={12} sm={6} sx={{ p: 1 }}>
                            <TextField id="fname" label="First Name" variant="outlined" 
                            onChange={(e) => setFname(e.target.value)}
                            fullWidth required/>
                        </Grid>

                        <Grid item xs={12} sm={6} sx={{ p: 1 }}>
                            <TextField id="lname" label="Last Name" variant="outlined"
                            onChange={(e) => setLname(e.target.value)}
                            fullWidth required/>
                        </Grid>

                        <Grid item xs={12} sm={6} sx={{ p: 1 }}>
                            <TextField id="username" label="User Name" variant="outlined"
                            onChange={(e) => setUsername(e.target.value)}
                            fullWidth required/>
                        </Grid>

                        <Grid item xs={12} sm={6} sx={{ p: 1 }}>
                            <TextField id="avartar" label="Avartar" variant="outlined"
                            onChange={(e) => setAvartar(e.target.value)}
                            fullWidth required/>
                        </Grid>

                        <Grid item xs={12} sm={6} sx={{ p: 1 }}>
                            <TextField id="email" label="Email" variant="outlined"
                            onChange={(e) => setEmail(e.target.value)}
                            fullWidth required/>
                        </Grid>
                 
                        <Grid item xs={12} sm={6} sx={{ p: 1 }}>
                            <Button type="submit" variant="contained" fullWidth required>Create</Button>
                        </Grid>
                    </Grid>
                </form>
            </Container>
        </React.Fragment>
    );
}