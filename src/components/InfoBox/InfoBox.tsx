import { Breed } from "../../types";

type Props = {
  data: Breed;
};

function InfoBox({ data }: Props) {
  return (
    <div className="ml-10 bg-aidn-blue p-4 px-8 rounded-md">
      {data && (
        <div className="flex items-center">
          <div className="text-left">
            <h2 className="text-xl">Navn: {data.name}</h2>
            <p className="text-gray-500">
              Opphav: {data.origin ? data.origin : "N/A"}
            </p>
            <p className="text-gray-500">
              Bred for: {data.bred_for ? data.bred_for : "N/A"}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default InfoBox;
