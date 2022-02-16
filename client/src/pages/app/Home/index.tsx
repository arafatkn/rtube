import * as React from 'react';
import Grid from '@mui/material/Grid';
import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import api from "../../../core/api";
import {useNavigate} from "react-router-dom";
import {formatDistance} from "date-fns";

export default function Home() {

    const navigate = useNavigate();

    const [videos, setVideos] = useState<any[]>([]);

    useEffect(() => {
        api.get("/").then((response) => {
            setVideos(response.data.videos.data);
        });
    }, [setVideos]);

    return (
        <Grid container spacing={3}>

            <Grid item xs={12}>
                <h2>Random Videos</h2>
            </Grid>

            {videos.map((video) => (
                <Grid item xs={12} md={8} lg={9} key={video.id}>
                    <Card sx={{ maxWidth: 345 }} onClick={() => navigate(`/watch/${video.id}`) }>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image={video.thumbnails[0]}
                                alt={video.title}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div">
                                    {video.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {formatDistance(new Date(video.created_at), new Date(), { addSuffix: true })}
                                    &nbsp;by {video.user.name}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}