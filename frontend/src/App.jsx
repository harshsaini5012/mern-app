// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <section id="center">
//         <div className="hero">
//           <img src={heroImg} className="base" width="170" height="179" alt="" />
//           <img src={reactLogo} className="framework" alt="React logo" />
//           <img src={viteLogo} className="vite" alt="Vite logo" />
//         </div>
//         <div>
//           <h1>Get started</h1>
//           <p>
//             Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
//           </p>
//         </div>
//         <button
//           type="button"
//           className="counter"
//           onClick={() => setCount((count) => count + 1)}
//         >
//           Count is {count}
//         </button>
//       </section>

//       <div className="ticks"></div>

//       <section id="next-steps">
//         <div id="docs">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#documentation-icon"></use>
//           </svg>
//           <h2>Documentation</h2>
//           <p>Your questions, answered</p>
//           <ul>
//             <li>
//               <a href="https://vite.dev/" target="_blank">
//                 <img className="logo" src={viteLogo} alt="" />
//                 Explore Vite
//               </a>
//             </li>
//             <li>
//               <a href="https://react.dev/" target="_blank">
//                 <img className="button-icon" src={reactLogo} alt="" />
//                 Learn more
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div id="social">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#social-icon"></use>
//           </svg>
//           <h2>Connect with us</h2>
//           <p>Join the Vite community</p>
//           <ul>
//             <li>
//               <a href="https://github.com/vitejs/vite" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#github-icon"></use>
//                 </svg>
//                 GitHub
//               </a>
//             </li>
//             <li>
//               <a href="https://chat.vite.dev/" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#discord-icon"></use>
//                 </svg>
//                 Discord
//               </a>
//             </li>
//             <li>
//               <a href="https://x.com/vite_js" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#x-icon"></use>
//                 </svg>
//                 X.com
//               </a>
//             </li>
//             <li>
//               <a href="https://bsky.app/profile/vite.dev" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#bluesky-icon"></use>
//                 </svg>
//                 Bluesky
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>

//       <div className="ticks"></div>
//       <section id="spacer"></section>
//     </>
//   )
// }

// export default App

// import { useState, useEffect } from "react";
// import axios from "axios";

// const API = "https://mern-backend-3on1.onrender.com/api/users";

// function App() {
//   const [users, setUsers] = useState([]);
//   const [form, setForm] = useState({ name: "", email: "", password: "" });

