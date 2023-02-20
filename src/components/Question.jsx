const Question = ({ question, answer, handleAnswer, result }) => {
  return (
    <div className=" border-b py-2">
      <h2
        className="text-xl font-semibold text-slate-700"
        dangerouslySetInnerHTML={{ __html: question.question }}
      ></h2>
      <div className="flex gap-2 lg:flex-nowrap flex-wrap my-3">
        {question.options.map((option, index) => {
          return (
            <div
              key={index}
              onClick={() => {
                handleAnswer(option);
              }}
              className={`rounded-xl border-2 py-1 px-5 cursor-pointer 
             
              ${answer === option && !result && "bg-gray-300"}
               
               ${
                 result?.status === "incorrect" &&
                 answer === option &&
                 "bg-red-500"
               }

               ${option === question.answer && result && "bg-green-500"}
               
              `}
            >
              {option}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Question;
