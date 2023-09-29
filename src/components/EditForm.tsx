import React, { useState } from "react";
import { MyObject } from "../forms/Profile";
import Dropdown from "./Dropdown";
import MultiChoice from "./MultiChoice";
import Paragraph from "./Paragraph";
import YesOrNo from "./YesOrNo";
interface CompnentProps {
  type: string;
  options: string[];
  setType: Function;
  question: MyObject;
  setQuestion: Function;
  questionsArr: MyObject[];
  setQuestionsArr: Function;
  handleDelete: Function;
  handleChange: Function;
  setQuestionBody:Function
  questionBody?:string
}
const EditForm = (props: CompnentProps) => {
  const [choices, setChoices] = useState<string[]>([]);
  const [choice, setChoice] = useState<string>("");
  const [multichoice, setMultichoice] = useState<string>("");
  const [multichoices, setMultichoices] = useState<string[]>([]);

    const handleSave=()=>{}

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

  return (
    
  );
};

export default EditForm;
