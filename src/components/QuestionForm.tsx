import { useEffect, useState } from "react";
import Paragraph from "./Paragraph";
import YesOrNo from "./YesOrNo";
import Dropdown from "./Dropdown";
import MultiChoice from "./MultiChoice";
import { MyObject } from "../forms/Profile";

interface ComponentProps {
  question: MyObject;
  setQuestion: Function;
  questionsArr: MyObject[];
  setQuestionsArr: Function;
  selectedQuestion: MyObject;
  setSelectedQuestion:Function; 
  type: string;
  setType: Function;
  handleSave: Function;
  handleDelete: Function;
  options: string[];
  edit?:boolean;
}

const QuestionForm = (props: ComponentProps) => {
  const [choices, setChoices] = useState<string[]>([]);
  const [choice, setChoice] = useState<string>("");
  const [multichoice, setMultichoice] = useState<string>("");
  const [multichoices, setMultichoices] = useState<string[]>([]);
  const [value,setValue]=useState<string>()
  useEffect(()=> { 
    if(props.edit){
      setValue(props.selectedQuestion.type)
    } 
    else {
      
    }
  },[props.type,props.selectedQuestion])

  const addChoice = (choice: string) => {
    if (choice === "") {
      return;
    }
    setChoices((prev) => [choice, ...prev]);
    setChoice("");
  };
  const addChoiceMulti = (choice: string) => {
    if (choice === "") {
      return;
    }
    setMultichoices((prev) => [choice, ...prev]);
    setMultichoice("");
  };

  // const getType=(id:string) :string => { 
  //   let type = ''
  //   props.questionsArr.forEach((item)=> {
  //       if(item.id===id) {
  //         type = item.type
  //       }
  //   })
  //   return type
  // }
  const handleChangeSelectType =(e:React.ChangeEvent<HTMLSelectElement>)=> {   
    if(props.edit){
       props.questionsArr.forEach(item=> {
        if(item.id === props.selectedQuestion.id){
          item.type = e.target.value
          props.setType(e.target.value)
        }
      })    
    }
    else{
      props.setQuestion({...props.question, type:e.target.value})
      props.setType(e.target.value)
    }
  }

  return (
    <div className="px-4">
      <div className=" flex flex-col ">
        <label className=" font-bold mb-3 mt-2" htmlFor="dropdown">
          Type
        </label>
        <select
          className="w-full mb-5 mt cursor-pointer p-2 border-[1px] border-[#ccc] rounded-md"
          name="dropdown"
          id="dropdown"
          value={value}
          onChange={(event)=>handleChangeSelectType(event)}
        >
          <option className="   p-2  "> Choose a question type</option>
          {props.options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      {props.type === "Paragraph" && <Paragraph {...props} />}
      {props.type === "Yes or no" && <YesOrNo {...props} />}
      {props.type === "Dropdown" && (
        <Dropdown
          choice={choice}
          choices={choices}
          setChoices={setChoices}
          addChoice={addChoice}
          setChoice={setChoice}
          {...props}
        />
      )}
      {props.type === "Multiple choice" && (
        <MultiChoice
          multichoice={multichoice}
          multichoices={multichoices}
          setMultichoices={setMultichoices}
          addChoiceMulti={addChoiceMulti}
          setMultichoice={setMultichoice}
          {...props}
        />
      )}
    </div>
  );
};

export default QuestionForm;
