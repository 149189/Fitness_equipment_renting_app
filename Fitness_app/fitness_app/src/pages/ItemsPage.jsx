function ItemsPage() {
    const items = [{ name: 'Item 1' }, { name: 'Item 2' }]; // Dummy data
  
    return (
      <div>
        <h2>Items</h2>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {item.name}
              <button>Buy</button>
              <button>Sell</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default ItemsPage;
  