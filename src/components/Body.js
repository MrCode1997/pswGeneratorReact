import React from 'react';


class Body extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render () {
    const { value } = this.props;
    return (
      <div className="body">
        <p className="res" >
          {value}
        </p>
      </div>
    )
  }
}

export default Body;
