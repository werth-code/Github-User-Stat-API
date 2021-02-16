import React, { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";

const userName = "werth-code"
const gitHubUrl = "https://api.github.com/users/" + userName;

function App() {
  const [userData, setUserData] = useState({}); //allows us to use state in a functional comp.

  useEffect(() => {
    getGitHubUserWithFetch();
  }, []); //renders only once in stead of on each render since we passed the empty array.

  //async functions always return a promise
  const getGitHubUserWithFetch = async () => {
      const response = await fetch(gitHubUrl);
      const jsonData = await response.json();
      setUserData(jsonData);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>GitHub User Data</h2>
      </header>

      <div className="user-container">
        <SearchBar className="search-bar"/>
        <h5 className="info-item">{userData.name}</h5>
        <h5 className="info-item">{userData.location}</h5>
        <h5 className="info-item">{userData.blog}</h5>
        <h5 className="info-item">{userData.company}</h5>
        <h5 className="info-item">{userData.public_repos}</h5>
      </div>
    </div>
  );
}

export default App;