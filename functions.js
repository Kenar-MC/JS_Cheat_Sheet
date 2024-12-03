// Functions Cheat Sheet

         // Function Declaration

                    function sayHi() 
                    {
                        console.log("Hello1");   // Function declaration
                    }

                    sayHi(); // Hello


                    let sayHi2 = function() 
                    {
                        console.log("Hello2");   // Anonymous function expression
                    }

                    sayHi2(); // Hello


                    let sayHi3 = function sayHello() 
                    {
                        console.log("Hello3");   // Named function expression
                    }

                    sayHi3(); // Hello

                    let sayHi4 = () => console.log("Hello4"); // Arrow function

                    sayHi4(); // Hello
                
        // Hoisting

                    sayHi5(); // Hello

                    function sayHi5() 
                    {
                        console.log("Hello5");
                    }

        // Arguments

                    function multiply()
                    {
                        let total = 1;
                        for (let value of arguments) 
                        {
                            total *= value;
                        }
                        return total;
                    }

                    console.log(multiply(2, 3, 4)); // 24

        // Rest Operator

                    function multiply2(multiplier, ...theArgs)      // Make your calculations on the copied array instead of the original
                    {
                        return theArgs.map(x => multiplier * x);
                    }

                    let arr = multiply2(2,   1, 2, 3);
                    console.log(arr); // [2, 4, 6]

        // Default Parameters

                    function greet(name = "John")                   // If empty argument is passed, default value is used
                    {
                        return `Hello ${name}`;
                    }

                    console.log(greet()); // Hello John
            
        // Getters and Setters

                    const person =  // Getter and setter
                    {
                        firstName: "John",
                        lastName: "Doe",
                        get fullName()                                         //      
                        {
                            return `${person.firstName} ${person.lastName}`;
                        },
                        set fullName(value) 
                        {
                            const parts = value.split(" ");
                            this.firstName = parts[0];
                            this.lastName = parts[1];
                        }
                    }

                    console.log(person.fullName); // John Doe
                    person.fullName = "Jane Smith";
                    console.log(person.fullName); // Jane Smith

        // Try and Catch

                    const person2 = { name: "John" };
                    try 
                    {
                        const name = person2.name.toUpperCase();
                        console.log(name);
                    } 
                    catch (error) 
                    {
                        console.log("An error occurred");
                    }

        // Throw

                    const person3 = { name: "John" };
                    try 
                    {
                        const name = person3.name.toUpperCase();
                        if (!name) throw "Name is empty";
                        console.log(name);
                    } 
                    catch (error) 
                    {
                        console.log(error);
                    }

        // Let vs Var

                    function start()
                    {
                        for (let i = 0; i < 5; i++)         // let is block scoped
                        {
                            console.log(i);
                        }
                        console.log(i); // ReferenceError: i is not defined
                    }

                    start();

                    function start2()
                    {
                        for (var i = 0; i < 5; i++)         // var is function scoped
                        {
                            console.log(i);
                        }
                        console.log(i); // 5
                    }

        // This

                    const person4 =
                    {
                        name: "John",
                        walk() 
                        {
                            console.log(this.name);
                        }
                    }

                    person4.walk(); // John

                    const walk = person4.walk;
                    walk(); // undefined