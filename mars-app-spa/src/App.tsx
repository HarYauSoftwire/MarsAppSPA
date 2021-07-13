import React from "react";
import logo from "./logo.svg";
import moonLanding from "./moon_landing.jpeg"
import "./App.css";
import { BlogPost } from "./components/blogPostComponent";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <BlogPost
                    title="NASA"
                    content1="NASA is a space agency."
                    content2="NASA was the agency behind the moon landings."
                    imgSource={moonLanding}
                />
            </header>
        </div>
    );
}

export default App;
