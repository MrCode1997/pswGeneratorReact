import React from 'react';

import Action from './components/Action';
import Body from './components/Body';



class App extends React.Component {

  constructor () {
    super();
    this.state = {
      value: 'Clicca'
    };
  }

  handleClick = ( code ) => {
    this.setState({
      value: code
    })
  }

  render() {
    return (
      <div className="App">
        <Body value={this.state.value} />
        <Action click={this.handleClick} />
      </div>
    );
  }
}

export default App;
