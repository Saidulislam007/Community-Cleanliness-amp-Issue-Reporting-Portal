import { useState } from "react";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebase";
import { toast } from "react-hot-toast";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Login successful!");
      navigate("/");
    } catch (err) {
      toast.error(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      toast.success("Login with Google successful!");
      navigate("/");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="hero min-h-screen bg-amber-50">
      <div className="hero-content flex-col lg:flex-row-reverse gap-10">
        {/* Left Side: Info */}
        <div className="text-center lg:text-left max-w-md">
          <h1 className="text-5xl text-gray-700 font-bold mb-4">Login now!</h1>
          <p className="py-4 text-gray-700">
            Welcome back! Please login with your credentials to access the Community Clean Portal.
          </p>
        </div>

        {/* Right Side: Login Card */}
        <div className="card w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body max-w-md  m-10">
            <form onSubmit={handleSubmit} className="flex flex-col max-w-md  gap-4">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered w-full"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="submit"
                className="btn btn-neutral mt-2 w-full"
              >
                Login
              </button>
            </form>

            {/* Divider */}
            <div className="divider">OR</div>

            {/* Google Login */}
            <button
              onClick={handleGoogleLogin}
              className="btn btn-outline btn-white w-full flex items-center justify-center gap-2"
            >
              <svg
                aria-label="Google logo"
                width="20"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M0 0h512v512H0z" fill="#fff" />
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                />
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                />
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                />
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                />
              </svg>
              Login with Google
            </button>

            <p className="mt-4 text-center text-sm">
              Don't have an account?{" "}
              <Link to="/register" className="text-blue-500 hover:underline">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
