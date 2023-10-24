import { useState } from 'react';

function Toggle() {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <div className={` mt-1  toggle ${isOn ? 'on' : 'off'}`} onClick={toggleSwitch}>
      <div className={`    slider ${isOn ? 'on' : 'off'}`}></div>
    </div>
  );
}

export default Toggle;
