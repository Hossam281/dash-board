import { useEffect, useState } from "react";
import BurgerIcon from "../assets/Vector.svg";
import AddIcon from "../assets/cross.svg";
import CloseLogo from "../assets/closelogo.svg";
import { MyObject } from "../forms/Profile";
interface CompnentProps {
  multichoice: string;
  multichoices: string[];
  setMultichoice: Function;
  setMultichoices: Function;
  addChoiceMulti: Function;
  question: MyObject;
  setQuestion: Function;
  questionsArr: MyObject[];
  setQuestionsArr: Function;
  type: string;
  handleSave: Function;
  handleDelete: Function;
  selectedQuestion: MyObject;
  edit?: boolean;
}
const MultiChoice = (props: CompnentProps) => {
   // ******************** States *******************
   const [value,setValue] = useState<string>('') ; //Value is for the text in the input field

   // ******************** useEffect ****************
   useEffect(()=> {
     let val = props.edit ? props.selectedQuestion.body : '';
     setValue(val)
   },[])
 
   // ******************** Functions ********************
   const handleQuestionInputEdit = (
     event: React.ChangeEvent<HTMLInputElement>,
     currentQuestion: MyObject
   ) => {
     // For Editing The Selected Question
     if (props.edit) {
       setValue(event.target.value)
       const updatedQuestion = { ...currentQuestion, body: event.target.value };
       props.setQuestion(updatedQuestion);
       // Update the question in the questionsArr
       props.setQuestionsArr((prevQuestions: MyObject[]) => {
         return prevQuestions.map((question) => {
           if (question.id === currentQuestion.id) {
             return updatedQuestion;
           } else {
             return question;
           }
         });
       });
     }
     // For Adding a new question in the array
     else{
       setValue(event.target.value)
       props.setQuestion({...props.question,body:event.target.value})
     }
   };
 
  return (
    <div className="flex flex-col w-full gap-4 ">
      <div className="flex flex-col gap-2 mt-4">
        <label htmlFor="question" className=" font-bold mb-3 mt-2">
          Question
        </label>
        <input
          className="w-full hover:cursor-text  focus-visible:border-green-700  outline-none border-2 p-2  border-[#ccc] rounded-md"
          type="text"
          value={value}
          name="question"
          onChange={(event)=>handleQuestionInputEdit(event,props.selectedQuestion)}
        />
      </div>
      <div className="flex flex-col mr-auto ml-auto  w-full gap-2">
        <label htmlFor="choice" className=" ml-20">
          {" "}
          Choice
        </label>
        <div className="flex gap-2 ml-11  ">
          <img src={BurgerIcon} alt="" />
          <input
            className="w-[80%] hover:cursor-text  focus-visible:border-green-700  outline-none border-2 p-2  border-[#ccc] rounded-md"
            type="text"
            name="question"
            id="choice"
            value={props.multichoice}
            onChange={(e) => props.setMultichoice(e.target.value)}
          />
          <img
            src={AddIcon}
            onClick={() => props.addChoiceMulti(props.multichoice)}
            className=" w-3 hover:cursor-pointer "
            alt=""
          />
        </div>

        {props.multichoices.map((item, index) => (
          <div key={index} className="flex gap-2 ml-11  ">
            <img src={BurgerIcon} alt="" />
            <input
              className="w-[80%] hover:cursor-text  focus-visible:border-green-700  outline-none border-2 p-2  border-[#ccc] rounded-md"
              type="text"
              name="question"
              id="choice"
              value={item}
              onChange={(event) => props.setMultichoice(event.target.value)}
            />
            <img
              src={AddIcon}
              onClick={() => props.addChoiceMulti(item)}
              className=" w-3 hover:cursor-pointer "
              alt=""
            />
          </div>
        ))}
        <div className="flex ml-7  w-full gap-2 mb-5 mt-3">
          <input
            type="checkbox"
            className=" ml-6 accent-green-600 hover:cursor-pointer mt-1"
          />{" "}
          <span>Enable "Other" option</span>
        </div>
        <div className="flex justify-between mt-4 mb-4">
          <div onClick={() => props.handleDelete(props.question.id)} className=" cursor-pointer flex gap-2 ">
            <img src={CloseLogo} className=" w-10 pl-3 " alt="" />
            <p className="  p-2 text-[#A80000] font-bold">Delete Question</p>
          </div>

          <button
            type="button"
            onClick={()=>props.handleSave(props.question)}
            className=" hover:shadow-xl  bg-[#087B2F] p-2 transition-all hover:scale-110 hover:ease-out duration-200 rounded-md w-14 font-semibold text-white text-sm justify-center h-8 flex items-center"
          >
            {" "}
            Save{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MultiChoice;
