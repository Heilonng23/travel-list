/* eslint-disable react/prop-types */
import { useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import Packing from "./components/Packing";
import Stats from "./components/Stats";
export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }

  function handleDelete(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleCheckbox(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleClearList() {
    const confirm = window.confirm("Do you wanna delete?");
    if (confirm) setItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItem} />
      <Packing
        items={items}
        onDeleteItem={handleDelete}
        onCheckbox={handleCheckbox}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
