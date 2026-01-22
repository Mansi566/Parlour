import React from "react";
import { FcPieChart } from "react-icons/fc";

function Header() {
  return (
    <div style={styles.header} className="flex gap-3">
      <FcPieChart  size={25}/>
      <h3>Admin Dashboard</h3>
    </div>
  );
}

const styles = {
  header: {
    background: "#f3f4f6",
    padding: "15px",
    marginBottom: "20px"
  }
};

export default Header;
