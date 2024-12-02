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
    
                const person1 = person("Edgar", 19, "Oslo");
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