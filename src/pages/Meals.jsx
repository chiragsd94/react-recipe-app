import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import MealsList from "../components/MealsList";
import Spinner from "../components/Spinner";
const Meals = () => {
  const { strCategory } = useParams();
  const { loading, data, error } = useFetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${strCategory}`
  );
  if (error) {
    return <div>Cant Fetch Data</div>;
  }
  if (loading) {
    return <Spinner />;
  }
  return (
    <div>
      <div className={`flex justify-center m-4`}>
        <MealsList meals={data.meals} />
      </div>
    </div>
  );
};

export default Meals;
