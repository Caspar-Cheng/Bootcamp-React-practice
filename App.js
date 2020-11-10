// this is the component document for searching-app 

import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

class App extends React.Component{

    onSearchSubmit(term){
        //use axios as a 3rd party package to this app
        //use axios get request and query the search term
        axios.get("https://api.unsplash.com/search/photos", {
        params: {query: term},
        headers:{
            Authorization: "Client-ID E4iB0yW6uDSw2K76emKh_Og-7h-LhiSNFX8pVm5bAS8"
        }
        }).then((response) => {
            console.log(response)
        })//axios return a promise and this then() function will call back whatever data we got from the API
    };

    /* Another way to get the same result is by setting async and await keyword to call back data at specific time; this way more clear and code-clean
    async onSearchSubmit(term){
        const response = await axios.get("https://api.unsplash.com/search/photos", {
        params: {query: term},
        headers:{
            Authorization: "Client-ID E4iB0yW6uDSw2K76emKh_Og-7h-LhiSNFX8pVm5bAS8"
        }
        })
        console.log(response.data.results);
    }*/   

    render(){
        return (
            <div className="ui container" style={{marginTop: "10px"}}>
            <SearchBar onSubmit={this.onSearchSubmit}/>
            </div>
        )
    }


}


export default App;
