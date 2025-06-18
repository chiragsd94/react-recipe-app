import React, { useEffect, useMemo } from "react";
import useThemeStore from "../store/useThemeStore";
import { useNavigate } from "react-router-dom";
const SingleMeal = ({ meal }) => {
  const navigate = useNavigate();
  const { day } = useThemeStore();

  const handleGoBack = () => {
    navigate(-1);
  };

  const ingredients = useMemo(() => {
    if (!meal || !meal.length) return [];

    const m = meal[0];
    const items = [];

    for (let i = 1; i <= 20; i++) {
      const ingredient = m[`strIngredient${i}`];
      const measure = m[`strMeasure${i}`];

      if (ingredient && ingredient.trim()) {
        items.push(`${measure?.trim() || ""} ${ingredient.trim()}`);
      }
    }

    return items;
  }, [meal]);

  return (
    <div>
      <div className="mt-5 px-2">
        <button
          className={`${
            day
              ? "bg-green-500 rounded-lg p-4 text-white hover:bg-green-700 translate"
              : "bg-yellow-500 rounded-lg p-4 text-white hover:bg-yellow-700 translate"
          }`}
          onClick={handleGoBack}
        >
          Go Back
        </button>
      </div>
      <div>
        <div>
          {meal.map((m) => (
            <div key={m.idMeal} className="ml-5 mt-4 mr-4">
              <div className="flex gap-4">
                <img
                  className="w-1/4 h-1/4"
                  src={m.strMealThumb}
                  alt="meal image"
                />
                <div className={`${day ? "text-white" : "text-black"}`}>
                  <h1 className={`text-4xl`}>{m.strMeal}</h1>
                  <h3 className="text-2xl">
                    <span className="font-bold">Category</span>: {m.strCategory}
                  </h3>
                </div>
              </div>
              <div>
                <div className={`m-2 ${day ? "text-white" : "text-black"}`}>
                  <h3 className="text-2xl font-bold">Ingredients:</h3>
                  {ingredients.map((item, index) => (
                    <p key={index}>{item}</p>
                  ))}
                  <p className="mb-8">
                    <span className="text-2xl font-bold">Instructions:</span>
                    {m.strInstructions}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleMeal;
