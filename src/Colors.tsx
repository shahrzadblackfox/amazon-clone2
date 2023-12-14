import React, { ChangeEvent, FC } from "react";

import Input from "./Input";

interface CategoryProps {
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  }
  
const Colors: FC<any> = ({ handleChange }) => {
  return (
    <>
      <div>
        <h2 className="sidebar-title color-title">Colors</h2>

        <div
          className="sidebar-color-option"
          onClick={() => handleChange("")}
        >
          <span className="checkmark all"></span>
          All
        </div>

        <Input
          handleChange={handleChange}
          value="black"
          title="Black"
          name="test1"
          color="black"
        />

        <Input
          handleChange={handleChange}
          value="blue"
          title="Blue"
          name="test1"
          color="blue"
        />

        <Input
          handleChange={handleChange}
          value="red"
          title="Red"
          name="test1"
          color="red"
        />

        <Input
          handleChange={handleChange}
          value="green"
          title="Green"
          name="test1"
          color="green"
        />

        <div
          className="sidebar-color-option"
          onClick={() => handleChange("white")}
          style={{ background: "white", border: "2px solid black" }}
        >
          White
        </div>
      </div>
    </>
  );
};

export default Colors;