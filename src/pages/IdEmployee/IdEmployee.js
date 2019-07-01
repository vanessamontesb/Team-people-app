import React from "react";
import axios from "axios";
import { API_URL } from "../../constants";
import EmployeeForm from "../../components/Employees-Container/EmployeeForm/EmployeeForm";
import EmployeeProfile from "../../components/Employees-Container/EmployeeProfile/EmployeeProfile";
import EmployeePrizesList from "../../components/Employees-Container/EmployeePrizesList/EmployeePrizesList";
import "./IdEmployee.css";

class IdEmployee extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employee: {
        name: "",
        job: "",
        area: "",
        imgSrc: "",
        points: "",
        id: ""
      },
      prizes: []
    };
  }
  handleChange = e => {
    const newInfo = this.state.employee;
    newInfo[e.target.name] = e.target.value;

    this.setState({
      employee: newInfo
    });
  };

  editEmployee = e => {
    e.preventDefault();

    const id = this.props.match.params.id;

    axios.put(`${API_URL}/employees/${id}`, {
      name: this.state.employee.name,
      job: this.state.employee.job,
      area: this.state.employee.area,
      imgSrc: this.state.employee.imgSrc,
      points: this.state.employee.points
    })
    .then(res => this.props.history.push(`/employees`));
  };

  deleteEmployee = e => {
    e.preventDefault();
    const id = this.props.match.params.id;

    axios
      .delete(`${API_URL}/employees/${id}`)
      .then(res => this.props.history.push(`/employees`));
  };
  componentDidMount() {
    this.getEmployeeInfo();
    this.getPrizes();
  }

  getEmployeeInfo = async () => {
    const id = this.props.match.params.id;

    const { data } = await axios.get(`${API_URL}/employees/${id}`);
    this.setState({ employee: data });

  };
  getPrizes = () => {
    axios
      .get(`${API_URL}/prizes`)
      .then(response => {
        this.setState({ prizes: response.data });
        this.setState({
          prizes: response.data.filter(
            a => this.state.employee.points >= a.points
          )
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  render() {
    const employeeData = this.state.employee;
    return (
      <>
        <div className="idemployee_profile_container">
        <EmployeeProfile
          className="idemployee_profile_card"
          name={employeeData.name}
          job={employeeData.job}
          area={employeeData.area}
          imgSrc={employeeData.imgSrc}
          points={employeeData.points}
        />

        <EmployeeForm
        className="idemployee_profile_info"
          onChange={this.handleChange}
          formValues={this.state.employee}
          onSubmit={this.editEmployee}
        />
        <div className="idemployee_button_container">
        <button className="idemployee_save_button" onClick={this.editEmployee}>
          Save
        </button>
        <button
          className="idemployee_delete_button"
          onClick={this.deleteEmployee}
        >
          Delete
        </button>
        </div>
        </div>

        <h2>Available Prizes</h2>
        <EmployeePrizesList list={this.state.prizes} />
      </>
    );
  }
}

export default IdEmployee;
