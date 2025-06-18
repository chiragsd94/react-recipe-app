import React, { useMemo, useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";
import MealsList from "../components/MealsList";
import Spinner from "../components/Spinner";
import useThemeStore from "../store/useThemeStore";
import { cuisins, alphabets } from "../utils";
import { useSearchParams } from "react-router-dom";

const Home = () => {
  const { day } = useThemeStore();
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedCuisine = searchParams.get("cuisine") || "";
  const selectedAlphabet = searchParams.get("alphabet") || "";

  const [cuisine, setCuisine] = useState(selectedCuisine);
  const [alphabet, setAlphabet] = useState(selectedAlphabet);

  useEffect(() => {
    const newParams = {};
    if (cuisine) newParams.cuisine = cuisine;
    if (alphabet) newParams.alphabet = alphabet;
    setSearchParams(newParams);
  }, [cuisine, alphabet]);

  const randomLetter = useMemo(() => {
    if (cuisine || alphabet) return "";
    const ri = Math.floor(Math.random() * alphabets.length);
    return alphabets[ri];
  }, [cuisine, alphabet]);

  const fetchUrl = useMemo(() => {
    if (cuisine) {
      return `https://www.themealdb.com/api/json/v1/1/filter.php?a=${cuisine}`;
    } else if (alphabet) {
      return `https://www.themealdb.com/api/json/v1/1/search.php?f=${alphabet}`;
    } else {
      return `https://www.themealdb.com/api/json/v1/1/search.php?f=${randomLetter}`;
    }
  }, [cuisine, alphabet, randomLetter]);

  const { loading, data, error } = useFetch(fetchUrl);

  const handleCuisineChange = (e) => {
    setCuisine(e.target.value);
    setAlphabet("");
  };

  const handleAlphabetChange = (e) => {
    setAlphabet(e.target.value);
    setCuisine("");
  };

  if (error) return <div>Can't Fetch Data</div>;
  if (loading) return <Spinner />;

  return (
    <div>
      <div className="flex justify-end gap-4 px-4 mt-5">
        <select
          value={cuisine}
          onChange={handleCuisineChange}
          className={`border-4 rounded px-3 py-1 ${
            day ? "border-green-500" : "border-yellow-400"
          }`}
        >
          <option value="">Filter By Cuisine</option>
          {cuisins.map((c, index) => (
            <option key={index} value={c}>
              {c}
            </option>
          ))}
        </select>

        <select
          value={alphabet}
          onChange={handleAlphabetChange}
          className={`border-4 rounded px-3 py-1 ${
            day ? "border-green-500" : "border-yellow-400"
          }`}
        >
          <option value="">Filter By Alphabet</option>
          {alphabets.map((a, index) => (
            <option key={index} value={a}>
              {a.toUpperCase()}
            </option>
          ))}
        </select>
      </div>

      <div className="flex justify-center m-4">
        <MealsList meals={data.meals} />
      </div>
    </div>
  );
};

export default Home;
