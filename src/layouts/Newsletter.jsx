import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };
  return (
    <section className="py-10 px-5 md:px-20">
      <div className="bg-primary flex flex-col md:flex-row items-center justify-center p-8 rounded-2xl gap-10">
        <h1 className="text-white text-xl font-bold">
          Get Our Best Deals Straight to Your Inbox!
        </h1>

        <div className="flex items-center justify-center">
          <form
            onSubmit={handleSubmit}
            className="flex items-center bg-white rounded-2xl overflow-hidden max-w-xl"
          >
            <input
              type="email"
              placeholder="Enter Your Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-20 py-4 outline-none text-gray-700"
              required
            />

            <button
              type="submit"
              className="bg-[#4db6c6] hover:bg-[#3da5b4] text-white px-8 py-4 font-semibold rounded-2xl transition"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
