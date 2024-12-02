// Objects Cheat Sheet

    // Object Creation

                // let person = 
                // {
                //     name: "John",                   // Property / Key
                //     age: 30,
                //     city: "New York",

                //     eat : function() {              // Behaviour / Method
                //         console.log("Eating");
                //     },
                //     sleep() {
                //         console.log("Sleeping");
                //     }
                // }

    // Factory Function

                function person(name,age,city)  // Constructor Function
                {
                    return {
                        name: name, // or just name
                        age: age,   // or just age
                        city: city, // or just city
                        eat() 
                        {
                            console.log("Eating");
                        },
                        sleep()
                        {
                            console.log("Sleeping");
                        }
                    }
                }
    
                const person1 = person("Edgar", 19, "Oslo");    // Create an object with the factory function on one line
                console.log(person1);

    // Constructor Function

                function Person(name, age, city) 
                {
                    this.name = name;       // this = {};
                    this.age = age;
                    this.city = city;
                    this.eat = function() 
                    {
                        console.log("Eating");
                    }
                    this.sleep = function() 
                    {
                        console.log("Sleeping");
                    }

                    return this;           // return the value of this
                }

                const person2 = new Person("John", 30, "New York");
                console.log(person2);

    // Value vs Reference

                let x = 10;
                let y = x;
                x = 20;
                console.log(x); // 20
                console.log(y); // 10   // Primitive Data Types are copied by value

                let a = { value: 10 };
                let b = a;
                a.value = 20;
                console.log(a); // 20
                console.log(b); // 20   // Reference Data Types are copied by reference

    // Object Methods

                let dog = 
                {
                    name: "Buddy",
                    sound: "Woof",
                    bark() 
                    {
                        console.log("BARK!!!");
                    }
                }
             
            // Object Enumeration

                // Output is an array
                console.log(Object.keys(dog));  // ["name", "sound", "bark"]
                console.log(Object.values(dog)); // ["Buddy", "Woof", [Function: bark]]
                console.log(Object.entries(dog)); // [["name", "Buddy"], ["sound", "Woof"], ["bark", [Function: bark]]]

                // Output is a string as loop through the object
                for (let key in dog) 
                {
                    console.log(key, dog[key]); // name Buddy, sound Woof, bark [Function: bark]
                }

                for (let entry of Object.entries(dog)) // ["name", "Buddy"], ["sound", "Woof"], ["bark", [Function: bark]]
                {
                    console.log(entry);
                }

                for (let value of Object.values(dog))  // Buddy, Woof, [Function: bark]
                {
                    console.log(value);
                }

            // Object Cloning

                let original = { name: "John" };
                let clone = Object.assign({}, original);
                console.log(clone); // { name: "John" }

                clone.name = "Doe";
                console.log(original); // { name: "John" }
                console.log(clone); // { name: "Doe" }

            // Math Objects

                Math.round(1.9); // 2
                Math.floor(1.9); // 1
                Math.ceil(1.1); // 2 
                Math.max(1, 2, 3, 4, 5); // 5
                Math.min(1, 2, 3, 4, 5); // 1
                Math.pow(2, 3); // 8
                Math.sqrt(16); // 4
                Math.random(); // Random number between 0 and 1

                const random = Math.floor(Math.random() * 10) + 1; // Random number between 1 and 10

            // String Objects

                const name = "John";
                console.log(typeof name); // string

                const anotherName = new String("John");
                console.log(typeof anotherName); // object

                console.log(name.length); // 4
                console.log(name.toUpperCase()); // JOHN
                console.log(name.toLowerCase()); // john
                const doesInclude = name.includes("Jo"); // true