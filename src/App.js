import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Posts } from "./components/Posts/Posts";
import { Post } from "./components/Post/Post";

function App() {
  var name = 'App';

  var propmessage = 'Hello from ';

  useEffect(function () {
    console.log(propmessage + name);
  }, [])

  return (
    <Router>
      <Routes>
        <Route path="/posts" element={<Posts propmessage={propmessage} />} />
        <Route path="/post/:id" element={<Post propmessage={propmessage} />} />
      </Routes>
    </Router>
  );
}

export default App;
