const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "CDMX",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
   ]

   console.log(explorers)

   console.log("Ejercicio 2.1")
   explorers.forEach(explorer => console.log(explorer.name))


   console.log("Ejercicio 2.2")
   explorers.forEach(item => console.log(item.stack))

   console.log("Ejercicio 2.3")
   const explorer_stacks = explorers.map(my_explorers_in_list => my_explorers_in_list.stack);
   console.log(explorer_stacks)

   console.log("Ejercicio 2.4")
   const explorers_with_js = explorers.filter(my_explorers_in_list => my_explorers_in_list.stack.includes("js"))
   console.log(explorers_with_js)

   console.log("Ejercicio 2.5")
   const first_explorer_in_cdmx = explorers.find(my_explorer_in_list => my_explorer_in_list.city === "CDMX")
   console.log(first_explorer_in_cdmx)