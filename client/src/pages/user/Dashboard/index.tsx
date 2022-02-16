import {useEffect, useState} from "react";
import api from "../../../core/api";
import {useSnackbar} from "notistack";

export default function Dashboard() {

    const [videos, setVideos] = useState([]);
    const [dataLoaded, setDataLoaded] = useState(false);
    const {enqueueSnackbar} = useSnackbar();

    useEffect(() => {
        if (! dataLoaded) {
            api.get("/user/videos")
                .then((response) => {
                    setVideos(response.data?.data);
                    setDataLoaded(true);
                })
                .catch(() => {
                    enqueueSnackbar("Unable to fetch data");
                });
        }
    }, [enqueueSnackbar, videos]);

    return <>
        <h3>Dashboard</h3>
    </>;
}