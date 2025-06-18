import React from "react";
import useFetch from "../hooks/useFetch";
import Spinner from "../components/Spinner";
import useThemeStore from "../store/useThemeStore";
import { Link } from "react-router-dom";
const Categories = () => {
  const { loading, data, error } = useFetch(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  );
  const { day } = useThemeStore();
  if (loading)
    return (
      <div className="text-center">
        <Spinner />
      </div>
    );
  if (error)
    return (
      <div className="text-center text-red-500">Error loading categories.</div>
    );

  return (
    <div className={`${day ? "text-white" : "text-gray-800"}`}>
      <div className="max-w-4xl mx-auto p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.categories.map((cat) => (
          <div
            key={cat.idCategory}
            className={`p-4 border rounded shadow-lg transition ${
              day ? "hover:bg-green-500" : "hover:bg-yellow-500"
            }`}
            style={{
              boxShadow: day ? "" : "0 4px 8px rgba(253,224,71,0.5)",
            }}
          >
            <Link to={`/categories/${cat.strCategory}`}>
              <div>
                <img
                  src={cat.strCategoryThumb}
                  alt={cat.strCategory}
                  className="w-full h-32 object-cover rounded mb-2"
                />

                <h2 className="text-lg font-semibold text-center">
                  {cat.strCategory}
                </h2>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
