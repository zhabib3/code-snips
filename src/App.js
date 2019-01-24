import React, { Component } from 'react';
import CodeContainer from './Components/CodeContainer';
import './App.css';

class App extends Component {

  render() {
    let gitContainer = {
      title: 'Git Commands',
      commands: [
        "git add -a",
        "git commit -m 'commit message'",
        "git remote add origin -:remote-url-here:-"
      ]    
    };

    let linuxContainer = {
      title: 'Linux Commands',
      commands: [
        "cd: change dir",
        "cp /source file path/ /destination file path/",
        "ssh -P @localhost 9474"
      ]    
    };

    return (
      <div className="body-div">
        <h1>Code Snips</h1>
        <CodeContainer data={gitContainer} />
        <CodeContainer data={linuxContainer} />
      </div>
    );
  }
}



export default App;
