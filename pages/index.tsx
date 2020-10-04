export default function Page() {
  return (
    <div
      style={{
        height: "90vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexFlow: "column",
      }}
    >
      <style jsx global>{`
        body {
          background: #222;
          color: white;
        }
        a {
          color: lightblue;
        }
      `}</style>
      <a href="/select">Selections</a>
      <a href="/build">Vil Build</a>
    </div>
  );
}
