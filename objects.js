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