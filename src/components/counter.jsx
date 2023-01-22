import React, { Component } from "react";
class Counter extends Component {
  // to set a local state uncomment the code below
  //   state = {
  //     value: this.props.counter.value,
  //   };

  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  //   handleIncrement = () => {
  //     this.setState({ value: this.state.value + 1 });
  //   };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formateCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>

        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formateCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;

// Important Note!
// {this.state.tags.length === 0 && "Please create a new tag!"}
// We can use the above statement as an if condition if it has no else statement
// logic behind that is javaScript engine will see the 1st value true or false if
// it's true then, it will look for the next value & in case of string if there is
// something inside it then it'll be considered as truthy otherwise and empty string
// is considered as a falsy value e.g. {true && 'Hi' will be Hi because string is not empty}
