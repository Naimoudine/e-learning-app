import { useState } from "react";
import { useNavigate, useNavigation } from "react-router-dom";

export default function UserForm() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();
  const navigation = useNavigation();

  const isSubmitting = navigation.state === "submitting";

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const firstname = formData.get("firstname");
    const lastname = formData.get("lastname");
    const email = formData.get("email");
    const confirmedPassword = formData.get("confirm");

    if (password === confirmPassword) {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/signup`, {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            firstname,
            lastname,
            email,
            password: confirmedPassword,
            role: "user",
          }),
        });

        const data = await response.json();

        if (response.status !== 201) {
          throw new Error(data.message || "Unknown error while signing up");
        }

        return navigate("/signin");
      } catch (error) {
        throw new Error(error.message);
      }
    }

    return undefined;
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[16rem] md:w-[24rem] mt-8 flex flex-col gap-4"
    >
      <input
        className="form-input"
        type="firstname"
        name="firstname"
        placeholder="Enter firstname"
        required
      />
      <input
        className="form-input"
        type="lastname"
        name="lastname"
        placeholder="Enter lastname"
        required
      />
      <input
        className="form-input"
        type="email"
        name="email"
        placeholder="Enter email"
        required
      />
      <input
        className="form-input"
        type="password"
        name="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <input
        className="form-input"
        type="password"
        name="confirm"
        placeholder="Confirm password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
      />
      <button
        className="form-btn disabled:bg-gray-200"
        type="submit"
        disabled={password !== confirmPassword || isSubmitting}
      >
        sign up
      </button>
    </form>
  );
}
