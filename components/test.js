import { useCollection } from "../hooks/useCollection";
import { useState } from "react";
import { useSignup } from "../hooks/useSignup";
import { useLogout } from "../hooks/useLogout";
import { useLogin } from "../hooks/useLogin";

// firebase imports
import { db } from "../firebase/config";
import { collection, addDoc, doc, deleteDoc } from "@firebase/firestore";

export default function Test() {
  // display content
  const { documents: content } = useCollection("test");

  // add content
  const [newContent, setNewContent] = useState("");
  const handleAdd = async (e) => {
    e.preventDefault();

    const ref = collection(db, "test");
    await addDoc(ref, {
      title: newContent,
    });

    setNewContent("");
  };

  // delete content
  const handleClick = async (id) => {
    const ref = doc(db, "test", id);
    await deleteDoc(ref);
  };

  // signup
  const { error, signup } = useSignup();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSignup = (e) => {
    e.preventDefault();
    signup(email, password);
  };

  // logout
  const { logout } = useLogout();

  // login
  const { errorForLogin, login } = useLogin();
  const [emailLogin, setEmailLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    signup(emailLogin, passwordLogin);
  };

  return (
    <div className="bg-slate-200">
      {/* display content */}

      {content &&
        content.map((item) => (
          <div onClick={() => handleClick(item.id)} key={item.id}>
            {item.title}
          </div>
        ))}

      {/* add content */}

      <form onSubmit={handleAdd}>
        <lable>
          <span>Add new content:</span>
          <input
            required
            type="text"
            onChange={(e) => setNewContent(e.target.value)}
            value={newContent}
          />
        </lable>
        <button>Add</button>
      </form>

      {/* signup */}
      <h2>Sinup</h2>
      <form onSubmit={handleSignup}>
        <label>
          <span>email:</span>
          <input
            required
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            required
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </label>
        <button>sign up</button>
        {error && <p>{error}</p>}
      </form>

      {/* logout */}
      <div onClick={logout}>Logout</div>

      {/* login */}
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label>
          <span>email:</span>
          <input
            required
            type="email"
            onChange={(e) => setEmailLogin(e.target.value)}
            value={emailLogin}
          />
          <input
            required
            type="password"
            onChange={(e) => setPasswordLogin(e.target.value)}
            value={passwordLogin}
          />
        </label>
        <button>Log in</button>
        {errorForLogin && <p>{errorForLogin}</p>}
      </form>
    </div>
  );
}
