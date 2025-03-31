import {ItemProps} from "../types"

export const Item = ({item, onDeleteItem, onToggleItem }: ItemProps) => {
    return (
      <li className="flex items-center gap-3">
      <input
        className="h-8 w-8 accent-[#e5771f]"
        type="checkbox"
        checked={item.packed}
        onChange={() => onToggleItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button className="cursor-pointer bg-transparent border-none text-[1.8rem] p-2 translate-y-[2px]" onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
    );
}