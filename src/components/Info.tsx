import React from 'react'
import Toggle from './Toggle';
interface MyComponentProps {
    item: {
      title: string;
      more: boolean;
      additional: string | null;
    };
    index: number;
    checkbox: string;
  }
const Info = (props:MyComponentProps) => {
  return (
    <React.Fragment  >
            <div  className=" pb-4 pt-2">
              <div className="flex justify-between">
                <div className="flex items-center gap-1">
                  <h1 className=" font-bold inline-block text-base">
                    {props.item.title}
                  </h1>
                  {props.item.additional && (
                    <span className=" text-sm">{props.item.additional}</span>
                  )}
                </div>
                <div className="flex gap-2">
                 <input type="checkbox"   className=" accent-green-600 hover:cursor-pointer mt-1"/> <span className=" text-sm mt-1 mr-7">{props.checkbox}</span>
                <Toggle  /> <span className="text-[#666666] text-sm mt-1"> Hide</span>
                </div>
              </div>
            </div>
            {props.index < 8 && <hr className="   border-[#C4C4C4]" />}
          </React.Fragment>
  )
}

export default Info