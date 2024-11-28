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
                //     function() {
                //         console.log("Sleeping");
                //     }
                // };
    
                let anotherPerson = 
                {
                    name: "Jane",
                    age: 25,
                    city: "San Francisco",

                    eat : function()
                    {
                        console.log("Not Eating");
                    },

                    sleep() 
                    {
                        console.log("Sleeping");
                    }
                }

                function person(name, age, city)
                {
                    this.name = name;   // or just name 
                    this.age = age;     // or just age
                    this.city = city;   // or just city
                    eat = function()    // or just eat
                    {
                        console.log("Eating");
                    }

                    sleep() 
                    {
                        console.log("Sleeping");
                    }
                }
    
                const person1 = new person("Edgar", 19, "Oslo", "Eats", "Sleeps");

