import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as yup from "yup";
import axios from "axios";
import SwitchesGroup from "./Switch";
import './App.css';

const PizzaForm = ({ isSubmitting, errors, status }) => {
  const [order, setOrder] = useState([]);

  useEffect(() => {
    console.log("status has changed!", status);
    status && setOrder(order => [...order, status]);
  }, [status]);
  return (
    <Form>
      <label htmlFor="name">
        Name:
        <br />
        <Field data-cy="name" name="name" type="text" />
      </label>{" "}
      <p>{errors.name}</p>
      <br />
      <label htmlFor="size">
        Pizza size:
        <Field component="select" name="size" data-cy="size">
          <option value="L">Large</option>
          <option value="M">Medium</option>
          <option value="S">Small</option>
        </Field>
      </label>
      <br />
      <label htmlFor="toppings">
        Toppings:
        <br />
        <Field name="cheese" type="checkbox" id="cheese" />
        Cheese
        <Field name="bacon" type="checkbox" />
        Bacon
        <Field name="ham" type="checkbox" />
        Ham
        <Field name="onion" type="checkbox" />
        Onion
      </label>
      <br />
      <SwitchesGroup name="gluten"/><br/>
      <label>
        Special instructions:
        <br />
        <Field
          name="myTextarea"
          type="textarea"
          placeholder="special instructions"
        />
      </label>
      <br />
      <button disabled={isSubmitting} data-cy="submit">
        Submit
      </button>
      {order.map(o => (
        <ul>
          <li>name: {o.name}</li>
          <li>size:{o.size}</li>
          <li>cheese:{o.cheese.toString()}</li>
          <li>bacon:{o.bacon.toString()}</li>
          <li>ham:{o.ham.toString()}</li>
          <li>onion:{o.onion.toString()}</li>
          <li>gluten free:</li>
          <li>special:{o.myTextarea}</li>
        </ul>
      ))}
    </Form>
  );
};

const FormikApp = withFormik({
  mapPropsToValues({ name, size, cheese, bacon, ham, onion, myTextarea }) {
    return {
      name: name || "",
      size: size || "M",
      cheese: cheese || true,
      bacon: bacon || true,
      ham: ham || false,
      onion: onion || false,
      myTextarea: myTextarea || ""
    };
  },
  validationSchema: yup.object().shape({
    name: yup
      .string()
      .min(2)
      .required()
  }),
  handleSubmit(v, { resetForm, setStatus }) {
    axios
      .post("https://reqres.in/api/users", v)
      .then(res => {
        console.log("success", res);
        setStatus(res.data);
        resetForm();
      })
      .catch(err => {
        console.log(err.res);
      });
  }
})(PizzaForm);

export default FormikApp;
