import { useState } from "react";
import {FormProps} from "../types"

export const Form = ({onAddItems}: FormProps) => {

    const [description, setDescription] = useState<string>("");
    const [quantity, setQuantity] = useState<number>(1);

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
    
        if (!description) return;
    
        const newItem = { description, quantity, packed: false, id: Date.now() };
    
        onAddItems(newItem);
    
        setDescription("");
        setQuantity(1);
      }

      return (
        <form className="bg-[#e5771f] py-11 flex items-center justify-center gap-2" onSubmit={handleSubmit}>
          <h3>What do you need for your 😍 trip?</h3>
          <select
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          >
            {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
              <option value={num} key={num}>
                {num}
              </option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Item..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="placeholder:text-black/50"
          />
          <button className="uppercase bg-[#76c7ad]" >Add</button>
        </form>
    );

};

