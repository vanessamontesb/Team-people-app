import React from "react";
import axios from "axios";
import { API_URL } from "../../constants";
import EmployeeForm from "../../components/Employees-Container/EmployeeForm/EmployeeForm";
import EmployeeProfile from "../../components/Employees-Container/EmployeeProfile/EmployeeProfile";
import EmployeesList from "../../components/Employees-Container/EmployeesList/EmployeesList";
import "./Employees.css"

class Employees extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        name: "",
        job: "",
        area: "",
        imgSrc: "",
        points: ""
      },

      employees: [],
      open:false
    };
    this.openForm = this.openForm.bind(this)
  }

  openForm(e){
    this.setState({open: !this.state.open})
  }

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  };

  createEmployee = e => {
    e.preventDefault();
    const {
      form: { name, job, area, imgSrc, points }
    } = this.state;

    axios
      .post(
        `${API_URL}/employees`,
        {
          name,
          job,
          area,
          imgSrc,
          points
        },
        this.createEmployee
      )
      .then(() => {
        this.getEmployees();
        window.location.reload()
      })
      .catch(() => {
      });
  };

  componentDidMount() {
    this.getEmployees();
  }

  getEmployees = () => {
    axios
      .get(`${API_URL}/employees`)
      .then(response => {
        this.setState({
          employees: response.data.sort(function(a, b) {
            return a.points < b.points ? 1 : b.points < a.points ? -1 : 0;
          })
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    return (
      <>
      {this.state.open? (
        <div className="create_employee_container">
            <EmployeeProfile
            id={this.state.form.id}
            name={this.state.form.name}
            job={this.state.form.job}
            area={this.state.form.area}
            imgSrc={this.state.form.imgSrc}
            points={this.state.form.points}
            />
            <EmployeeForm
            onChange={this.handleChange}
            formValues={this.state.form}
            onSubmit={this.createEmployee}
            />
            <button className="button_general button_save" onClick={this.createEmployee}>Save</button>
        </div>
        ):null}
          <div className="add_container">
            <button className="button_general button_add" onClick={(e)=> this.openForm(e)}>Add New</button>
          </div>
            <EmployeesList list={this.state.employees} />
      </>
    );
  }
}

export default Employees;
