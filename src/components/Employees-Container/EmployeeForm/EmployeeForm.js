import React from "react";
import "./EmployeeForm.css";

class EmployeeForm extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.onSubmit} className="employee_form">
        <input
          className="employee_form_input"
          placeholder="Employee Name"
          onChange={this.props.onChange}
          type="text"
          name="name"
          value={this.props.formValues.name}
        />

        <input
          className="employee_form_input"
          placeholder="Job"
          onChange={this.props.onChange}
          type="text"
          name="job"
          value={this.props.formValues.job}
        />

        <input
          className="employee_form_input"
          placeholder="Area"
          onChange={this.props.onChange}
          type="text"
          name="area"
          value={this.props.formValues.area}
        />

        <input
          className="employee_form_input"
          placeholder="Points"
          onChange={this.props.onChange}
          type="number"
          name="points"
          value={this.props.formValues.points}
        />

        <input
          className="employee_form_input"
          placeholder="Image Url"
          onChange={this.props.onChange}
          type="text"
          name="imgSrc"
          value={this.props.formValues.imgSrc}
        />
      </form>
    );
  }
}

export default EmployeeForm;
