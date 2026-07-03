// import { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const API = "https://mern-backend-3on1.onrender.com/api/users";

// function Dashboard() {
//   const [users, setUsers] = useState([]);
//   const [form, setForm] = useState({ name: "", email: "", password: "" });
//   const [editId, setEditId] = useState(null);
//   const [message, setMessage] = useState("");
//   const navigate = useNavigate();

//   const user = JSON.parse(localStorage.getItem("user") || "{}");

//   const fetchUsers = async () => {
//     const { data } = await axios.get(API);
//     setUsers(data);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (editId) {
//         await axios.put(`${API}/${editId}`, form);
//         setMessage("User updated!");
//         setEditId(null);
//       } else {
//         await axios.post(API, form);
//         setMessage("User added!");
//       }
//       setForm({ name: "", email: "", password: "" });
//       fetchUsers();
//     } catch (err) {
//       setMessage(err.response?.data?.message || "Something went wrong");
//     }
//   };

//   const handleDelete = async (id) => {
//     if (!window.confirm("Delete this user?")) return;
//     await axios.delete(`${API}/${id}`);
//     setMessage("User deleted!");
//     fetchUsers();
//   };

//   const handleEdit = (u) => {
//     setEditId(u._id);
//     setForm({ name: u.name, email: u.email, password: "" });
//     setMessage("");
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("user");
//     navigate("/");
//   };

//   useEffect(() => {
//     if (!localStorage.getItem("token")) navigate("/");
//     fetchUsers();
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-100 py-10 px-4">
//       <div className="max-w-lg mx-auto">
//         {/* Navbar */}
//         <div className="flex justify-between items-center bg-white rounded-2xl shadow px-6 py-4 mb-6">
//           <h1 className="text-xl font-bold text-blue-600">
//             👋 Welcome, {user.name}
//           </h1>
//           <button
//             onClick={handleLogout}
//             className="bg-red-500 text-white px-4 py-1 rounded-lg hover:bg-red-600 transition text-sm"
//           >
//             Logout
//           </button>
//         </div>

//         {/* Form */}
//         <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
//           <h2 className="text-lg font-semibold mb-4">
//             {editId ? "✏️ Edit User" : "➕ Add User"}
//           </h2>

//           {message && <p className="text-green-600 mb-3">{message}</p>}

//           <form onSubmit={handleSubmit} className="space-y-3">
//             <input
//               className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
//               placeholder="Name"
//               value={form.name}
//               onChange={(e) => setForm({ ...form, name: e.target.value })}
//               required
//             />
//             <input
//               className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
//               placeholder="Email"
//               value={form.email}
//               onChange={(e) => setForm({ ...form, email: e.target.value })}
//               required
//             />
//             <input
//               className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
//               placeholder="Password"
//               type="password"
//               value={form.password}
//               onChange={(e) => setForm({ ...form, password: e.target.value })}
//             />
//             <div className="flex gap-3">
//               <button
//                 type="submit"
//                 className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
//               >
//                 {editId ? "Update" : "Add User"}
//               </button>
//               {editId && (
//                 <button
//                   type="button"
//                   onClick={() => {
//                     setEditId(null);
//                     setForm({ name: "", email: "", password: "" });
//                   }}
//                   className="flex-1 bg-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-400 transition"
//                 >
//                   Cancel
//                 </button>
//               )}
//             </div>
//           </form>
//         </div>

//         {/* Users List */}
//         <div className="bg-white rounded-2xl shadow-md p-6">
//           <h2 className="text-lg font-semibold mb-4">👥 All Users</h2>
//           {users.length === 0 && (
//             <p className="text-gray-400 text-center">No users found.</p>
//           )}
//           <div className="space-y-3">
//             {users.map((u) => (
//               <div
//                 key={u._id}
//                 className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-xl px-4 py-3"
//               >
//                 <div>
//                   <p className="font-semibold text-gray-800">{u.name}</p>
//                   <p className="text-sm text-gray-500">{u.email}</p>
//                 </div>
//                 <div className="flex gap-2">
//                   <button
//                     onClick={() => handleEdit(u)}
//                     className="bg-yellow-400 text-white px-3 py-1 rounded-lg text-sm hover:bg-yellow-500 transition"
//                   >
//                     Edit
//                   </button>
//                   <button
//                     onClick={() => handleDelete(u._id)}
//                     className="bg-red-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-red-600 transition"
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;

