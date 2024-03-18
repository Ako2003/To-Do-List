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

    return (
        <div>
            <form onSubmit={(e) => handleItem(e)}>
                <input 
                    className="border border-black rounded-s p-3"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    required
                />
                <button className="border border-black p-3">Submit</button>
            </form>
        </div>
    )
}