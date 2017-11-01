import React from 'react';

class ApiCallComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchData('http://my.env:3000/derp');
  }

  render() {
    return (
      <div>
        {this.props.apiResponseText}
      </div>
    );
  }

}

export default ApiCallComponent;
