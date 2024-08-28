import { Form } from "react-router-dom";

export default function TeachForm() {
  return (
    <Form method="post">
      <input
        className="form-input"
        type="firstname"
        name="firstname"
        placeholder="Enter firstname"
      />
      <input
        className="form-input"
        type="lastname"
        name="lastname"
        placeholder="Enter lastname"
      />
      <input
        className="form-input"
        type="email"
        name="email"
        placeholder="Enter email"
      />
      <input
        className="form-input"
        type="password"
        name="password"
        placeholder="Enter password"
      />
      <input
        className="form-input"
        type="password"
        name="confirm"
        placeholder="Confirm password"
      />
      <button className="form-btn" type="submit">
        sign up
      </button>
    </Form>
  );
}
