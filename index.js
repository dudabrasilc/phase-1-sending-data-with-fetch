// Add your code here

// fetch(destinationURL, configurationObject)

// const configurationObject = {
//     method: 'POST',
//     headers: {"Content-Type": "application/json",
//               "Accept": "application/json"
//     },
//     body: JSON.stringify({
//         dogName: 'cutie',
//         dogBreed: 'pomeranian'
//     })
// }

// fetch("http://localhost:3000/dogs", configurationObject)
// .then(response => response.json())
// .then(data => console.log(data))

// ------------USING CATCH--------------

//     const configurationObject = {
//         headers: {"Content-Type": "application/json",
//                   "Accept": "application/json"
//         },
//         body: JSON.stringify({
//             dogName: 'cutie',
//             dogBreed: 'pomeranian'
//         })
//     }    


// fetch("http://localhost:3000/dogs",
// configurationObject)
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(error => {
//         alert("Bad things! Ragnarok!")
//         console.log(error.message)})




// ----------------- LAB -----------------



function submitData(name, email) {
   return fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {"Content-Type": "application/json",
              "Accept": "application/json"},
    body: JSON.stringify({
          name,
          email
    })          
    })
    .then(response => response.json())
    .then(data => {
        document.body.innerHTML = data.id
    })
    .catch(error => {
        document.body.innerHTML = error.message
    })
}

submitData()