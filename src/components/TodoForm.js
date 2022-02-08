import React from "react";
import "./css/Form.css";
import { Field, reduxForm } from "redux-form";

class TodoForm extends React.Component {
  renderError(formProps) {
    if (formProps.meta.error && formProps.meta.touched) {
      return (
        <div className="error-message">
          <div>{formProps.meta.error}</div>
        </div>
      );
    }
  }

  renderInput = (formProps) => {
    console.log(formProps);
    const capitalizedFirstLetter = formProps.input.name
      .slice(0, 1)
      .toUpperCase();

    const capitalizedName =
      capitalizedFirstLetter + formProps.input.name.slice(1);

    return (
      <div>
        <label>{capitalizedName}</label> <br />
        <input
          className="input-field"
          {...formProps.input}
          autoComplete="off"
        />
        {this.renderError(formProps)}
      </div>
    );
  };

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <div className="form-container">
        <form
          onSubmit={this.props.handleSubmit(this.onSubmit)}
          className="form"
        >
          <Field name="title" component={this.renderInput} />
          <Field name="description" component={this.renderInput} />

          <button>Submit</button>
        </form>
      </div>
    );
  }
}

const validate = (formValues) => {
  const errors = {};

  if (!formValues.title) {
    errors.title = "Pls fill up the Title Field";
  }

  if (!formValues.description) {
    errors.description = "Pls fill up the Description Field";
  }

  return errors;
};

export default reduxForm({ form: "todoForm", validate })(TodoForm);
