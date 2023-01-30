import axios from "axios";


export default axios.create({
    baseURL: "https://api.unsplash.com/",
    headers: {
        Authorization: "Client-ID G_rIo7OE1xIfVLHE0iaXyJYhZJQ8BNWBgHR7GCwor-Q"
    }
})