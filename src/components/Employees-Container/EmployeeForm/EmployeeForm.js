import React from "react";

class EmployeeForm extends React.Component {
  render() {
    return (
      <div>
        <p>___________________________________</p>
        <h1>Form</h1>
        <h3>Add New Employee :)</h3>

        <form onSubmit={this.props.onSubmit}>
          <label>Name</label>
          <input
            onChange={this.props.onChange}
            type="text"
            name="name"
            value={this.props.formValues.name}
          />

          <label>Job</label>
          <input
            onChange={this.props.onChange}
            type="text"
            name="job"
            value={this.props.formValues.job}
          />

          <label>Area</label>
          <input
            onChange={this.props.onChange}
            type="text"
            name="area"
            value={this.props.formValues.area}
          />

          <label>Points</label>
          <input
            onChange={this.props.onChange}
            type="number"
            name="points"
            value={this.props.formValues.points}
          />

          <label>Image</label>
          <input
            onChange={this.props.onChange}
            type="text"
            name="imgSrc"
            value={this.props.formValues.imgSrc}
          />

        </form>

        <p>___________________________________</p>
      </div>
    );
  }
}

export default EmployeeForm;
