// Arrays Cheat Sheet


                let numbers = [1, 2, 3, 4, 5]; // Array of numbers
                console.log(numbers); // [1, 2, 3, 4, 5]

                numbers.push(6); // Add to the end of the array // [1, 2, 3, 4, 5, 6]
                numbers.unshift(0); // Add to the beginning of the array // [0, 1, 2, 3, 4, 5, 6]
                numbers.splice(2, 0, 1.5); // Add to the middle of the array // [0, 1, 1.5, 2, 3, 4, 5, 6]

                numbers.pop(); // Remove from the end of the array // [0, 1, 1.5, 2, 3, 4, 5]
                numbers.shift(); // Remove from the beginning of the array // [1, 1.5, 2, 3, 4, 5]
                numbers.splice(2, 1); // Remove from the middle of the array // [1, 1.5, 3, 4, 5]
                
                numbers.slice(1, 4); // [1.5, 3, 4] // Extract elements from an array

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


                for  ( let number of numbers ) // Loop through the array
                {
                    console.log(number);
                }

                numbers.forEach(number => console.log(number)) // Loop through the array


                numbers.join(", "); // "1, 1.5, 3, 4, 5" // Convert an array to a string

                numbers.sort(); // [1, 1.5, 3, 4, 5] // Sort an array
                numbers.reverse(); // [5, 4, 3, 1.5, 1] // Reverse an array


                const exampleString = "Example for URL Slug";
                const splitExample = exampleString.split(", "); // ["Example", "for", "URL", "Slug"] // Convert a string to an array
                const urlSlug = splitExample.join("-"); // "Example-for-URL-Slug" // Convert an array to a string


                numbers.every(number => number > 3); // false // Check if all elements pass a condition
                numbers.some(number => number > 3);  // true // Check if any element passes a condition
                numbers.filter(number => number > 3); // [4, 5] // Filter elements based on a condition
                numbers.map(number => number * 2); // [2, 3, 6, 8, 10] // Map elements to a new array
                numbers.reduce((total, number) => total + number); // 14 // Reduce an array to a single value


                const employees = 
                [
                    {id: 1, name: "John"},
                    {id: 2, name: "Doe"},
                    {id: 3, name: "Smith"}
                ]

                     
                console.log(employees.findIndex(function(employee){return employee.name === "Doe"})) // 1  // Find the index of an element


                console.log(employees.find(function(employee){return employee.name === "Doe"})) // {id: 2, name: "Doe"}  // Find an element
               

                console.log(employees.find(employee => employee.name === "Doe")); // {id: 2, name: "Doe"}  // Find an element but with arrow function

           
                const exampleArrayA = [1, 2, 3, 4, 5];
                const exampleArrayB = [6, 7, 8, 9, 10];
                const exampleArrayC = [11, 12, 13, 14, 15];

                const combinedArray = exampleArrayA.concat(exampleArrayB, exampleArrayC); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] // Combine arrays