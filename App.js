// this is the component document for searching-app 

import React from "react";
import unsplash from "../api/unsplash"
import SearchBar from "./SearchBar";

class App extends React.Component{
    state = { images: []};


    //setting async and await keyword to call back data at specific time; this way more clear and code-clean
    onSearchSubmit = async (term) => {
 
        const response = await unsplash.get("/search/photos", {
        params: {query: term},
        
      })
        this.setState({images: response.data.results});
    };

    /* Another way to get the same result is by using then() function will call back whatever data we got from the API
    onSearchSubmit(term){
        axios.get("https://api.unsplash.com/search/photos", {
        params: {query: term},
        headers:{
            Authorization: "Client-ID E4iB0yW6uDSw2K76emKh_Og-7h-LhiSNFX8pVm5bAS8"
        }
        }).then((response) => {
            console.log(response)
        })
    }*/   

    render(){
        return (
            <div className="ui container" style={{marginTop: "10px"}}>
            <SearchBar onSubmit={this.onSearchSubmit}/>
            Found: {this.state.images.length} images
            </div>
        )
    }


}


export default App;
