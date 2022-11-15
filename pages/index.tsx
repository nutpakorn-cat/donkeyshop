import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCatsFetch } from "../redux/slices/catSlice";
import { RootState } from "../redux/store";

export default function Home() {
  const catResult = useSelector((state: RootState) => state.counter.cats);
  const dispatch = useDispatch();

  const renderCats = useCallback(() => {
    return catResult.map((eachCatJson) => <p>Cat: {eachCatJson.name}</p>);
  }, [catResult]);

  return (
    <div>
      <p className="text-center" data-testid="home.helloWorldText">
        Hello World
      </p>
      <button onClick={() => dispatch(getCatsFetch())}>Fetch</button>
      {renderCats()}
    </div>
  );
}
