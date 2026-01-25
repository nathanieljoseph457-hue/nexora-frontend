export default function Login() {
  return (
    <div style={{ padding: "40px", maxWidth: "400px", margin: "0 auto", color: "#fff" }}>
      <h1>Login</h1>
      <p>Login to your Nexora Capital account.</p>

      <form>
        <div style={{ marginBottom: "15px" }}>
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "5px",
              borderRadius: "5px",
              border: "none"
            }}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "5px",
              borderRadius: "5px",
              border: "none"
            }}
          />
        </div>

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: "#4f46e5",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            fontSize: "16px",
            cursor: "pointer"
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}