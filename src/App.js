import React, { useState } from "react";
import  Input from "./components/Input"
import "./App.css"

export default function App(){
  const [items, setItems] = useState(['JavaScript','Python','Java','GO','C/C++','C#','PHP']);
  
  const handleDelete = (index) => {
   const updatedItems = items.filter((item, idx) => idx !== index);
   setItems(updatedItems)
  }

  return(
    <div className="grid justify-items-center nunito mb-7">
      <section className="mt-20 mb-10">
        <span className="text-5xl text-[#A8CD9F]">
          Todo List
        </span>
      </section>
      <section className="mb-10">
        <Input items={items} setItems={setItems}/>
      </section>
      <section>
        {items.map((item, index) => (
          <div className="bg-[#496989] text-white rounded-xl text-left mb-5 pl-3 py-3 flex justify-between">
            <div>
              <strong>{index + 1}. </strong>
              <input 
                className="bg-transparent outline-transparent w-36 text-white font-bold" 
                value={item} 
                disabled
              />
            </div>
            <div className="flex">
              <img alt="delete-icon" width={36} onClick={() => handleDelete(index)} className="pr-3 cursor-pointer" src="./delete.svg"/>
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}
