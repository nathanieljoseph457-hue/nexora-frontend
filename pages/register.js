export default function Register() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#0b0b0b",
        color: "#fff",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "420px",
          background: "#111",
          padding: "40px",
          borderRadius: "10px",
          boxShadow: "0 0 30px rgba(0,0,0,0.6)",
        }}
      >
        <h1 style={{ marginBottom: "10px" }}>Create Account</h1>
        <p style={{ marginBottom: "30px", color: "#aaa" }}>
          Create your Nexora Capital account
        </p>

        <form>
          <div style={{ marginBottom: "20px" }}>
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              style={{
                width: "100%",
                padding: "12px",
                marginTop: "6px",
                borderRadius: "6px",
                border: "none",
                outline: "none",
              }}
            />
          </div>

          <div style={{ marginBottom: "30px" }}>
            <label>Password</label>
            <input
              type="password"
              placeholder="Create a password"
              style={{
                width: "100%",
                padding: "12px",
                marginTop: "6px",
                borderRadius: "6px",
                border: "none",
                outline: "none",
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "14px",
              borderRadius: "6px",
              border: "none",
              background: "#6d5bd0",
              color: "#fff",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
