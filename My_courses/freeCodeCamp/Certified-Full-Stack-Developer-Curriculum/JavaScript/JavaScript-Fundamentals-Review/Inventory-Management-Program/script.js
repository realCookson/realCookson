let inventory = [];

inventory.push({ name: "flour", quantity: 1 }, { name: "sugar", quantity: 1 });

// example findProductIndex("flour");
function findProductIndex(productName) {
  productName = productName.toLowerCase();
  let productIndex;
  for (let obj of inventory) {
    if (obj.name === productName) {
      productIndex = inventory.indexOf(obj);
    }
  }
  if (productIndex >= 0) {
    return productIndex;
  } else {
    return -1;
  }
}

//example addProduct({name: "FLOUR", quantity: 5})
function addProduct(productObject) {
  let addProductResult = ``;
  productObject.name = productObject["name"].toLowerCase();
  if (findProductIndex(productObject.name) >= 0) {
    inventory[findProductIndex(productObject.name)].quantity +=
      productObject.quantity;
    addProductResult = console.log(`${productObject.name} quantity updated`);
    return addProductResult;
  } else {
    inventory.push(productObject);
    addProductResult = console.log(`${productObject.name} added to inventory`);
    return addProductResult;
  }
}

//example removeProduct("FLOUR", 5)
function removeProduct(productName, productQuantity) {
  let removeProductResult = ``;
  productName = productName.toLowerCase();
  if (findProductIndex(productName) >= 0) {
    if (
      inventory[findProductIndex(productName)].quantity - productQuantity >
      0
    ) {
      inventory[findProductIndex(productName)].quantity -= productQuantity;
      removeProductResult = console.log(
        `Remaining ${productName} pieces: ${
          inventory[findProductIndex(productName)].quantity
        }`
      );
      return removeProductResult;
    } else if (
      inventory[findProductIndex(productName)].quantity - productQuantity ===
      0
    ) {
      inventory.splice(findProductIndex(productName), 1);
    } else {
      removeProductResult = console.log(
        `Not enough ${productName} available, remaining pieces: ${
          inventory[findProductIndex(productName)].quantity
        }`
      );
      return removeProductResult;
    }
  } else {
    removeProductResult = console.log(`${productName} not found`);
    return removeProductResult;
  }
}

// Tests
console.log(findProductIndex("flour"));
console.log(findProductIndex("wood"));
console.log(findProductIndex("sugar"));

console.log(addProduct({ name: "FLOUR", quantity: 5 }));
