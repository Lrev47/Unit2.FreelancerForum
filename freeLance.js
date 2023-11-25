// this is the array that the average price funtion and display will be pulling from  
const freelancers = [
    { name: "Gary", price: 25, occupation: "gardener" },
    { name: "Mr. Krabs", price: 51, occupation: "Resturant Owner" },
];

// This array has a list of freelancers that will be appended to the other array
const moreFreeLancers = [ 
    { name: "Pearl", price: 43, occupation: "Cheerleader" },
    { name: "Squidward", price: 81, occupation: "Artist" },
    { name: "smitty werbenjagermanjensen", price: 43, occupation: "Hes number 1" },
    { name: "hash slinging slasher", price: 76, occupation: "programmer" },
    { name: "Doodle Bob", price: 47, occupation: "teacher" },
    { name: "Kevin", price: 72, occupation: "driver" },
];
// this funtion iterates through the freelancers array and then keeps a running total of the price
// the total is then divided by the array length to get the average.
function averagePrice (array){
    let sum = 0
    array.forEach(freelancer=> {
        sum = sum+freelancer.price
    })
   return  sum / array.length;
};

// invoking the averagePrice function with the freelancers array as the paramater.
const average = averagePrice(freelancers)

// taking the value of average and is displaying it in the span with the id of average
const p = document.querySelector("#average")
p.innerHTML = average

const q = document.querySelector("#TableDiv")
freelancers.forEach((freelancer, index) => {
    // Create a new list item
    const listItem = document.createElement("li");
    listItem.id = `item${index + 1}`;

    // Update the list item
    listItem.textContent = `Name: ${freelancer.name}, Price: ${freelancer.price}, Occupation: ${freelancer.occupation}`;

    // Append the list
    q.querySelector("ul").appendChild(listItem);
});
let index = 0;
let intervalId;

// Function to add a new freelancer to the freelancers array
function addFreelancer() {
    const newFreelancer = moreFreeLancers[index];
    if (newFreelancer) {
        freelancers.push(newFreelancer);
        console.log('Added:', newFreelancer);
        index++;
        updateTable(); // Update the table after adding a freelancer
    } else {
        console.log('No more freelancers to add.');
        clearInterval(intervalId);
    }
}

// Function to update the TableDiv with the current freelancers array
// ... (your existing code)

// Function to update the TableDiv with the current freelancers array and refresh the average
function updateTable() {
    const tableDiv = document.querySelector("#TableDiv");
    
    // Clear existing content
    tableDiv.innerHTML = "";
    
    // Create a new table
    const table = document.createElement("table");
    
    // Create header row
    const headerRow = table.insertRow(0);
    const headers = ["Name", "Price", "Occupation"];
    headers.forEach(headerText => {
        const th = document.createElement("th");
        th.textContent = headerText;
        headerRow.appendChild(th);
    });

    // Create rows with freelancer data
    freelancers.forEach(freelancer => {
        const row = table.insertRow();
        Object.values(freelancer).forEach(value => {
            const cell = row.insertCell();
            cell.textContent = value;
        });
    });

    // Append the table to the TableDiv
    tableDiv.appendChild(table);

    // Update the average and display it
    const average = averagePrice(freelancers);
    const p = document.querySelector("#average");
    p.innerHTML = average;
}

// Function to start the interval
function startAddingFreelancers() {
    // Set an interval to add a new freelancer every 2 seconds
    intervalId = setInterval(function () {
        addFreelancer();
        updateTable(); // Update the table and average after adding a freelancer
    }, 2000);
}

// Invoke the function manually
startAddingFreelancers();
