const init = () => {
    // get the form elememnt
    const inputForm = document.querySelector("form");
    
    // add the event listner
    inputForm.addEventListener("submit", (event)=> {
        event.preventDefault();
        //console.log(event);-an event is logged but thereis quite stored..we need to get the value of whatever the user enetered.
        // we are accessing the input element
        const input = document.querySelector("input#searchByID")

        //console.log(input.value);

    //    Make sure everything is working
         fetch(`http://localhost:3000/movies/${input.value}`)
         .then((response) => response.json())
         .then((data) => {
            //console.log(data);
            // display the fetched data on the page
            // acess the DOM and store the two elements in js
            const title = document.querySelector("section#movieDetails h4");
            const summary = document.querySelector("section#movieDetails p");

            // change the contenets of our elements based on the retrieved data
            title.innnerText = data.title;
            summary.innnerText = data.summary;
            console.log(data);
         });

    });
};

document.addEventListener("DOMContentLoaded", init);

