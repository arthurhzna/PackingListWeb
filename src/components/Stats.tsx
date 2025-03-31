import {StatsProps} from "../types"

export const Stats= ({items} : StatsProps) => {

    if (!items.length)
        return (
          <p className="bg-[#76c7ad] text-center font-bold py-8 ">
            <em>Start adding some items to your packing list 🚀</em>
          </p>
        );
    
      const numItems = items.length;
      const numPacked = items.filter((item) => item.packed).length;
      const percentage = Math.round((numPacked / numItems) * 100);
    
      return (
        <footer className="bg-[#76c7ad] text-center font-bold py-8 ">
          <em>
            {percentage === 100
              ? "You got everything! Ready to go ✈️"
              : ` 💼 You have ${numItems} items on your list, and you already packed ${numPacked} (${percentage}%)`}
          </em>
        </footer>
      );
}