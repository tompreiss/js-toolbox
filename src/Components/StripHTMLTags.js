import React, { useState } from "react";

function StripHTMLTagsComponent() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const getStrippedValue = () => {
    return inputValue.replace(/<\/?[^>]+(>|$)/g, "");
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <div>{getStrippedValue()}</div>
    </div>
  );
}

export default StripHTMLTagsComponent;
