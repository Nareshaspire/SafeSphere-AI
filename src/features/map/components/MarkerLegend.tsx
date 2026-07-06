export default function MarkerLegend() {
  return (
    <div
      style={{
        position: "absolute",
        bottom: "20px",
        left: "20px",
        backgroundColor: "rgba(255,255,255,0.95)",
        backdropFilter: "blur(8px)",
        border: "1px solid #e2e8f0",
        padding: "14px",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
        zIndex: 1000,
        minWidth: "190px",
        fontSize: "14px",
      }}
    >
      <h4
        style={{
          margin: "0 0 12px 0",
          color: "#1e293b",
          fontWeight: "bold",
        }}
      >
        🚨 Emergency Resources
      </h4>

      <div style={{ marginBottom: "8px" }}>🏥 Hospital</div>
      <div style={{ marginBottom: "8px" }}>🚒 Fire Station</div>
      <div style={{ marginBottom: "8px" }}>🚑 EMS</div>
      <div style={{ marginBottom: "8px" }}>🚓 Police</div>
      <div>❄️ Warming Centre</div>
    </div>
  );
}