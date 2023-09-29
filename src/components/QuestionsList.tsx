import PenIcon from "../assets/pen.svg";
import { MyObject } from "../forms/Profile";
import React from "react";
interface ComponentProps {
  questionsArr: MyObject[];
  handleDelete:Function; 
  setAdd:Function; 
  selectedQuestion: MyObject;
  setSelectedQuestion:Function;
  setEdit:Function;
}


const QuestionsList = (props: ComponentProps) => {

  const handleEdit=(question :MyObject)=> {
    console.log(question)
    props.setAdd(true)
    props.setSelectedQuestion(question)
    props.setEdit(true)
  }

  return (
    <div className="flex w-full flex-col justify-between">
      {props.questionsArr.map((ques: MyObject) => {
        return (
          <React.Fragment key={ques.id}>
            <div className="flex flex-col w-full  p-2" >
              <div className=" flex justify-between">
                <div>
                  <p className="text-[#979797] text-xs font-semibold">
                    {ques.type}
                  </p>
                  <p className=" text-xl font-bold">{ques.body}</p>
                </div>
                <img
                  src={PenIcon}
                  className=" cursor-pointer w-3 mt-2"
                  alt=""
                  onClick={()=>handleEdit(ques)}
                />
              </div>
            </div>
            <hr className="border-[#C4C4C4]" />
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default QuestionsList;
