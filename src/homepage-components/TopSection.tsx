import * as React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';


export default function TopSection() {
    return <div>
        <Grid container spacing={2}>
            <Grid item xs={4}>
                <ArrowBackIcon />   <Typography>Content Quick Packs</Typography>
            </Grid>

            <Grid item xs={4}>
            </Grid>

            <Grid xs={4}> 
                <Button>Start Without a Pack </Button>
            </Grid>
        </Grid>
    </div>
}