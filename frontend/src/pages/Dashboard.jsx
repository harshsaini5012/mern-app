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
//   const token = localStorage.getItem("token");
//   const isAdmin = user.role === "admin";

//   const authHeaders = { headers: { Authorization: `Bearer ${token}` } };

//   const fetchUsers = async () => {
//     try {
//       const { data } = await axios.get(API, authHeaders);
//       setUsers(data);
//     } catch {
//       setMessage("Access denied — admins only");
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (editId) {
//         await axios.put(`${API}/${editId}`, form, authHeaders);
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
//     await axios.delete(`${API}/${id}`, authHeaders);
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
//     if (!token) navigate("/");
//     fetchUsers();
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-100 py-10 px-4">
//       <div className="max-w-lg mx-auto">
//         {/* Navbar */}
//         <div className="flex justify-between items-center bg-white rounded-2xl shadow px-6 py-4 mb-6">
//           <div>
//             <h1 className="text-xl font-bold text-blue-600">👋 {user.name}</h1>
//             <span
//               className={`text-xs px-2 py-1 rounded-full font-medium ${isAdmin ? "bg-red-100 text-red-600" : "bg-green-100 text-green-600"}`}
//             >
//               {isAdmin ? "👑 Admin" : "👤 User"}
//             </span>
//           </div>
//           <button
//             onClick={handleLogout}
//             className="bg-red-500 text-white px-4 py-1 rounded-lg hover:bg-red-600 transition text-sm"
//           >
//             Logout
//           </button>
//         </div>

//         {/* Admin only form */}
//         {isAdmin && (
//           <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
//             <h2 className="text-lg font-semibold mb-4">
//               {editId ? "✏️ Edit User" : "➕ Add User"}
//             </h2>
//             {message && <p className="text-green-600 mb-3">{message}</p>}
//             <form onSubmit={handleSubmit} className="space-y-3">
//               <input
//                 className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 placeholder="Name"
//                 value={form.name}
//                 onChange={(e) => setForm({ ...form, name: e.target.value })}
//                 required
//               />
//               <input
//                 className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 placeholder="Email"
//                 value={form.email}
//                 onChange={(e) => setForm({ ...form, email: e.target.value })}
//                 required
//               />
//               <input
//                 className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 placeholder="Password"
//                 type="password"
//                 value={form.password}
//                 onChange={(e) => setForm({ ...form, password: e.target.value })}
//               />
//               <div className="flex gap-3">
//                 <button
//                   type="submit"
//                   className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
//                 >
//                   {editId ? "Update" : "Add User"}
//                 </button>
//                 {editId && (
//                   <button
//                     type="button"
//                     onClick={() => {
//                       setEditId(null);
//                       setForm({ name: "", email: "", password: "" });
//                     }}
//                     className="flex-1 bg-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-400 transition"
//                   >
//                     Cancel
//                   </button>
//                 )}
//               </div>
//             </form>
//           </div>
//         )}

//         {/* Users list — admin sees all, user sees message */}
//         <div className="bg-white rounded-2xl shadow-md p-6">
//           <h2 className="text-lg font-semibold mb-4">
//             👥 {isAdmin ? "All Users" : "Your Profile"}
//           </h2>

//           {!isAdmin && (
//             <div className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3">
//               <p className="font-semibold text-gray-800">{user.name}</p>
//               <p className="text-sm text-gray-500">{user.email}</p>
//               <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full mt-1 inline-block">
//                 User
//               </span>
//             </div>
//           )}

//           {isAdmin && (
//             <div className="space-y-3">
//               {users.length === 0 && (
//                 <p className="text-gray-400 text-center">No users found.</p>
//               )}
//               {users.map((u) => (
//                 <div
//                   key={u._id}
//                   className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-xl px-4 py-3"
//                 >
//                   <div>
//                     <p className="font-semibold text-gray-800">{u.name}</p>
//                     <p className="text-sm text-gray-500">{u.email}</p>
//                     <span
//                       className={`text-xs px-2 py-1 rounded-full mt-1 inline-block ${u.role === "admin" ? "bg-red-100 text-red-600" : "bg-green-100 text-green-600"}`}
//                     >
//                       {u.role === "admin" ? "👑 Admin" : "👤 User"}
//                     </span>
//                   </div>
//                   <div className="flex gap-2">
//                     <button
//                       onClick={() => handleEdit(u)}
//                       className="bg-yellow-400 text-white px-3 py-1 rounded-lg text-sm hover:bg-yellow-500 transition"
//                     >
//                       Edit
//                     </button>
//                     <button
//                       onClick={() => handleDelete(u._id)}
//                       className="bg-red-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-red-600 transition"
//                     >
//                       Delete
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;

// import { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const API = "https://mern-backend-3on1.onrender.com/api/users";

// function Dashboard() {
//   const [users, setUsers] = useState([]);
//   const [form, setForm] = useState({ name: "", email: "", password: "" });
//   const [editId, setEditId] = useState(null);
//   const [message, setMessage] = useState("");
//   const [search, setSearch] = useState("");
//   const [page, setPage] = useState(1);
//   const [darkMode, setDarkMode] = useState(false);
//   const usersPerPage = 5;
//   const navigate = useNavigate();

//   const user = JSON.parse(localStorage.getItem("user") || "{}");
//   const token = localStorage.getItem("token");
//   const isAdmin = user.role === "admin";
//   const authHeaders = { headers: { Authorization: `Bearer ${token}` } };

//   const fetchUsers = async () => {
//     try {
//       const { data } = await axios.get(API, authHeaders);
//       setUsers(data);
//     } catch {
//       setMessage("Access denied");
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (editId) {
//         await axios.put(`${API}/${editId}`, form, authHeaders);
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
//     await axios.delete(`${API}/${id}`, authHeaders);
//     setMessage("User deleted!");
//     fetchUsers();
//   };

//   const handleEdit = (u) => {
//     setEditId(u._id);
//     setForm({ name: u.name, email: u.email, password: "" });
//     setMessage("");
//     window.scrollTo(0, 0);
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("user");
//     navigate("/");
//   };

//   useEffect(() => {
//     if (!token) navigate("/");
//     fetchUsers();
//   }, []);

//   // Search filter
//   const filtered = users.filter(
//     (u) =>
//       u.name.toLowerCase().includes(search.toLowerCase()) ||
//       u.email.toLowerCase().includes(search.toLowerCase()),
//   );

//   // Pagination
//   const totalPages = Math.ceil(filtered.length / usersPerPage);
//   const paginated = filtered.slice(
//     (page - 1) * usersPerPage,
//     page * usersPerPage,
//   );

//   const bg = darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900";
//   const card = darkMode
//     ? "bg-gray-800 border-gray-700"
//     : "bg-white border-gray-200";
//   const input = darkMode
//     ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
//     : "bg-white border-gray-300 text-gray-900";

//   return (
//     <div className={`min-h-screen ${bg} py-6 px-4 transition-all duration-300`}>
//       <div className="max-w-2xl mx-auto space-y-6">
//         {/* Navbar */}
//         <div
//           className={`flex justify-between items-center ${card} rounded-2xl shadow px-6 py-4`}
//         >
//           <div>
//             <h1 className="text-2xl font-bold text-blue-500">MERN App</h1>
//             <div className="flex items-center gap-2 mt-1">
//               <span className="text-sm font-medium">{user.name}</span>
//               <span
//                 className={`text-xs px-2 py-0.5 rounded-full font-semibold ${isAdmin ? "bg-red-100 text-red-600" : "bg-green-100 text-green-600"}`}
//               >
//                 {isAdmin ? "👑 Admin" : "👤 User"}
//               </span>
//             </div>
//           </div>
//           <div className="flex items-center gap-3">
//             <button
//               onClick={() => setDarkMode(!darkMode)}
//               className="text-xl p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition"
//             >
//               {darkMode ? "☀️" : "🌙"}
//             </button>
//             <button
//               onClick={handleLogout}
//               className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition text-sm font-medium"
//             >
//               Logout
//             </button>
//           </div>
//         </div>

//         {/* Stats (Admin only) */}
//         {isAdmin && (
//           <div className="grid grid-cols-3 gap-4">
//             <div className={`${card} rounded-2xl shadow p-4 text-center`}>
//               <p className="text-3xl font-bold text-blue-500">{users.length}</p>
//               <p className="text-sm text-gray-500 mt-1">Total Users</p>
//             </div>
//             <div className={`${card} rounded-2xl shadow p-4 text-center`}>
//               <p className="text-3xl font-bold text-red-500">
//                 {users.filter((u) => u.role === "admin").length}
//               </p>
//               <p className="text-sm text-gray-500 mt-1">Admins</p>
//             </div>
//             <div className={`${card} rounded-2xl shadow p-4 text-center`}>
//               <p className="text-3xl font-bold text-green-500">
//                 {users.filter((u) => u.role === "user").length}
//               </p>
//               <p className="text-sm text-gray-500 mt-1">Users</p>
//             </div>
//           </div>
//         )}

//         {/* Add/Edit Form (Admin only) */}
//         {isAdmin && (
//           <div className={`${card} rounded-2xl shadow p-6`}>
//             <h2 className="text-lg font-semibold mb-4">
//               {editId ? "✏️ Edit User" : "➕ Add User"}
//             </h2>
//             {message && (
//               <p
//                 className={`mb-3 text-sm font-medium px-3 py-2 rounded-lg ${message.includes("deleted") || message.includes("wrong") || message.includes("denied") ? "bg-red-100 text-red-600" : "bg-green-100 text-green-600"}`}
//               >
//                 {message}
//               </p>
//             )}
//             <form onSubmit={handleSubmit} className="space-y-3">
//               <input
//                 className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 ${input}`}
//                 placeholder="Name"
//                 value={form.name}
//                 onChange={(e) => setForm({ ...form, name: e.target.value })}
//                 required
//               />
//               <input
//                 className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 ${input}`}
//                 placeholder="Email"
//                 value={form.email}
//                 onChange={(e) => setForm({ ...form, email: e.target.value })}
//                 required
//               />
//               <input
//                 className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 ${input}`}
//                 placeholder="Password"
//                 type="password"
//                 value={form.password}
//                 onChange={(e) => setForm({ ...form, password: e.target.value })}
//               />
//               <div className="flex gap-3">
//                 <button
//                   type="submit"
//                   className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-medium"
//                 >
//                   {editId ? "Update User" : "Add User"}
//                 </button>
//                 {editId && (
//                   <button
//                     type="button"
//                     onClick={() => {
//                       setEditId(null);
//                       setForm({ name: "", email: "", password: "" });
//                       setMessage("");
//                     }}
//                     className="flex-1 bg-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-400 transition font-medium"
//                   >
//                     Cancel
//                   </button>
//                 )}
//               </div>
//             </form>
//           </div>
//         )}

//         {/* User Profile (non-admin) */}
//         {!isAdmin && (
//           <div className={`${card} rounded-2xl shadow p-6`}>
//             <h2 className="text-lg font-semibold mb-4">👤 Your Profile</h2>
//             <div className="flex items-center gap-4">
//               <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center text-white text-2xl font-bold">
//                 {user.name?.charAt(0).toUpperCase()}
//               </div>
//               <div>
//                 <p className="text-xl font-bold">{user.name}</p>
//                 <p className="text-gray-500">{user.email}</p>
//                 <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full mt-1 inline-block font-medium">
//                   👤 User
//                 </span>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Users List (Admin only) */}
//         {isAdmin && (
//           <div className={`${card} rounded-2xl shadow p-6`}>
//             <div className="flex justify-between items-center mb-4">
//               <h2 className="text-lg font-semibold">👥 All Users</h2>
//               <span className="text-sm text-gray-500">
//                 {filtered.length} found
//               </span>
//             </div>

//             {/* Search */}
//             <input
//               className={`w-full border rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400 ${input}`}
//               placeholder="🔍 Search by name or email..."
//               value={search}
//               onChange={(e) => {
//                 setSearch(e.target.value);
//                 setPage(1);
//               }}
//             />

//             {paginated.length === 0 && (
//               <p className="text-gray-400 text-center py-4">No users found.</p>
//             )}

//             <div className="space-y-3">
//               {paginated.map((u) => (
//                 <div
//                   key={u._id}
//                   className={`flex items-center justify-between border rounded-xl px-4 py-3 ${darkMode ? "bg-gray-700 border-gray-600" : "bg-gray-50 border-gray-200"}`}
//                 >
//                   <div className="flex items-center gap-3">
//                     <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
//                       {u.name?.charAt(0).toUpperCase()}
//                     </div>
//                     <div>
//                       <p className="font-semibold">{u.name}</p>
//                       <p className="text-sm text-gray-500">{u.email}</p>
//                       <span
//                         className={`text-xs px-2 py-0.5 rounded-full font-medium ${u.role === "admin" ? "bg-red-100 text-red-600" : "bg-green-100 text-green-600"}`}
//                       >
//                         {u.role === "admin" ? "👑 Admin" : "👤 User"}
//                       </span>
//                     </div>
//                   </div>
//                   <div className="flex gap-2">
//                     <button
//                       onClick={() => handleEdit(u)}
//                       className="bg-yellow-400 text-white px-3 py-1 rounded-lg text-sm hover:bg-yellow-500 transition"
//                     >
//                       Edit
//                     </button>
//                     <button
//                       onClick={() => handleDelete(u._id)}
//                       className="bg-red-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-red-600 transition"
//                     >
//                       Delete
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Pagination */}
//             {totalPages > 1 && (
//               <div className="flex justify-center gap-2 mt-4">
//                 <button
//                   onClick={() => setPage((p) => Math.max(1, p - 1))}
//                   disabled={page === 1}
//                   className="px-3 py-1 rounded-lg bg-gray-200 hover:bg-gray-300 disabled:opacity-40 text-sm"
//                 >
//                   ← Prev
//                 </button>
//                 {[...Array(totalPages)].map((_, i) => (
//                   <button
//                     key={i}
//                     onClick={() => setPage(i + 1)}
//                     className={`px-3 py-1 rounded-lg text-sm ${page === i + 1 ? "bg-blue-600 text-white" : "bg-gray-200 hover:bg-gray-300"}`}
//                   >
//                     {i + 1}
//                   </button>
//                 ))}
//                 <button
//                   onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
//                   disabled={page === totalPages}
//                   className="px-3 py-1 rounded-lg bg-gray-200 hover:bg-gray-300 disabled:opacity-40 text-sm"
//                 >
//                   Next →
//                 </button>
//               </div>
//             )}
//           </div>
//         )}
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
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [darkMode, setDarkMode] = useState(false);
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [passwordForm, setPasswordForm] = useState({
    currentPassword: "",
    newPassword: "",
  });
  const [passwordMsg, setPasswordMsg] = useState("");
  const usersPerPage = 5;
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
      setMessage("Access denied");
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
    window.scrollTo(0, 0);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `${API}/${user._id}/change-password`,
        passwordForm,
        authHeaders,
      );
      setPasswordMsg("Password changed successfully!");
      setPasswordForm({ currentPassword: "", newPassword: "" });
      setShowPasswordForm(false);
    } catch (err) {
      setPasswordMsg(err.response?.data?.message || "Something went wrong");
    }
  };

  const handlePhotoUpload = async (e) => {
    const formData = new FormData();
    formData.append("photo", e.target.files[0]);
    try {
      const { data } = await axios.put(
        `${API}/${user._id}/upload-photo`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        },
      );
      const updatedUser = { ...user, photo: data.photo };
      localStorage.setItem("user", JSON.stringify(updatedUser));
      window.location.reload();
    } catch {
      alert("Upload failed");
    }
  };

  useEffect(() => {
    if (!token) navigate("/");
    fetchUsers();
  }, []);

  const filtered = users.filter(
    (u) =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase()),
  );

  const totalPages = Math.ceil(filtered.length / usersPerPage);
  const paginated = filtered.slice(
    (page - 1) * usersPerPage,
    page * usersPerPage,
  );

  const bg = darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900";
  const card = darkMode
    ? "bg-gray-800 border-gray-700"
    : "bg-white border-gray-200";
  const input = darkMode
    ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
    : "bg-white border-gray-300 text-gray-900";

  return (
    <div className={`min-h-screen ${bg} py-6 px-4 transition-all duration-300`}>
      <div className="max-w-2xl mx-auto space-y-6">
        {/* Navbar */}
        <div
          className={`flex justify-between items-center ${card} rounded-2xl shadow px-6 py-4`}
        >
          <div>
            <h1 className="text-2xl font-bold text-blue-500">MERN App</h1>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-sm font-medium">{user.name}</span>
              <span
                className={`text-xs px-2 py-0.5 rounded-full font-semibold ${isAdmin ? "bg-red-100 text-red-600" : "bg-green-100 text-green-600"}`}
              >
                {isAdmin ? "👑 Admin" : "👤 User"}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="text-xl p-2 rounded-lg hover:bg-gray-200 transition"
            >
              {darkMode ? "☀️" : "🌙"}
            </button>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition text-sm font-medium"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Stats (Admin only) */}
        {isAdmin && (
          <div className="grid grid-cols-3 gap-4">
            <div className={`${card} rounded-2xl shadow p-4 text-center`}>
              <p className="text-3xl font-bold text-blue-500">{users.length}</p>
              <p className="text-sm text-gray-500 mt-1">Total Users</p>
            </div>
            <div className={`${card} rounded-2xl shadow p-4 text-center`}>
              <p className="text-3xl font-bold text-red-500">
                {users.filter((u) => u.role === "admin").length}
              </p>
              <p className="text-sm text-gray-500 mt-1">Admins</p>
            </div>
            <div className={`${card} rounded-2xl shadow p-4 text-center`}>
              <p className="text-3xl font-bold text-green-500">
                {users.filter((u) => u.role === "user").length}
              </p>
              <p className="text-sm text-gray-500 mt-1">Users</p>
            </div>
          </div>
        )}

        {/* Add/Edit Form (Admin only) */}
        {isAdmin && (
          <div className={`${card} rounded-2xl shadow p-6`}>
            <h2 className="text-lg font-semibold mb-4">
              {editId ? "✏️ Edit User" : "➕ Add User"}
            </h2>
            {message && (
              <p
                className={`mb-3 text-sm font-medium px-3 py-2 rounded-lg ${message.includes("deleted") || message.includes("wrong") || message.includes("denied") ? "bg-red-100 text-red-600" : "bg-green-100 text-green-600"}`}
              >
                {message}
              </p>
            )}
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 ${input}`}
                placeholder="Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
              <input
                className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 ${input}`}
                placeholder="Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
              <input
                className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 ${input}`}
                placeholder="Password"
                type="password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
              />
              <div className="flex gap-3">
                <button
                  type="submit"
                  className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-medium"
                >
                  {editId ? "Update User" : "Add User"}
                </button>
                {editId && (
                  <button
                    type="button"
                    onClick={() => {
                      setEditId(null);
                      setForm({ name: "", email: "", password: "" });
                      setMessage("");
                    }}
                    className="flex-1 bg-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-400 transition font-medium"
                  >
                    Cancel
                  </button>
                )}
              </div>
            </form>
          </div>
        )}

        {/* User Profile (non-admin) */}
        {!isAdmin && (
          <div className={`${card} rounded-2xl shadow p-6`}>
            <h2 className="text-lg font-semibold mb-4">👤 Your Profile</h2>
            <div className="flex items-center gap-4 mb-4">
              {/* Profile Photo */}
              <div className="relative">
                {user.photo ? (
                  <img
                    src={user.photo}
                    alt="profile"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center text-white text-2xl font-bold">
                    {user.name?.charAt(0).toUpperCase()}
                  </div>
                )}
                <label className="absolute bottom-0 right-0 bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center cursor-pointer text-xs hover:bg-blue-700">
                  +
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handlePhotoUpload}
                  />
                </label>
              </div>

              <div>
                <p className="text-xl font-bold">{user.name}</p>
                <p className="text-gray-500">{user.email}</p>
                <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full mt-1 inline-block font-medium">
                  👤 User
                </span>
              </div>
            </div>

            {passwordMsg && (
              <p
                className={`mb-3 text-sm font-medium px-3 py-2 rounded-lg ${passwordMsg.includes("success") ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"}`}
              >
                {passwordMsg}
              </p>
            )}

            <button
              onClick={() => setShowPasswordForm(!showPasswordForm)}
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-medium mb-3"
            >
              {showPasswordForm ? "Cancel" : "🔑 Change Password"}
            </button>

            {showPasswordForm && (
              <form onSubmit={handlePasswordChange} className="space-y-3">
                <input
                  className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 ${input}`}
                  placeholder="Current Password"
                  type="password"
                  value={passwordForm.currentPassword}
                  onChange={(e) =>
                    setPasswordForm({
                      ...passwordForm,
                      currentPassword: e.target.value,
                    })
                  }
                  required
                />
                <input
                  className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 ${input}`}
                  placeholder="New Password"
                  type="password"
                  value={passwordForm.newPassword}
                  onChange={(e) =>
                    setPasswordForm({
                      ...passwordForm,
                      newPassword: e.target.value,
                    })
                  }
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition font-medium"
                >
                  Update Password
                </button>
              </form>
            )}
          </div>
        )}

        {/* Users List (Admin only) */}
        {isAdmin && (
          <div className={`${card} rounded-2xl shadow p-6`}>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">👥 All Users</h2>
              <span className="text-sm text-gray-500">
                {filtered.length} found
              </span>
            </div>

            <input
              className={`w-full border rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400 ${input}`}
              placeholder="🔍 Search by name or email..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setPage(1);
              }}
            />

            {paginated.length === 0 && (
              <p className="text-gray-400 text-center py-4">No users found.</p>
            )}

            <div className="space-y-3">
              {paginated.map((u) => (
                <div
                  key={u._id}
                  className={`flex items-center justify-between border rounded-xl px-4 py-3 ${darkMode ? "bg-gray-700 border-gray-600" : "bg-gray-50 border-gray-200"}`}
                >
                  <div className="flex items-center gap-3">
                    {u.photo ? (
                      <img
                        src={u.photo}
                        alt="profile"
                        className="w-10 h-10 rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                        {u.name?.charAt(0).toUpperCase()}
                      </div>
                    )}
                    <div>
                      <p className="font-semibold">{u.name}</p>
                      <p className="text-sm text-gray-500">{u.email}</p>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full font-medium ${u.role === "admin" ? "bg-red-100 text-red-600" : "bg-green-100 text-green-600"}`}
                      >
                        {u.role === "admin" ? "👑 Admin" : "👤 User"}
                      </span>
                    </div>
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

            {totalPages > 1 && (
              <div className="flex justify-center gap-2 mt-4">
                <button
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page === 1}
                  className="px-3 py-1 rounded-lg bg-gray-200 hover:bg-gray-300 disabled:opacity-40 text-sm"
                >
                  ← Prev
                </button>
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setPage(i + 1)}
                    className={`px-3 py-1 rounded-lg text-sm ${page === i + 1 ? "bg-blue-600 text-white" : "bg-gray-200 hover:bg-gray-300"}`}
                  >
                    {i + 1}
                  </button>
                ))}
                <button
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={page === totalPages}
                  className="px-3 py-1 rounded-lg bg-gray-200 hover:bg-gray-300 disabled:opacity-40 text-sm"
                >
                  Next →
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
