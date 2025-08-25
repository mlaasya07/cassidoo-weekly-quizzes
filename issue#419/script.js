// script.js for my sweet sweet restaurant hehe
let orders = [];
let occupiedTables = new Set();

function summarizeOrders(orders) {
    const summary = {};

    orders.forEach(order => {
        const tableNumber = order.tableNumber;
        const items = order.items;

        if (!summary[tableNumber]) {
            summary[tableNumber] = {};
        }

        items.forEach(item => {
            const itemName = item.name;
            const itemCount = item.count;

            if (!summary[tableNumber][itemName]) {
                summary[tableNumber][itemName] = 0;
            }
            summary[tableNumber][itemName] += itemCount;
        });
    });

    return summary;
}

function formatOrderSummary(summary) {
    const formattedSummary = [];

    for (const table in summary) {
        const items = summary[table];
        const itemDescriptions = [];

        for (const item in items) {
            itemDescriptions.push(`${items[item]} ${item}`);
        }

        const lastItem = itemDescriptions.pop();
        const orderString = itemDescriptions.length > 0 
            ? `${itemDescriptions.join(', ')} and ${lastItem}` 
            : lastItem;

        formattedSummary.push(`Table ${table} ordered ${orderString}.`);
    }

    return formattedSummary.join('\n');
}

document.querySelectorAll('.increase').forEach(button => {
    button.addEventListener('click', () => {
        const servingCount = button.previousElementSibling;
        servingCount.textContent = parseInt(servingCount.textContent) + 1;
    });
});

document.querySelectorAll('.decrease').forEach(button => {
    button.addEventListener('click', () => {
        const servingCount = button.nextElementSibling;
        const currentCount = parseInt(servingCount.textContent);
        if (currentCount > 0) {
            servingCount.textContent = currentCount - 1;
        }
    });
});

document.getElementById('submitOrder').addEventListener('click', () => {
    const tableNumber = document.getElementById('tableNumber').value;
    const selectedItems = [];

    document.querySelectorAll('.food-item').forEach(item => {
        const itemName = item.querySelector('.serving-count').getAttribute('data-item');
        const itemCount = parseInt(item.querySelector('.serving-count').textContent);
        if (itemCount > 0) {
            selectedItems.push({ name: itemName, count: itemCount });
        }
    });

    if (tableNumber && selectedItems.length > 0) {
        orders.push({ tableNumber: parseInt(tableNumber), items: selectedItems });
        occupiedTables.add(tableNumber);
        
        const summary = summarizeOrders(orders);
        const formattedSummary = formatOrderSummary(summary);
        document.getElementById('orderSummary').textContent = formattedSummary;
        
        // Update occupied tables display
        document.getElementById('occupiedTables').textContent = Array.from(occupiedTables).join(', ');

        // Clear inputs
        document.getElementById('tableNumber').value = '';
        document.querySelectorAll('.serving-count').forEach(count => count.textContent = '0'); // Reset serving counts
    } else {
        alert('Please fill in all fields.');
    }
});
