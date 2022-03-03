function submitData(userName, userEmail){
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail,
        })
    })
    .then(response => response.json())
    .then(object => document.body.innerHTML = object.id)
    .catch(function (error) {
        alert("Unauthorized Access");
        document.body.innerHTML = error.message;
    })
}

// const userData = {
//     userName: "Byron",
//     userEmail: "Poodle",
// };

// const submitData = {
//     method: "Post",
//     headers: {
//         "Content_Type": "application/json",
//         Accept: "application/json"
//     },
//     body: JSON.stringify(userData),
// };

// fetch("http://localhost:3000/users", submitData)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (object) {
//         console.log(object);
//     // .catch(function (error) {
//     //     alert("Bad things! Ragnarők!");
//     //     console.log(error.message);
//     });


//-----------------------------------
// const formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle",
// };

// const configurationObject = {
//     method: "Post",
//     headers: {
//         "Content_Type": "application/json",
//         Accept: "application/json"
//     },
//     body: JSON.stringify(formData),
// };

// fetch("http://localhost:3000/dogs", configurationObject)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (object) {
//         console.log(object);
//     // .catch(function (error) {
//     //     alert("Bad things! Ragnarők!");
//     //     console.log(error.message);
//     })