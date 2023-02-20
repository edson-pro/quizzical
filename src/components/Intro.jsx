import { Link } from "react-router-dom";

function Intro() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-[50%] text-center">
        <h1 className="text-5xl font-semibold text-gray-700 mb-3">Quizzical</h1>
        <p className="text-xl text-gray-700">Some description if needed</p>
        <Link to="/questions">
          <button className="bg-primary text-xl px-5 text-white pt-4 pb-5 rounded-2xl mt-4">
            Start quiz
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Intro;
