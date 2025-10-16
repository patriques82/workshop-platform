import "./index.css";
import { workshopApi } from "./api-client";

function App() {
  const fetchWorkshops = async () => {
    const data = await workshopApi.getWorkshops();
    console.log(data);
  };

  return (
    <>
      <h1>Vite + React</h1>
      <button onClick={fetchWorkshops}>Fetch Workshops</button>
    </>
  );
}

export default App;
