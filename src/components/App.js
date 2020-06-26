import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";

class App extends React.Component {
  state = {
    videos: [],
  };

  onTermSubmit = async (term) => {
    const KEY = "AIzaSyDdHw0YgHdNXIyeplj1yYw-JnxDZjhqCcE";
    const response = await youtube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        maxResults: 5,
        type: "video",
        key: `${KEY}`,
      },
    });

    console.log(response.data.items);
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onTermSubmit={this.onTermSubmit} />
      </div>
    );
  }
}

export default App;
