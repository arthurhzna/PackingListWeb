import { useState } from 'react'
import {Item} from "../types"
import {Logo} from "../components/Logo"
import {Form} from "../components/Form"
import {PackingList} from "../components/PackingList"
import {Stats} from "../components/Stats";


const App = () => {
    const [items, setItems] = useState<Item[]>([])

  function handleAddItems(item: Item): void {
      setItems((items) => [...items, item]);
  }
  function handleDeleteItem(id: number): void {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id: number): void {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList(): void {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );

    if (confirmed) setItems([]);
  }
  return(
  <div className="w-full h-screen grid grid-rows-[auto_auto_1fr_auto]">
    <Logo/>
    <Form onAddItems={handleAddItems}/ >
    <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
    />
    <Stats items={items} />
  </div>);
}


export default App
