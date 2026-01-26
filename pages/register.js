export default function Register() {
  return (
    <div style={{ padding: "40px", maxWidth: "400px" }}>
      <h1>Register</h1>
      <p>Create your Nexora Capital account.</p>

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
              border: "none",
            }}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label>Password</label>
          <input
            type="password"
            placeholder="Create a password"
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "5px",
              borderRadius: "5px",
              border: "none",
            }}
          />
        </div>

        <button
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#6a5acd",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Register
        </button>
      </form>
    </div>
  );
}
