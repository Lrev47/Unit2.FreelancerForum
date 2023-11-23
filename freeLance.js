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
q.innerHTML = freelancers