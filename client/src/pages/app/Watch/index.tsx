import * as React from 'react';
import Grid from '@mui/material/Grid';
import {useEffect, useState} from "react";
import api from "../../../core/api";
import {Button, Skeleton, Typography} from "@mui/material";
import {useParams} from "react-router-dom";
import {formatDistance} from "date-fns";
import {ThumbUp, ThumbDown, Share} from "@mui/icons-material";

export default function Watch() {

    const { videoId } = useParams();

    const [video, setVideo] = useState<any>({});

    const getVideoUrl = (path: string) => {
        return process.env.REACT_APP_API_URL + "/uploads/" + path;
    }

    useEffect(() => {
        console.log(videoId);

        api.get(`/videos/${videoId}`).then((response) => {
            setVideo(response.data);
        });
    }, [videoId]);

    if (! video || ! Object.keys(video).length) {
        return <>
            <Skeleton height={100} />
        </>;
    }

    return (
        <Grid container spacing={3}>

            <Grid item sm={12} md={9}>
                <video width="100%" controls>
                    <source src={getVideoUrl(video.path)} />
                </video>

                <Grid container>
                    <Grid item sm={12} md={8}>
                        <h3>{video.title}</h3>
                        <Typography variant="body2" component="div">
                            Uploaded on {formatDistance(new Date(video.created_at), new Date(), { addSuffix: true })}
                            &nbsp;By {video.user.name}
                        </Typography>
                    </Grid>
                    <Grid item sm={12} md={4} justifyItems="flex-end" alignItems="flex-end">
                        <Button startIcon={<ThumbUp />}>Like</Button>
                        <Button startIcon={<ThumbDown />}>DisLike</Button>
                        <Button startIcon={<Share />}>Share</Button>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item sm={12} md={3}>

            </Grid>

        </Grid>
    );
}