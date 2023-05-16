import { useParams } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";

const Actor = () => {
  const { id } = useParams();
  const url = `https://api.themoviedb.org/3/person/${id}?api_key=${
    import.meta.env.VITE_API_KEY
  }`;

  // import.meta.env.VITE_API_URL +
  // id +
  // "?api_key=" +
  // import.meta.env.VITE_API_KEY +
  // "&append_to_response=credits,videos";

  // https://api.themoviedb.org/3/person/{person_id}?api_key=

  const { data: actor, isLoading, errorMessage } = useFetch(url);
  console.log("ACTOR", actor);
  return (
    <>
      {errorMessage && <p>Something went wrong</p>}
      {isLoading && <p>Loading....</p>}
      {actor && <div>Actor-id: {id}</div>}
    </>
  );
};

export default Actor;
