function generateOrders() {
    const names = ["John Doe", "Jane Smith", "Alice", "Abdullah", "Osama", "Mohammed", "Abu Hosaiba", "Al Hilal Is Bullshit", "Ali", "Fatma", "Jana", "Monaya", "Sharif"];
    const items = ["Potatoes", "Pizza", "Burger", "Sodas", "Coffee", "Sandwich", "Cake", "Chocolate"];
    const orders = [];

    for (let i = 0; i < 200; i++) {
        const nameIndex = i % names.length; // Cycle through names
        const item1Index = i % items.length; // Cycle through items
        const item2Index = (i + 1) % items.length; // Ensure different item
        const orderQuantity1 = (i % 3) + 1; // Random quantities between 1 and 3
        const orderQuantity2 = ((i + 1) % 2) + 1; // Random quantities between 1 and 2

        orders.push({
            customerName: names[nameIndex],
            order: `${orderQuantity1} ${items[item1Index]}, ${orderQuantity2} ${items[item2Index]}`
        });
    }

    return orders;
}

const orders = generateOrders();

export default orders;
