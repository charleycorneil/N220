let todoItems = [];

function addItem() {
  const itemInput = document.getElementById("item");
  const itemText = itemInput.value.trim();

  if (itemText) {
    todoItems.push(itemText);

    itemInput.value = "";

    const listElement = document.getElementById("list");
    listElement.innerHTML = todoItems
      .map((item) => `<li>${item}</li>`)
      .join("");
  }
}

function summarizeList() {
  const summaryElement = document.getElementById("summary");

  const totalItems = todoItems.length;
  const firstItem = totalItems > 0 ? todoItems[0] : "";
  const lastItem = totalItems > 0 ? todoItems[totalItems - 1] : "";

  summaryElement.innerHTML = `
        Total Items: ${totalItems}<br />
        First Item: ${firstItem}<br />
        Last Item: ${lastItem}
    `;
}
