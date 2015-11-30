// babel --presets react --watch ./hello.jsx --out-dir ./

var React = require('react');
var ReactDOMServer = require('react/react-dom-server');

var HelloMessage = React.createClass({
  render: function() {
    return <div>Hello {this.props.name}</div>;
  }
});

var Test = React.createClass({
  render: function() {
    return <div>Test {this.props.name}</div>;
  }
});

var html = ReactDOMServer.renderToString(
  <div>
    <HelloMessage name="Cheft"></HelloMessage>
    <Test name="John"></Test>
  </div>
);

console.log(html);