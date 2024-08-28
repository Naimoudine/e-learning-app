import { Form, Link, useNavigation, useRouteError } from "react-router-dom";

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

    if (data.role === "teacher") {
      const user = {
        id: data.id,
        firstname: data.firstname,
        lastname: data.lastname,
        role: data.role,
      };

      localStorage.setItem("user", JSON.stringify(user));

      return data;
    }
    return null;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default function Login() {
  const error = useRouteError();
  const navigation = useNavigation();

  const isSubmitting = navigation.state === "submitting";

  return (
    <div className="flex flex-col items-center wrapper">
      {error && (
        <span className="self-center w-3/4 text-sm font-semibold text-red-600">
          {error.message}
        </span>
      )}

      <h1 className="mt-4 text-center">Welcome back on teach</h1>
      <p className="mt-4">Please enter your informations.</p>
      <Form
        method="POST"
        className="flex flex-col gap-6 mt-8 md:w-[25rem] w-[16rem]"
      >
        <input
          className="form-input"
          type="email"
          name="email"
          id="email"
          placeholder="Enter email"
          required
        />
        <input
          className="form-input"
          type="password"
          name="password"
          id="password"
          placeholder="Enter password"
          required
        />
        <button
          className="form-btn disabled:bg-gray-200"
          type="submit"
          disabled={isSubmitting}
        >
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
          Sign In
        </Link>
      </p>
    </div>
  );
}
