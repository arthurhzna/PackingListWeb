import { useState } from "react";
import {PackingListProps} from "../types"
import { Item } from "./Item";

export const PackingList = ({items, onDeleteItem, onToggleItem, onClearList} : PackingListProps) =>{
    
    const [sortBy, setSortBy] = useState<string>("input");

    let sortedItems = items;

    if (sortBy === "input") {}

    if (sortBy === "description")
        sortedItems = items
          .slice()
          .sort((a, b) => a.description.localeCompare(b.description));
    
    if (sortBy === "packed")
    sortedItems = items
        .slice()
        .sort((a, b) => Number(a.packed) - Number(b.packed));
        
    return (
        <div className="bg-[#5a3e2b] text-[#ffebb3] py-16 flex flex-col items-center justify-between gap-8">
        <ul className="list-none w-4/5 overflow-scroll grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-3 justify-center content-start">
          {sortedItems.map((item) => (
            <Item
              item={item}
              onDeleteItem={onDeleteItem}
              onToggleItem={onToggleItem}
              key={item.id}
            />
          ))}
        </ul>
  
        <div>
          <select className="uppercase px-10 py-3 text-lg font-bold mx-2" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="input">Sort by input order</option>
            <option value="description">Sort by description</option>
            <option value="packed">Sort by packed status</option>
          </select>
          <button className="uppercase px-10 py-3 text-lg font-bold mx-2" onClick={onClearList}>Clear list</button>
        </div>
      </div>

    );

    
}