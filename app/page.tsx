export default function Home() {
  return (
    <main
      style={{
        backgroundColor: "black",
        color: "white",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ fontSize: "64px", letterSpacing: "6px", marginBottom: "12px" }}>
        MIRAI
      </h1>
      <p style={{ fontSize: "20px", opacity: 0.8, marginBottom: "10px" }}>
        Technology for Tomorrow
      </p>
      <p style={{ fontSize: "16px", opacity: 0.6 }}>
        First Product: SPACED
      </p>
    </main>
  );
}
