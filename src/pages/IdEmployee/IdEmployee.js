import React from "react";
import axios from "axios";
import { API_URL } from "../../constants";
import EmployeeForm from "../../components/Employees-Container/EmployeeForm/EmployeeForm";

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
      }
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
    console.log("submit from edit");
    console.log(this.state.employee);

    const id = this.props.match.params.id;

    axios.put(`${API_URL}/employees/${id}`, {
      name: this.state.employee.name,
      job: this.state.employee.job,
      area: this.state.employee.area,
      imgSrc: this.state.employee.imgSrc,
      points: this.state.employee.points
    });
  };

    deleteEmployee = e => {
        e.preventDefault()
        const id = this.props.match.params.id;

        axios.delete(`${API_URL}/employees/${id}`)
        .then(res => this.props.history.push(`/employees`))
    }
  async componentDidMount() {
    const id = this.props.match.params.id;

    const { data } = await axios.get(`${API_URL}/employees/${id}`);
    this.setState({ employee: data });

    console.log(this.state.employee);
  }

  render() {
    const employeeData = this.state.employee;
    return (
      <div>
        <img src={employeeData.imgSrc} alt="Profile" />
        <p>{employeeData.points}</p>
        <h3>{employeeData.name}</h3>
        <ul>
          <li>
            <p>
              <span>Job: </span>
              <span>{employeeData.job}</span>
            </p>
          </li>
          <li>
            <p>
              <span>Hired in: </span>
              <span>{employeeData.area}</span>
            </p>
          </li>
        </ul>
        <EmployeeForm
          onChange={this.handleChange}
          formValues={this.state.employee}
          onSubmit={this.editEmployee}
        />
        <button onClick={this.editEmployee}>Save</button>
        <button onClick={this.deleteEmployee}>Delete</button>

        <h2>Available Prizes</h2>
        <ul>
          <li>Prize 1</li>
          <li>Prize 2</li>
          <li>Prize 3</li>
          <li>Prize 4</li>
        </ul>
      </div>
    );
  }
}

export default IdEmployee;
