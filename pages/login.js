import Link from "next/link";
export default function Login() {
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
       <h1 style={{ marginBottom: "10px" }}>Login</h1>
<p style={{ marginBottom: "30px", color: "#aaa" }}>
  Login to your Nexora Capital account.
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
      placeholder="Enter your password"
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
      padding: "12px",
      background: "#6f5bd3",
      color: "#fff",
      border: "none",
      borderRadius: "6px",
      fontSize: "16px",
      cursor: "pointer",
    }}
  >
    Login
  </button>

  <p style={{ marginTop: "20px", textAlign: "center", color: "#aaa" }}>
    Don’t have an account?{" "}
    <Link href="/register" style={{ color: "#6f5bd3" }}>
      Register
    </Link>
  </p>
</form>
