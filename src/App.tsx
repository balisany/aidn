import useSWR from "swr";
import "./App.css";
import axios from "axios";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

function App() {
  const { data, isLoading, error } = useSWR(
    "https://api.thedogapi.com/v1/breeds",
    fetcher
  );

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <h1 className="text-3xl text-aidn-blue font-bold underline">
        Dog Breeds
      </h1>
      <ul>
        {data?.map((breed: { id: number; name: string }) => (
          <li key={breed.id}>{breed.name}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
