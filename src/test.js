var Test = React.createClass({
  displayName: "Test",

  render: function () {
    return React.createElement(
      "div",
      null,
      "Hello ",
      this.props.name
    );
  }
});

module.export = Test;