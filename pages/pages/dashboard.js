export default function Dashboard() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0b0b0b",
        color: "#fff",
        padding: "40px",
      }}
    >
      <h1>Dashboard</h1>
      <p>Welcome to your Nexora Capital dashboard.</p>

      <div
        style={{
          marginTop: "30px",
          padding: "20px",
          background: "#111",
          borderRadius: "10px",
          maxWidth: "400px",
        }}
      >
        <h3>Account Balance</h3>
        <p style={{ fontSize: "24px", marginTop: "10px" }}>$0.00</p>
      </div>
    </div>
  );
}
