import { Form, Link, redirect } from "react-router-dom";

export const action = async ({ request }) => {
  const formData = await request.formData();

  const email = formData.get("email");
  const password = formData.get("password");

  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/signin`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password,
      }),
      credentials: "include",
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Unkwnown error while getting user");
    }

    localStorage.setItem("user", JSON.stringify(data));

    return redirect("/");
  } catch (error) {
    throw new Error(error.message);
  }
};

export default function SignIn() {
  return (
    <div className="flex flex-col items-center wrapper">
      <h1>Welcome back</h1>
      <Form
        method="POST"
        className="flex flex-col gap-6 mt-16 md:w-[25rem] w-[16rem]"
      >
        <input
          className="form-input"
          type="email"
          name="email"
          id="email"
          placeholder="Enter email"
        />
        <input
          className="form-input"
          type="password"
          name="password"
          id="password"
          placeholder="Enter password"
        />
        <button className="form-btn" type="submit">
          Sign in
        </button>
      </Form>
      <p className="mt-4">
        No account ?
        <Link
          to="/signup"
          className="font-semibold underline underline-offset-2"
        >
          {" "}
          Sign Up
        </Link>
      </p>
    </div>
  );
}
