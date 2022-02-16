import axios from "axios";
//import {useSnackbar} from "notistack";

let api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        authorization: 'Bearer ' + localStorage.getItem("auth_token"),
    }
});

/*api.interceptors.response.use( (response) => {}, (error) => {
    const { enqueueSnackbar } = useSnackbar();
    console.log(error.response);
    enqueueSnackbar("test");
});*/

export default api;