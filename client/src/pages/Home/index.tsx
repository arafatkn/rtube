import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

export default function Home() {

    const videos: any[] = [];

    return (
        <Grid container spacing={3}>

            {videos.map((video, index) => (
                <Grid item xs={12} md={8} lg={9}>
                    <Paper
                        sx={{
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            height: 240,
                        }}
                    >
                        {video.title}
                    </Paper>
                </Grid>
            ))}
        </Grid>
    );
}