import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { Posts } from "./components/Posts/Posts";
import { Post } from "./components/Post/Post";
import bg from './assets/bg.jpg';

function App() {
  var name = 'App';

  var propmessage = 'Hello from ';

  useEffect(function () {
    console.log(propmessage + name);
  }, [])

  return (
    <div style={{
      backgroundImage: `url(${bg})`,
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
      minHeight: "100vh"
    }}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Navigate to="/posts" />} />
          <Route path="/posts" element={<Posts propmessage={propmessage} />} />
          <Route path="/post/:id" element={<Post propmessage={propmessage} />} />
        </Routes>
      </Router>
    </div >
  );
}

export default App;
