import { useEffect, useState } from "react";
import styles from "./Register.module.css";
import { useAuthentication } from "../../hooks/useAuthentication";

const Register = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const { createUser, error: authError, loading } = useAuthentication();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    const user = {
      displayName,
      email,
      password,
    };

    if (password !== confirmPassword) {
      setError("The passwords must be the same.");

      return;
    }

    const res = await createUser(user);

    console.log(res);
  };

  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError]);

  return (
    <div className={styles.register}>
      <h1>Get started</h1>
      <h2>Create your account and share your best ideas!</h2>

      <form onSubmit={handleSubmit}>
        <label>
          <span>Name:</span>
          <input
            type="text"
            name="displayName"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            required
            placeholder="Your amazing name"
          />
        </label>
        <label>
          <span>Email:</span>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Your best email"
          />
        </label>
        <label>
          <span>Password:</span>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="The best secret password"
          />
        </label>
        <div className={styles.passwordTextVerify}>
          {password.length < 6 ? (
            <p className={styles.errorPassword}>Less than 5 characters.</p>
          ) : (
            <p className={styles.validPassword}>More than 5 characters.</p>
          )}
        </div>
        <label>
          <span>Confirm password:</span>
          <input
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            placeholder="Again your best password"
          />
        </label>
        
        <div className={styles.passwordTextVerify}>
          {password !== confirmPassword || !password ? (
            <p className={styles.errorPassword}>The passwords aren't the same.</p>
          ) : (
            <p className={styles.validPassword}>The passwords are the same!</p>
          )}
        </div>

        {!loading && <button className="btn">Get started</button>}
        {loading && (
          <button className="btn" disabled>
            Wait...
          </button>
        )}

        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default Register;
