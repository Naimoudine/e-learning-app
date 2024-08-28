import { Link, useRouteError } from "react-router-dom";
import UserForm from "../components/auth/UserForm";

export default function SignUp() {
  const error = useRouteError();

  return (
    <div className="flex flex-col items-center wrapper">
      {error && (
        <span className="self-center w-3/4 text-sm font-semibold text-red-600">
          {error.message}
        </span>
      )}
      <h1>Welcome</h1>
      <p className="mt-4">Fill the form with your informations.</p>
      <UserForm />
      <p className="mt-4">
        Already have an acoount ?{" "}
        <Link
          className="font-semibold underline underline-offset-2"
          to="/signin"
        >
          Sign in
        </Link>
      </p>
    </div>
  );
}
