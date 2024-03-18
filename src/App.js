import React, { useState } from "react";
import  Input from "./components/Input"
import "./App.css"

export default function App(){
  const [items, setItems] = useState(['Ilqar','Fatima','Akif','Ravan','Leyla']);

  const handleDelete = (index) => {
   const updatedItems = items.filter((item, idx) => idx !== index);
   setItems(updatedItems)
  }
 
  return(
    <div className="grid justify-items-center nunito">
      <section className="mt-20 mb-10">
        <span className="text-5xl">
          Todo List
        </span>
      </section>
      <section className="mb-10">
        <Input items={items} setItems={setItems}/>
      </section>
      <section>
        {items.map((item, index) => (
          <div className="border border-[#585858] text-[#585858] rounded-xl text-left mb-5 pl-3 py-3 flex justify-between">
            <p className="pr-28"><strong>{index + 1}.</strong> {item}</p>
            <img onClick={() => handleDelete(index)} className="pr-3 cursor-pointer" src="./delete.png"/>
          </div>
        ))}
      </section>
    </div>
  )
}
