import React, { Component } from "react";
import "./pageAchievement.css";
import axios from "axios";
import { API_URL } from "../../constants";

class EditAchievement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characterInfo: {
        name: "",
        points: ""
      },
      error: ""
    };
  }

  componentDidMount = () => {
    const {
      match: {
        params: { id }
      }
    } = this.props;
    axios
      .get(`${API_URL}/achievements/${id}`)
      .then(response => {
        this.setState({
          characterInfo: response.data,
          error: ""
        });
      })
      .catch(error => {
        this.setState({
          error: error.message
        });
      });
  };

  handleChange = e => {
    const newInfo = this.state.characterInfo;
    newInfo[e.target.name] = e.target.value;

    this.setState({
      characterInfo: newInfo
    });
  };

  deletePrize = id => {
    axios
      .delete(`${API_URL}/achievements/${id}`)
      .then(() => this.props.history.push("/achievements"));
  };

  handleInputChange = (value, field) => {
    this.setState(prevState => ({
      newCharacterFrom: {
        ...prevState.newCharacterFrom,
        [field]: value
      }
    }));
  };

  editAchievement = e => {
    e.preventDefault();

    const id = this.props.match.params.id;

    axios
      .put(`${API_URL}/achievements/${id}`, {
        name: this.state.characterInfo.name,
        points: this.state.characterInfo.points
      })
      .then(() => this.props.history.push("/achievements"));
  };

  createTextInput = (value, field) => (
    <input
      className="achievement_inputcreate"
      required
      type="text"
      name={field}
      placeholder={field}
      onChange={e => this.handleInputChange(e.target.value, field)}
      value={value}
    />
  );

  render() {
    const {
      characterInfo: { name, points, id }
    } = this.state;

    return (
      <div className="achievement_grid_wrapper">
        <div className="formContainer">
          <form
            className="achievement_formcreate"
            onSubmit={e => this.editAchievement(e)}
            onChange={this.handleChange}
            formvalues={this.state.characterInfo}
          >
            <div className="achievement_inputcreate_container">
              <b>
                <label>Name:</label>
              </b>
              {this.createTextInput(name, "name")}
              <b>
                <label>Points:</label>
              </b>
              {this.createTextInput(points, "points")}
            </div>
            <div className="achievent_eddit_button_container">
              <button
                onClick={this.editAchievement}
                className="button_general achievement_save_button"
              >
                Save
              </button>
              <button
                onClick={() => this.deletePrize(id)}
                className="button_general achievement_save_button general_delete_button"
              >
                Delete
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default EditAchievement;
