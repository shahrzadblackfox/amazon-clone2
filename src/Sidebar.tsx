import React, { FC } from 'react';
import Category from "./Category";
import Price from "./Price";
import Colors from "./Colors";
import "./Sidebar.css";

interface SidebarProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Sidebar: FC<SidebarProps> = ({ handleChange }) => {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <h1>🛒</h1>
        </div>
        <Category handleChange={handleChange} />
        <Price handleChange={function (value: string | number): void {
                  throw new Error('Function not implemented.');
              } }  />
        <Colors handleChange={handleChange} />
      </section>
    </>
  );
};

export default Sidebar;