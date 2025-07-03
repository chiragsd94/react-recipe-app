import React, { useState } from "react";
import useFetch from "../hooks/useFetch";
import MealsList from "../components/MealsList";
import Spinner from "../components/Spinner";

const SearchMeal = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [submittedTerm, setSubmittedTerm] = useState("");
  const { data, loading, error } = useFetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${submittedTerm}`
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedTerm(searchTerm);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-center my-4">Search Meal</h1>

      <form className="flex justify-center mb-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for a meal..."
          className="border border-gray-300 rounded p-2 w-1/2"
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
        />
        <button
          type="submit"
          className="ml-2 bg-blue-500 text-white rounded p-2"
        >
          Search
        </button>
      </form>

      {loading && <Spinner />}
      {error && (
        <p className="text-center text-red-500">Error fetching meals</p>
      )}

      {data?.meals && <MealsList meals={data.meals} />}
    </div>
  );
};

export default SearchMeal;
