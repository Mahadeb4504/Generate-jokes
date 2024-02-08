const jokeEl = document.getElementById("jokes");
const generateBtn = document.getElementById("btn")

async function generatejokes(){
    try {
        const response = await fetch("https://icanhazdadjoke.com/", {
            headers: {
                Accept: "application/json"
            }
        });
    
        const data = await response.json();
        console.log(data);
    
        jokeEl.textContent = data.joke;

        
        
    } catch (error) {
        console.log(error)
        
    }
}
generatejokes();
generateBtn.addEventListener('click', generatejokes);