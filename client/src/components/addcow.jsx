import React from "react";

class AddCow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newName: "",
      newDescription: "",
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
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
        <label>New Cow Name</label>
        <input
          type="text"
          placeholder="Cow Name..."
          onChange={this.handleNameChange}
        />
        <label>New Cow Description</label>
        <input
          type="text"
          placeholder="Cow Description..."
          onChange={this.handleDescriptionChange}
        />
        <input
          type="submit"
          onClick={(event) => {
            event.preventDefault();
            this.props.addCow({
              name: this.state.newName,
              description: this.state.newDescription,
            });
          }}
        />
      </form>
    );
  }
}

export default AddCow;
