import React, { useState, useRef } from "react";
import UploadLogo from "../assets/upload.svg";
import CloseLogo from "../assets/closelogo.svg";

const ImgUpload = () => {
  const [image, setImage] = useState<File |Blob | MediaSource | null>();
  const inputRef = useRef<HTMLInputElement>(null);
  const handleImgClick = () => {
    inputRef?.current?.click();
  };
  const handleImgChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const file = e.target.files[0];
    setImage(file);
  };
  return (
    <div  className=" w-[90%]  lg:w-[40%] flex flex-col ">
      {image ? (
        <div className=" mt-7   flex flex-col items-center shadow-lg rounded-xl  mb-6">
          <img
            src={URL.createObjectURL(image)}
            alt=""
            className="w-full h-96  rounded-xl  shadow-xl"
          />
          <div
            onClick={() => {
              setImage(null);
            }}
            className="flex w-full  bg-white p-4 rounded-b-xl cursor-pointer"
          >
            <img src={CloseLogo} className=" pl-3 " alt="" />
            <p className="  p-2 text-[#A80000] font-bold">Delete & re-upload</p>
          </div>
        </div>
      ) : (
        <>
          <div className="flex align-middle items-center   shadow-lg rounded-xl flex-col ">
            <header className=" bg-[#D0F7FA] w-full text-black font-bold p-4 mt-5 rounded-t-xl">
              {" "}
              <h1>Upload new cover image </h1>{" "}
            </header>
            <div
              onClick={handleImgClick}
              className="  flex items-center flex-col align-middle w-full h-[20rem] "
            >
              <div className="hover:cursor-pointer h-[70%] w-[90%] rounded-lg border-dashed flex flex-col items-center space-y-5 border-black border-2 mt-auto mb-auto">
                <div className="flex flex-col  mb-auto mt-auto items-center space-y-2">
                  <img
                    src={UploadLogo}
                    alt="Upload Logo"
                    className=" w-10 h-10"
                  />
                  <p className=" font-semibold">Upload cover image </p>
                  <p className=" font-normal text-[#979797]">
                    16:9 ratio is recommended. Max image size 1mb
                  </p>
                  <input
                    type="file"
                    onChange={handleImgChange}
                    ref={inputRef}
                    className=" pb-20 hidden"
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ImgUpload;
