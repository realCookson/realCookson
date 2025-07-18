let lunches = [];

function addLunchToEnd (lunches, str) {
    lunches.push(str);
    console.log(`${str} added to the end of the lunch menu.`);
    return lunches;
}

function addLunchToStart (lunches, str) {
    lunches.unshift(str);
    console.log(`${str} added to the start of the lunch menu.`);
    return lunches;
}

function removeLastLunch (lunches) {
    const deletedLastLunchItem = lunches.pop();
    if (lunches.length > 0 && lunches !== undefined) {
        console.log(`${deletedLastLunchItem} removed from the end of the lunch menu.`);
    } else if (lunches.length === 0) {
        console.log(`No lunches to remove.`);
    }
    return lunches;
}

function removeFirstLunch (lunches) {
    const deletedFirstLunchItem = lunches.shift();
    if (lunches.length > 0 && lunches !== undefined) {
        console.log(`${deletedFirstLunchItem} removed from the start of the lunch menu.`);
    } else {
        console.log(`No lunches to remove.`);
    }
    return lunches;
}

function getRandomLunch (lunches) {
    if (lunches.length > 0 && lunches !== undefined) {
        const randomIndex = Math.floor(Math.random() * lunches.length);
        const randomLunch = lunches[randomIndex];
        console.log(`Randomly selected lunch: ${randomLunch}`);
    } else {
        console.log(`No lunches available.`);
    }
}

function showLunchMenu (lunches) {
    if (lunches.length > 0 && lunches !== undefined) {
        console.log(`Menu items: ${lunches.join(", ")}`);
    } else {
        console.log(`The menu is empty.`);
    }
}

addLunchToEnd(lunches, "Tacos");

addLunchToEnd(["Pizza", "Tacos"], "Burger");

addLunchToStart(lunches, "Sushi");

addLunchToStart(["Burger", "Sushi"], "Pizza");

removeLastLunch(["Stew", "Soup", "Toast"]);

removeLastLunch(["Sushi", "Pizza", "Noodles"]);

removeFirstLunch(["Salad", "Eggs", "Cheese"]);

removeFirstLunch(["Sushi", "Pizza", "Burger"]);

showLunchMenu(["Greens", "Corns", "Beans"]);

showLunchMenu(["Pizza", "Burger", "Fries", "Salad"]);
