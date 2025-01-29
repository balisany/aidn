import { useEffect, useState } from "react";
import "./App.css";
import Select from "./components/Select";
import useBreeds from "./hooks/useBreeds";
import { Breed } from "./types";
import InfoBox from "./components/InfoBox/InfoBox";

function App() {
  const { data, isLoading, error } = useBreeds();
  const [selectedBreedId, setSelectedBreedId] = useState<number>();
  const [selectedBreed, setSelectedBreed] = useState<Breed>();

  useEffect(() => {
    if (data) {
      setSelectedBreed(data.find((breed) => breed.id === selectedBreedId));
    }
  }, [data, selectedBreedId]);

  return (
    <form>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      <h1 className="text-2xl mb-10 text-left">Dog Breeds</h1>
      <div className="flex">
        <div>
          {data && (
            <Select
              data={data}
              onSelect={setSelectedBreedId}
              selected={selectedBreedId}
            />
          )}
        </div>

        {selectedBreed && <InfoBox data={selectedBreed} />}
      </div>
    </form>
  );
}

export default App;
