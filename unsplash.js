
import axios from "axios";


export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers:{
        Authorization: "Client-ID E4iB0yW6uDSw2K76emKh_Og-7h-LhiSNFX8pVm5bAS8"
        }
})
