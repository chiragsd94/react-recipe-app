import React from "react";
import { Link } from "react-router-dom";

const MealsList = ({ meals }) => {
  if (!meals || meals.length === 0) {
    return <p className="text-center text-red-500">No meals found.</p>;
  }
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl w-full p-4">
        {meals.map((meal) => (
          <div key={meal.idMeal} className="p-3 border rounded shadow">
            <Link to={`/home/${meal.idMeal}`}>
              <div>
                <img
                  className="w-full rounded"
                  src={meal.strMealThumb}
                  alt="meal thumb"
                />
                <h3 className="text-center text-2xl mt-2 font-semibold text-yellow-700">
                  {meal.strMeal}
                </h3>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MealsList;
