//  Operators Cheat Sheet

    // Arithmetic Operators

                let addition = 1 + 1;
                let subtraction = 1 - 1;
                let multiplication = 1 * 1;
                let division = 1 / 1;
                let remainder = 5 % 2;
                
                let increment = 1;
                increment++;    // after the variable
                ++increment;    // before the variable
                
                let decrement = 1;
                decrement--;    // after the variable
                --decrement;    // before the variable

    // Assignment Operators

                let x = 1; // Assigns the value 1 to x
                x += 1; // Adds 1 to x
                x -= 1; // Subtracts 1 from x
                x *= 1; // Multiplies x by 1
                x /= 1; // Divides x by 1
                x %= 1; // Assigns the remainder of dividing x by 1 to x
                
    // Comparison Operators   

                let numGreaterThan = 2 > 1; // true
                let numLessThan = 1 < 2;    // true

                let greaterThanOrEqual = 1 >= 1; // true
                let lessThanOrEqual = 1 <= 1;    // true

    // Equality Operators

                // Truthy

                    let equal = 1 == 1; // true
            
                // Strict Equality  

                    let strictEqual = 1 === 1; // true
                    let notStrictEqual = 1 !== 1; // false

    // Ternary Operator

                let age = 18;
                let canVote = (age >= 18) ? "Yes" : "No"; // Yes

                let points = 90;
                let type = (points > 100) ? "Gold" : (points > 90) ? "Silver" : "Bronze"; // Silver

    // Logical Operators

                let andVariable = true && true; // true
                let orVariable = true || false; // true
                let notVariable = !true; // false
        
                // Ternary and Logical Operator Mix

                    let personAge = 18;
                    let hasCar = true;
                    let canDrive = personAge >= 16 && hasCar; // true

                    let a = null;
                    const result1 = a ?? "default value"; // "default value"
                    const result2 = (a !== null && a !== undefined) ? a : "default value"; // "default value"

                    const result3 = a || "default value"; // "default value"
                    const result4 = (a !== null && a !== undefined) ? a : "default value"; // "default value"
    
    // Logical Operators with Non-Boolean Values

                false || `Hello`; // "Hello"
                false || 1; // 1
                
                // Falsy values are short-circuited
                false || 1 || 2; // 1
                false || 0 || 2; // 2
                false || undefined || 2; // 2
                false || null || 2; // 2
                false || "" || 2; // 2
                
                // Truthy values are short-circuited

                    true || 1; // true
                    true || `Hello`; // true
        
        // Bir şeyler ekleme