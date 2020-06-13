import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Cows from "./components/cowlist";
import CurrentCow from "./components/currentcow";
import AddCow from "./components/addcow";
import UpdateCow from "./components/updatecow";
import DeleteCow from "./components/deletecow";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentCow: {},
      cows: [],
    };

    this.addCow = this.addCow.bind(this);
    this.updateCow = this.updateCow.bind(this);
    this.deleteCow = this.deleteCow.bind(this);
    this.selectCurrent = this.selectCurrent.bind(this);
  }

  componentDidMount() {
    this.getCows();
  }

  getCows() {
    axios
      .get("/api/cows")
      .then(({ data }) => {
        this.setState({ cows: data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  addCow(cow) {
    axios
      .post("/api/cows", cow)
      .then((data) => {
        this.getCows();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  updateCow(cow) {
    axios
      .put("/api/cows", cow)
      .then((data) => {
        this.getCows();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  deleteCow(cow) {
    axios
      .delete("/api/cows", { params: cow })
      .then((data) => {
        this.getCows();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  selectCurrent(cow) {
    this.setState({ currentCow: cow });
  }

  render() {
    return (
      <div>
        <h2>Cow List</h2>
        <CurrentCow currentCow={this.state.currentCow} />
        <br />
        <AddCow addCow={this.addCow} />
        <br />
        <UpdateCow updateCow={this.updateCow} />
        <br />
        <DeleteCow deleteCow={this.deleteCow} />
        <br />
        <Cows cows={this.state.cows} selectCurrent={this.selectCurrent} />
      </div>
    );
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);
