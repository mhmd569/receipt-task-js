const menu = [
  { name: "Shawarma", price: 10 },
  { name: "Pizza", price: 15 },
  { name: "Pasta", price: 12 },
  { name: "Salad", price: 8 },
  { name: "Fries", price: 5 },
  { name: "Cola", price: 3 },
];
const receipts = [];

function generateOrder() {
  const numberOfItems = Math.floor(Math.random() * 5) + 1;
  const order = [];
  for (let i = 0; i < numberOfItems; i++) {
    const randomItem = menu[Math.floor(Math.random() * menu.length)];
    order.push(randomItem);
  }
  return order;
}

function calculateReceipt(order) {
  let subtotal = 0;
  order.forEach((item) => {
    subtotal += item.price;
  });

  const discount = subtotal > 50 ? subtotal * 0.1 : 0;

  const tip = subtotal * 0.15;

  const total = subtotal - discount + tip;

  return { order, subtotal, discount, tip, total };
}

function printReceipt(receipt) {
  console.log("Receipt Details:");
  receipt.order.forEach((item, index) => {
    console.log(`${index + 1}. ${item.name} - ${item.price}$`);
  });
  console.log(`Subtotal: ${receipt.subtotal.toFixed(2)}$`);
  console.log(`Discount: ${receipt.discount.toFixed(2)}$`);
  console.log(`Tip: ${receipt.tip.toFixed(2)}$`);
  console.log(`Total: ${receipt.total.toFixed(2)}$`);
  console.log("****************************");
}

function createReceipt() {
  const order = generateOrder();
  const receipt = calculateReceipt(order);
  receipts.push(receipt);
  printReceipt(receipt);
}

setInterval(() => {
  console.log("Generating a new receipt");
  createReceipt();
}, 5 * 60 * 1000);

setTimeout(() => {
  if (receipts.length >= 2) {
    console.log("Updating the second receipt");

    const secondReceipt = receipts[1];
    const newItem = menu[Math.floor(Math.random() * menu.length)];
    secondReceipt.order.push(newItem);

    const updatedReceipt = calculateReceipt(secondReceipt.order);
    receipts[1] = updatedReceipt;
    console.log("Updated Second Receipt:");
    printReceipt(updatedReceipt);
  }
}, 2 * 60 * 1000);

console.log("project starting");
