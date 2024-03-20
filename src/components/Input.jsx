import React, { useState } from "react";

export default function Input({ items, setItems }){
    const [value, setValue] = useState('');
    const handleItem = (e) => {
        e.preventDefault()
        setItems([
            ...items,
            value 
        ])
        setValue('')
    }

    const handleDelete = () => {
        setItems([])
    }

    return (
        <div>
            <form className="flex flex-col gap-3" onSubmit={(e) => handleItem(e)}>
                <section className="flex flex-col">
                    <label className="absolute text-xs mx-3 my-2 text-white font-bold">Enter any text</label>
                    <input 
                        className="outline-transparent border-transparent rounded-xl text-white p-3 pt-7 bg-[#58A399]"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        required
                    />
                </section>
                <button className="outline-transparent border-transparent font-bold rounded-xl p-3 bg-[#58A399] text-white">Submit</button>
                <button
                    type="button" 
                    onClick={() => handleDelete()} 
                    className={`${items.length === 0 ? 'bg-[#8dc3bb]':'bg-[#58A399]'}  outline-transparent border-transparent font-bold rounded-xl p-3 text-white`}
                    disabled={items.length === 0}
                    >Delete All</button>

            </form>
        </div>
    )
}