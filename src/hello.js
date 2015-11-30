// babel --presets react --watch ./hello.jsx --out-dir ./

var React = require('react');
var ReactDOMServer = require('react/react-dom-server');

var HelloMessage = React.createClass({
  displayName: 'HelloMessage',

  render: function () {
    return React.createElement(
      'div',
      null,
      'Hello ',
      this.props.name
    );
  }
});

var Test = React.createClass({
  displayName: 'Test',

  render: function () {
    return React.createElement(
      'div',
      null,
      'Test ',
      this.props.name
    );
  }
});

var html = ReactDOMServer.renderToString(React.createElement(
  'div',
  null,
  React.createElement(HelloMessage, { name: 'Cheft' }),
  React.createElement(Test, { name: 'John' })
));

console.log(html);