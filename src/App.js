import React, { Component } from 'react';
import CodeContainer from './Components/CodeContainer';
import './App.css';

class App extends Component {

  render() {
    let gitContainer = {
      id: 1,
      title: 'Git Commands',
      commands: [
        "git add -a",
        "git commit -m 'commit message'",
        "git remote add origin <remote-url-here>"
      ]
    };

    let linuxContainer = {
      id: 2,
      title: 'Linux Commands',
      commands: [
        "cd: change dir",
        "cp <source file path> <dest file path>",
        "ssh -P @localhost 9474",
        "grep -ri <string-to-search>",
        "man -L ./<man-pg-name>"
      ]
    };

    let nodeContainer = {
      title: 'Node Commands',
      commands: [
        "npm start",
        "npm i --save-dev <pkg-name>",
        "nodemon <file.js>"
      ]
    };

    return (
      <div className="body-div">
        <div className="header">
          <h1 style={{color: "#fd79a8"}}>Code Snips <i class="fas fa-clipboard-list"></i></h1>
        </div>
        <div className="container-div">
          <CodeContainer data={nodeContainer} />
          <CodeContainer data={gitContainer} />
          <CodeContainer data={linuxContainer} />


        </div>

      </div>
    );
  }
}



export default App;
