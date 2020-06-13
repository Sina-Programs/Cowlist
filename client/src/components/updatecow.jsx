import React from "react";

class UpdateCow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cowID: "",
      newName: "",
      newDescription: "",
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleCowID = this.handleCowID.bind(this);
  }

  handleCowID(event) {
    this.setState({ cowID: event.target.value });
  }

  handleNameChange(event) {
    this.setState({ newName: event.target.value });
  }

  handleDescriptionChange(event) {
    this.setState({ newDescription: event.target.value });
  }

  render() {
    return (
      <form>
        <label>Cow ID</label>
        <input
          type="Number"
          placeholder="Cow ID..."
          onChange={this.handleCowID}
        />
        <label>Cow Name</label>
        <input
          type="text"
          placeholder="Cow Name..."
          onChange={this.handleNameChange}
        />
        <label>Cow Description</label>
        <input
          type="text"
          placeholder="Cow Description..."
          onChange={this.handleDescriptionChange}
        />
        <input
          type="submit"
          value="update"
          onClick={(event) => {
            event.preventDefault();
            this.props.updateCow({
              id: this.state.cowID,
              name: this.state.newName,
              description: this.state.newDescription,
            });
          }}
        />
      </form>
    );
  }
}

export default UpdateCow;
