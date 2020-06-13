import React from "react";

class DeleteCow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cowName: "",
    };

    this.handleCowName = this.handleCowName.bind(this);
  }

  handleCowName(event) {
    this.setState({ cowName: event.target.value });
  }

  render() {
    return (
      <form>
        <label>Cow Name</label>
        <input
          type="text"
          placeholder="Cow name..."
          onChange={this.handleCowName}
        />
        <input
          type="submit"
          value="delete"
          onClick={(event) => {
            event.preventDefault();
            this.props.deleteCow({
              name: this.state.cowName,
            });
          }}
        />
      </form>
    );
  }
}

export default DeleteCow;
