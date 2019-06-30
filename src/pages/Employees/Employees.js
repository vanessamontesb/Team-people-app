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
    console.log("1. Constructor");

    this.state = {
      form: {
        name: "",
        job: "",
        area: "",
        imgSrc: "",
        points: ""
      },

      employees: []
    };
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
    console.log("entro a la funcion");
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
      })
      .catch(() => {
        console.log("error in createEmployee");
      });
  };

  componentDidMount() {
    console.log("3. componentDidMount");
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

  componentDidUpdate(prevProps, prevState) {
    console.log("5. componentDidUpdate()");
  }

  componentWillUnmount() {}

  render() {
    console.log("2. render()");

    return (
      <>
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

        <button>Add New</button>
        <div>
          <EmployeesList list={this.state.employees} />
        </div>
      </>
    );
  }
}

export default Employees;
