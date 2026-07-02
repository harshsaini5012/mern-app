import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="bg-white rounded-2xl shadow-md p-10 text-center max-w-md w-full">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">MERN App</h1>
        <p className="text-gray-500 mb-8">Manage your users easily</p>
        <div className="flex gap-4 justify-center">
          <Link
            to="/login"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
