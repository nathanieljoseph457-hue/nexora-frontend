export default function Dashboard() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0b0b0b",
        color: "#fff",
        padding: "30px",
      }}
    >
      <h1 style={{ marginBottom: "10px" }}>Dashboard</h1>
      <p style={{ color: "#aaa", marginBottom: "30px" }}>
        Welcome to your Nexora Capital dashboard
      </p>

      {/* Balance Card */}
      <div className="card">
          background: "#111",
          padding: "25px",
          borderRadius: "12px",
          boxShadow: "0 0 30px rgba(0,0,0,0.6)",
          marginBottom: "30px",
          maxWidth: "420px",
        }}
      >
        <h3 style={{ marginBottom: "10px", color: "#aaa" }}>
          Account Balance
        </h3>
        <h2>$212,450.00</h2>
      </div>

      {/* Actions */}
      <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
        <button
          style={{
            padding: "14px 20px",
            borderRadius: "8px: "none",
            background: "#6c5ce7",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Deposit
        <button className="btn-primary">Deposit</button>

        <button
          style={{
            padding: "14px 20px",
            borderRadius: "8px",
            border: "none",
            background: "#444",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Withdraw
        </button>

        <button className="btn-secondary">Withdraw</button>
<button className="btn-secondary">Logout</button>
          style={{
            padding: "14px 20px",
            borderRadius: "8px",
            border: "none",
            background: "#222",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Logout
       <button className="btn-secondary">Withdraw</button>
<button className="btn-secondary">Logout</button> 
      </div>
    </div>
  );
}
