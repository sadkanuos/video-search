import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component{
    state = { videos: [], selectedVideo: null };
    
    onInputSubmit = async (input) => {
        const response = await youtube.get('/search', {
            params:{
                q: input
            }
        });
        this.setState({ videos: response.data.items });
    };
    
    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video });
    };

    render(){
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onInputSubmit} />
                Found {this.state.videos.length} videos related to the search.
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />    
            </div>
        );
    }
}

export default App;