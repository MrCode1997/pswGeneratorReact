import React from 'react';

import generator from '../helpers/generator';

class Action extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  genera = () => {
    let code = generator();
    this.props.click(code);
  }

  render () {

    return (
      <div onClick={()=>{this.genera()}} className="action">
        Genera
      </div>
    )
  }
}

export default Action;
