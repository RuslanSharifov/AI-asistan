import { useEffect, useState } from "react";

function App() {
  const [backendStatus, setBackendStatus] = useState("Connecting...");

  useEffect(() => {
    fetch("http://localhost:8000/")
      .then((response) => response.json())
      .then((data) => {
        setBackendStatus(data.message);
      })
      .catch(() => {
        setBackendStatus("Backend connection failed");
      });
  }, []);

  return (
    <div>
      <h1>Rugo AI</h1>

      <p>Frontend: Online</p>

      <p>
        Backend: {backendStatus}
      </p>
    </div>
  );
}

export default App;