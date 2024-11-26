//Control Flow Cheat Sheet

    // Basic

                let price = 110;
                let money = 100;

                const canBuy = money >= price;

    // If Statement

                Job = "Web Developer";

                if (Job === "Web Developer")
                {
                    console.log("I am a Web Developer");
                }
                else if (Job === "Designer")
                {
                    console.log("I am a Designer");
                }
                else
                {
                    console.log("I am a Student");
                }

    // Switch Statement

                Job2 = "Designer";

                switch (Job2)
                {
                    case "Web Developer":
                        console.log("I am a Web Developer");
                        break;
                    case "Designer":
                        console.log("I am a Designer");
                        break;
                    default:
                        console.log("I am a Student");
                }
                
    // For Loop

                let numbers = [1, 2, 3, 4, 5];

                //   let i = 0;
                //   console.log(numbers[i]);      1
                //   console.log(numbers[i++]);    2
                //   console.log(numbers[i++]);    3
                //   console.log(numbers[i++]);    4
                //   console.log(numbers[i++]);    5
                
                for (let i = 0; i < numbers.length; i++)
                {
                    console.log(numbers[i]);
                }