import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API = "https://mern-backend-3on1.onrender.com/api/users";

function Dashboard() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [editId, setEditId] = useState(null);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const token = localStorage.getItem("token");
  const isAdmin = user.role === "admin";

  const authHeaders = { headers: { Authorization: `Bearer ${token}` } };

  const fetchUsers = async () => {
    try {
      const { data } = await axios.get(API, authHeaders);
      setUsers(data);
    } catch {
      setMessage("Access denied — admins only");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editId) {
        await axios.put(`${API}/${editId}`, form, authHeaders);
        setMessage("User updated!");
        setEditId(null);
      } else {
        await axios.post(API, form);
        setMessage("User added!");
      }
      setForm({ name: "", email: "", password: "" });
      fetchUsers();
    } catch (err) {
      setMessage(err.response?.data?.message || "Something went wrong");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this user?")) return;
    await axios.delete(`${API}/${id}`, authHeaders);
    setMessage("User deleted!");
    fetchUsers();
  };

  const handleEdit = (u) => {
    setEditId(u._id);
    setForm({ name: u.name, email: u.email, password: "" });
    setMessage("");
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  useEffect(() => {
    if (!token) navigate("/");
    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-lg mx-auto">
        {/* Navbar */}
        <div className="flex justify-between items-center bg-white rounded-2xl shadow px-6 py-4 mb-6">
          <div>
            <h1 className="text-xl font-bold text-blue-600">👋 {user.name}</h1>
            <span
              className={`text-xs px-2 py-1 rounded-full font-medium ${isAdmin ? "bg-red-100 text-red-600" : "bg-green-100 text-green-600"}`}
            >
              {isAdmin ? "👑 Admin" : "👤 User"}
            </span>
          </div>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-1 rounded-lg hover:bg-red-600 transition text-sm"
          >
            Logout
          </button>
        </div>

        {/* Admin only form */}
        {isAdmin && (
          <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
            <h2 className="text-lg font-semibold mb-4">
              {editId ? "✏️ Edit User" : "➕ Add User"}
            </h2>
            {message && <p className="text-green-600 mb-3">{message}</p>}
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
              <input
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
              <input
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Password"
                type="password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
              />
              <div className="flex gap-3">
                <button
                  type="submit"
                  className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  {editId ? "Update" : "Add User"}
                </button>
                {editId && (
                  <button
                    type="button"
                    onClick={() => {
                      setEditId(null);
                      setForm({ name: "", email: "", password: "" });
                    }}
                    className="flex-1 bg-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-400 transition"
                  >
                    Cancel
                  </button>
                )}
              </div>
            </form>
          </div>
        )}

        {/* Users list — admin sees all, user sees message */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-lg font-semibold mb-4">
            👥 {isAdmin ? "All Users" : "Your Profile"}
          </h2>

          {!isAdmin && (
            <div className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3">
              <p className="font-semibold text-gray-800">{user.name}</p>
              <p className="text-sm text-gray-500">{user.email}</p>
              <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full mt-1 inline-block">
                User
              </span>
            </div>
          )}

          {isAdmin && (
            <div className="space-y-3">
              {users.length === 0 && (
                <p className="text-gray-400 text-center">No users found.</p>
              )}
              {users.map((u) => (
                <div
                  key={u._id}
                  className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-xl px-4 py-3"
                >
                  <div>
                    <p className="font-semibold text-gray-800">{u.name}</p>
                    <p className="text-sm text-gray-500">{u.email}</p>
                    <span
                      className={`text-xs px-2 py-1 rounded-full mt-1 inline-block ${u.role === "admin" ? "bg-red-100 text-red-600" : "bg-green-100 text-green-600"}`}
                    >
                      {u.role === "admin" ? "👑 Admin" : "👤 User"}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(u)}
                      className="bg-yellow-400 text-white px-3 py-1 rounded-lg text-sm hover:bg-yellow-500 transition"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(u._id)}
                      className="bg-red-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-red-600 transition"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
