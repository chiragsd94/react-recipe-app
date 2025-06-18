import React from "react";
import useThemeStore from "../store/useThemeStore";
const About = () => {
  const { day } = useThemeStore();
  return (
    <div className={`${day ? "text-white" : "text-gray-800"}`}>
      <div className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-center">About This App</h1>

        <p className="mb-4">
          This is a personal project built using <strong>React.js</strong>,{" "}
          <strong>Tailwind CSS</strong>, and <strong>Zustand</strong> for state
          management. The app fetches recipe data from{" "}
          <a
            href="https://www.themealdb.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            TheMealDB
          </a>{" "}
          API.
        </p>

        <p className="mb-4">
          The goal of this project is to demonstrate my front-end development
          skills, particularly with React. All UI, layout, and logic were fully
          designed and implemented by me.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Disclaimer</h2>
        <ul className="list-disc list-inside mb-4">
          <li>
            This app is for <strong>educational and demonstration</strong>{" "}
            purposes only.
          </li>
          <li>
            I do <strong>not claim ownership</strong> of any recipe content or
            images provided by TheMealDB.
          </li>
          <li>
            I am <strong>not liable</strong> for any loss or issues caused by
            using this application.
          </li>
          <li>
            The source code and UI design are entirely my own original work.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">License</h2>
        <p className="mb-4">
          This project is licensed under the{" "}
          <a
            href="https://opensource.org/licenses/MIT"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            MIT License
          </a>
          . You are free to use the code for learning and personal projects, but{" "}
          <strong>commercial use is not allowed</strong> without permission.
        </p>

        <p className="text-center text-sm mt-8">
          &copy; {new Date().getFullYear()} | Built by Chirag SD | Recipes from
          TheMealDB
        </p>
      </div>
    </div>
  );
};

export default About;
