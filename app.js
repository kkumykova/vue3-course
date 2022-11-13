// Creating and Connecting Vue App Instances

// pass an obj to createApp() to configure the app's options (e.g.:data)
const app = Vue.createApp({
    data() { // the value stored in the data property is a function
        return { // the data function always return an object

            courseGoal: "Finish the course and learn Vue!"

        }; 
    }

}); 

app.mount("#user-goal"); // connect Vue app to the HTML section you want to manipulates