// Add your code here
function submitData(name, email) {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    })
        .then(response => response.json())
        .then(data => {
            // Append new ID to the DOM
            const idElement = document.createElement("p");
            idElement.textContent = `ID: ${data.id}`;
            document.body.appendChild(idElement);
        })
        .catch(error => {
            // Append error message to the DOM
            const errorMessage = document.createElement("p");
            errorMessage.textContent = `Error: ${error.message}`;
            document.body.appendChild(errorMessage);
        });
}