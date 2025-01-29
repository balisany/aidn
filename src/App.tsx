import "./App.css";
import Select from "./components/Select";
import useBreeds from "./hooks/useBreeds";

function App() {
  const { data, isLoading, error } = useBreeds();

  return (
    <form>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <h1 className="text-2xl mb-10">Dog Breeds</h1>
      {data && <Select data={data} />}
    </form>
  );
}

export default App;