//   const fetchUsers = async () => {
//     const { data } = await axios.get(API);
//     setUsers(data);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await axios.post(API, form);
//     setForm({ name: "", email: "", password: "" });
//     fetchUsers();
//   };

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   return (
//     <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
//       <h1>MERN App</h1>

//       <h2>Add User</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           placeholder="Name"
//           value={form.name}
//           onChange={(e) => setForm({ ...form, name: e.target.value })}
//           required
//         />
//         <br />
//         <br />
//         <input
//           placeholder="Email"
//           value={form.email}
//           onChange={(e) => setForm({ ...form, email: e.target.value })}
//           required
//         />
//         <br />
//         <br />
//         <input
//           placeholder="Password"
//           type="password"
//           value={form.password}
//           onChange={(e) => setForm({ ...form, password: e.target.value })}
//           required
//         />
//         <br />
//         <br />
//         <button type="submit">Add User</button>
//       </form>

//       <h2>Users</h2>
//       {users.map((u) => (
//         <div
//           key={u._id}
//           style={{ border: "1px solid #ccc", padding: "8px", margin: "8px 0" }}
//         >
//           <strong>{u.name}</strong> — {u.email}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default App;
// import { useState } from "react";
// import axios from "axios";

// const API = "https://mern-backend-3on1.onrender.com/api/auth";

// function App() {
//   const [isLogin, setIsLogin] = useState(true);
//   const [form, setForm] = useState({ name: "", email: "", password: "" });
//   const [token, setToken] = useState(localStorage.getItem("token") || "");
//   const [user, setUser] = useState(null);
//   const [message, setMessage] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const url = isLogin ? `${API}/login` : `${API}/register`;
//       const body = isLogin
//         ? { email: form.email, password: form.password }
//         : { name: form.name, email: form.email, password: form.password };

//       const { data } = await axios.post(url, body);
//       setToken(data.token);
//       setUser(data.user);
//       localStorage.setItem("token", data.token);
//       setMessage(`Welcome ${data.user.name}!`);
//       setForm({ name: "", email: "", password: "" });
//     } catch (err) {
//       setMessage(err.response?.data?.message || "Something went wrong");
//     }
//   };

//   const handleLogout = () => {
//     setToken("");
//     setUser(null);
//     localStorage.removeItem("token");
//     setMessage("");
//   };

//   return (
//     <div
//       style={{
//         padding: "2rem",
//         fontFamily: "sans-serif",
//         maxWidth: "400px",
//         margin: "0 auto",
//       }}
//     >
//       <h1>MERN Auth App</h1>

//       {token && user ? (
//         <div>
//           <h2>👋 {message}</h2>
//           <p>Email: {user.email}</p>
//           <button onClick={handleLogout}>Logout</button>
//         </div>
//       ) : (
//         <div>
//           <h2>{isLogin ? "Login" : "Register"}</h2>

//           {message && <p style={{ color: "red" }}>{message}</p>}

//           <form onSubmit={handleSubmit}>
//             {!isLogin && (
//               <>
//                 <input
//                   placeholder="Name"
//                   value={form.name}
//                   onChange={(e) => setForm({ ...form, name: e.target.value })}
//                   required
//                 />
//                 <br />
//                 <br />
//               </>
//             )}
//             <input
//               placeholder="Email"
//               value={form.email}
//               onChange={(e) => setForm({ ...form, email: e.target.value })}
//               required
//             />
//             <br />
//             <br />
//             <input
//               placeholder="Password"
//               type="password"
//               value={form.password}
//               onChange={(e) => setForm({ ...form, password: e.target.value })}
//               required
//             />
//             <br />
//             <br />
//             <button type="submit">{isLogin ? "Login" : "Register"}</button>
//           </form>

//           <br />
//           <p>
//             {isLogin ? "Don't have an account?" : "Already have an account?"}
//             <button
//               onClick={() => {
//                 setIsLogin(!isLogin);
//                 setMessage("");
//               }}
//               style={{ marginLeft: "8px", cursor: "pointer" }}
//             >
//               {isLogin ? "Register" : "Login"}
//             </button>
//           </p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;
// import { useState, useEffect } from "react";
// import axios from "axios";

// const API = "https://mern-backend-3on1.onrender.com/api/users";

// function App() {
//   const [users, setUsers] = useState([]);
//   const [form, setForm] = useState({ name: "", email: "", password: "" });
//   const [editId, setEditId] = useState(null);
//   const [message, setMessage] = useState("");

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

//   const handleEdit = (user) => {
//     setEditId(user._id);
//     setForm({ name: user.name, email: user.email, password: "" });
//     setMessage("");
//   };

//   const handleCancel = () => {
//     setEditId(null);
//     setForm({ name: "", email: "", password: "" });
//     setMessage("");
//   };

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   return (
//     <div
//       style={{
//         padding: "2rem",
//         fontFamily: "sans-serif",
//         maxWidth: "500px",
//         margin: "0 auto",
//       }}
//     >
//       <h1>MERN App</h1>

//       {message && <p style={{ color: "green" }}>{message}</p>}

//       <h2>{editId ? "Edit User" : "Add User"}</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           placeholder="Name"
//           value={form.name}
//           onChange={(e) => setForm({ ...form, name: e.target.value })}
//           required
//         />
//         <br />
//         <br />
//         <input
//           placeholder="Email"
//           value={form.email}
//           onChange={(e) => setForm({ ...form, email: e.target.value })}
//           required
//         />
//         <br />
//         <br />
//         <input
//           placeholder="Password"
//           type="password"
//           value={form.password}
//           onChange={(e) => setForm({ ...form, password: e.target.value })}
//         />
//         <br />
//         <br />
//         <button type="submit">{editId ? "Update User" : "Add User"}</button>
//         {editId && (
//           <button
//             type="button"
//             onClick={handleCancel}
//             style={{ marginLeft: "10px" }}
//           >
//             Cancel
//           </button>
//         )}
//       </form>

//       <h2>Users</h2>
//       {users.length === 0 && <p>No users found.</p>}
//       {users.map((u) => (
//         <div
//           key={u._id}
//           style={{
//             border: "1px solid #ccc",
//             padding: "10px",
//             margin: "8px 0",
//             borderRadius: "6px",
//           }}
//         >
//           <strong>{u.name}</strong> — {u.email}
//           <div style={{ marginTop: "8px" }}>
//             <button
//               onClick={() => handleEdit(u)}
//               style={{ marginRight: "8px" }}
//             >
//               Edit
//             </button>
//             <button
//               onClick={() => handleDelete(u._id)}
//               style={{ color: "red" }}
//             >
//               Delete
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default App;
import { useState, useEffect } from "react";
import axios from "axios";

const API = "https://mern-backend-3on1.onrender.com/api/users";

function App() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [editId, setEditId] = useState(null);
  const [message, setMessage] = useState("");

  const fetchUsers = async () => {
    const { data } = await axios.get(API);
    setUsers(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editId) {
        await axios.put(`${API}/${editId}`, form);
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
    await axios.delete(`${API}/${id}`);
    setMessage("User deleted!");
    fetchUsers();
  };

  const handleEdit = (user) => {
    setEditId(user._id);
    setForm({ name: user.name, email: user.email, password: "" });
    setMessage("");
  };

  const handleCancel = () => {
    setEditId(null);
    setForm({ name: "", email: "", password: "" });
    setMessage("");
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-lg mx-auto bg-white rounded-2xl shadow-md p-8">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          MERN App
        </h1>

        {message && (
          <p className="text-center text-green-600 font-medium mb-4">
            {message}
          </p>
        )}

        <h2 className="text-xl font-semibold mb-4">
          {editId ? "✏️ Edit User" : "➕ Add User"}
        </h2>

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
              className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-medium"
            >
              {editId ? "Update User" : "Add User"}
            </button>
            {editId && (
              <button
                type="button"
                onClick={handleCancel}
                className="flex-1 bg-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-400 transition font-medium"
              >
                Cancel
              </button>
            )}
          </div>
        </form>

        <h2 className="text-xl font-semibold mt-8 mb-4">👥 Users</h2>

        {users.length === 0 && (
          <p className="text-gray-400 text-center">No users found.</p>
        )}

        <div className="space-y-3">
          {users.map((u) => (
            <div
              key={u._id}
              className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-xl px-4 py-3"
            >
              <div>
                <p className="font-semibold text-gray-800">{u.name}</p>
                <p className="text-sm text-gray-500">{u.email}</p>
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
      </div>
    </div>
  );
}

export default App;
