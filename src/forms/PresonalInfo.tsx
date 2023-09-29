import Info from "../components/Info";
import QuestionForm from "../components/QuestionForm";
import AddIcon from "../assets/cross.svg";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import QuestionsList from "../components/QuestionsList";
export interface MyObject {
  type: string;
  body: string;
  id: string;
}
const PersonalInfo = () => {
  const listarr = [
    {
      title: "First Name",
      more: false,
      additional: null,
    },
    {
      title: "Last Name",
      more: false,
      additional: null,
    },
    {
      title: "Email",
      more: false,
      additional: null,
    },
    {
      title: "Phone",
      more: true,
      additional: "(without dial code)",
    },
    {
      title: "Nationality",
      more: true,
      additional: null,
    },
    {
      title: "Current Residence ",
      more: true,
      additional: null,
    },
    {
      title: "ID Number",
      more: true,
      additional: null,
    },
    {
      title: "Date of Birth ",
      more: true,
      additional: null,
    },
    {
      title: "Gender",
      more: true,
      additional: null,
    },
  ];
  const [add, setAdd] = useState<boolean>(false);
  const [question, setQuestion] = useState<MyObject>(Object);
  const [questionsArr, setQuestionsArr] = useState<MyObject[]>([]);
  const [type, setType] = useState<string>("Paragraph");
  const options = ["Paragraph", "Multiple choice", "Dropdown", "Yes or no"];
  const [edit, setEdit] = useState<boolean>(false);
  const [selectedQuestion, setSelectedQuestion] = useState<MyObject>({
    id: "",
    body: "",
    type: "",
  });





  const handleSave = (item: MyObject, flag: boolean) => {
    if (flag) {
      return setQuestion(item);
    }
    if (!edit) {
      const id = uuidv4();
      const newQuestion: MyObject = {
        id: id,
        type: question.type,
        body: question.body,
      };
      setQuestion(newQuestion);
      setQuestionsArr((prev: MyObject[]) => {
        return [...prev, { ...newQuestion }];
      });
      setEdit(false);
      setAdd(false);
    } else if (edit) {
      setEdit(false);
      setAdd(false);
    }
  };

  const handleDelete = (id: string) => {
    setQuestionsArr((prev: MyObject[]) =>
      prev.filter((item: MyObject) => {
        return item.id !== id;
      })
    );

    setAdd(false);
  };

  return (
    <div className="flex align-middle  shadow-lg rounded-xl flex-col w-[90%]  lg:w-[40%] ">
      <header className=" bg-[#D0F7FA] w-full text-black font-bold p-4 mt-5 rounded-t-xl mb-[0.5rem]">
        {" "}
        <h1>Personal Info </h1>
      </header>
      <div className=" px-[1.8rem]">
      <div className=" px-[1.8rem]">
        {listarr.map((item, index) => (
          <Info key={index} item={item} index={index} checkbox="internal" />
        ))}
      </div>
      </div>

      <div className="flex flex-col w-full mt-5  p-4">
        <QuestionsList
          questionsArr={questionsArr}
          handleDelete={handleDelete}
          setAdd={setAdd}
          setEdit={setEdit}
          setSelectedQuestion={setSelectedQuestion}
          selectedQuestion={selectedQuestion}
        />

        <div
          onClick={() => {
            setAdd(true);
          }}
          className=" cursor-pointer gap-3 flex  p-2"
        >
          <img src={AddIcon} className=" w-7 pl-3 " alt="" />
          <p className="  p-2  font-bold">Add a question</p>
        </div>
        {add && (
          <QuestionForm
            options={options}
            setType={setType}
            question={question}
            setQuestion={setQuestion}
            questionsArr={questionsArr}
            setQuestionsArr={setQuestionsArr}
            selectedQuestion={selectedQuestion}
            setSelectedQuestion={setSelectedQuestion}
            type={type}
            handleSave={handleSave}
            handleDelete={handleDelete}
            edit={edit}
          />
        )}
      </div>
    </div>
  );
};

export default PersonalInfo;
