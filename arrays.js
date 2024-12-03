// Arrays Cheat Sheet

                let numbers = [1, 2, 3, 4, 5]; // Array of numbers
                console.log(numbers); // [1, 2, 3, 4, 5]

                numbers.push(6); // Add to the end of the array // [1, 2, 3, 4, 5, 6]
                numbers.unshift(0); // Add to the beginning of the array // [0, 1, 2, 3, 4, 5, 6]
                numbers.splice(2, 0, 1.5); // Add to the middle of the array // [0, 1, 1.5, 2, 3, 4, 5, 6]
                numbers.pop(); // Remove from the end of the array // [0, 1, 1.5, 2, 3, 4, 5]
                numbers.shift(); // Remove from the beginning of the array // [1, 1.5, 2, 3, 4, 5]
                numbers.splice(2, 1); // Remove from the middle of the array // [1, 1.5, 3, 4, 5]

                numbers.indexOf(3); // 4 // Find the index of an element
                numbers.lastIndexOf(3); // 4 // Find the last index of an element

                numbers.includes(3); // true // Check if an element exists in an array
                numbers.includes(10); // false


                while (numbers.length > 0) 
                {
                    console.log(numbers.pop());     // Removes all elements from the array
                }

                numbers.length = 0; // Removes all elements from the array

                numbers.splice(0, numbers.length); // Removes all elements from the array

                numbers = []; // Removes all elements from the array
                
                console.log(numbers); // []


                const employees = 
                [
                    {id: 1, name: "John"},
                    {id: 2, name: "Doe"},
                    {id: 3, name: "Smith"}
                ]

                     
                console.log(employees.findIndex(function(employee){return employee.name === "Doe"})) // 1  // Find the index of an element


                console.log(employees.find(function(employee){return employee.name === "Doe"})) // {id: 2, name: "Doe"}  // Find an element
               

                console.log(employees.find(employee => employee.name === "Doe")); // {id: 2, name: "Doe"}  // Find an element but with arrow function

           