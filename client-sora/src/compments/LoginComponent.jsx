import { useState } from "react";

function LoginComponent() {
  const [showPassword, setShowPassword] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [formData, setFormData] = useState({
    lastname: "",
    firstname: "",
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:3200/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, birthday: selectedDate }),
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        console.error("Error submitting form:", errorMessage);
        throw new Error("Failed to submit form");
      }
      // Handle success (e.g., show a success message)
      const responseData = await response.json();
      console.log("Form submitted successfully:", responseData);
    } catch (error) {
      // Handle errors (e.g., show an error message)
      console.error("Error submitting form:", error.message);
    }
  };

  return (
    <>
      <section className="min-w-fit max-w-sm flex-col border bg-white px-6 py-14 shadow-md rounded-2xl">
        <form
          className="flex flex-col text-sm p-3 rounded-md"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl mb-8 text-center">Sign up</h2>
          {/* name Input */}
          <label htmlFor="lastname"></label>
          <input
            id="lastname"
            name="lastname"
            className="mb-5 rounded-lg border p-3 hover:outline-none focus:outline-none hover:border-indigo-950"
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={handleInputChange}
          />
          {/* firstname Input */}
          <label htmlFor="firstname"></label>
          <input
            id="firstname"
            name="firstname"
            className="mb-5 rounded-lg border p-3 hover:outline-none focus:outline-none hover:border-indigo-950"
            type="text"
            placeholder="Firstname"
            value={formData.firstname}
            onChange={handleInputChange}
          />
          {/* Email Input */}
          <label htmlFor="email"></label>
          <input
            id="email"
            name="email"
            className="mb-5 rounded-lg border p-3 hover:outline-none focus:outline-none hover:border-indigo-950"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
          />
          {/* Password Input */}
          <fieldset className="relative mb-5">
            <label htmlFor="password"></label>
            <input
              id="password"
              name="password"
              className="w-full rounded-lg border p-3 hover:outline-none focus:outline-none hover:border-indigo-950"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
            />
            <button
              className="absolute right-3 top-3 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                /* SVG for hide password */
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                  />
                </svg>
              ) : (
                /* SVG for show password */
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              )}
            </button>
          </fieldset>
          {/* Date Input */}
          <label htmlFor="birthdate">Date of birth</label>
          <input
            name="birthday"
            className="mb-5 rounded-lg border p-3 hover:outline-none focus:outline-none hover:border-indigo-950"
            type="date"
            value={selectedDate}
            onChange={handleDateChange}
          />
          {/* Sign up Button */}
          <button
            className="rounded-lg border p-3 bg-gradient-to-r from-gray-800 bg-indigo-950 text-white hover:bg-slate-400 duration-300"
            type="submit"
          >
            Sign up
          </button>
        </form>
        <p className="flex justify-center text-sm text-gray-600">
          Already have an account?
          <a className="text-blue-500" href="#">
            Log in?
          </a>
        </p>

        <p className="mt-5 row-span-2 text-center text-sm text-gray-400">
          By signing up to create an account I accept<br></br>
          Company's
          <a className="text-blue-500" href="">
            Terms of Use and Privacy Policy.
          </a>
        </p>
      </section>
    </>
  );
}

export default LoginComponent;
