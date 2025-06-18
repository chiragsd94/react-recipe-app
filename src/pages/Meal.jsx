import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Spinner from "../components/Spinner";
import SingleMeal from "../components/SingleMeal";

const Meal = () => {
  const { idMeal } = useParams();
  const fetchUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
  const { loading, data, error } = useFetch(fetchUrl);
  if (loading) {
    return <Spinner />;
  }
  if (error) {
    return <p className="text-center text-red-500">No meals found.</p>;
  }
  return (
    <>
      <SingleMeal meal={data.meals} />
    </>
  );
};

export default Meal;
