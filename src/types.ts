export interface Item{
    id:number;
    description: string;
    quantity:number;
    packed: boolean
}

export interface FormProps {
    onAddItems: (Item: Item) => void 
}

export interface PackingListProps{
    items: Item[];
    onDeleteItem: (id: number) => void; 
    onToggleItem: (id:number) => void; 
    onClearList: () => void 
}

export interface ItemProps{
    item: Item
    onDeleteItem: (id: number) => void; 
    onToggleItem: (id:number) => void;
}

export interface StatsProps{
    items : Item[]
}