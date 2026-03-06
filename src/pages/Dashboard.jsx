import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Inventory Dashboard</h1>
      <p>Welcome! Select an option below to continue:</p>

      <div style={{ marginTop: "40px" }}>
        <Link to="/products" style={linkStyle}>
          Products
        </Link>

        <Link to="/inventory" style={linkStyle}>
          Inventory Count
        </Link>
      </div>
    </div>
  );
}

// απλό inline styling για τα links
const linkStyle = {
  display: "inline-block",
  margin: "20px",
  padding: "20px 40px",
  backgroundColor: "#4CAF50",
  color: "white",
  textDecoration: "none",
  borderRadius: "8px",
  fontSize: "18px",
};

export default Dashboard;