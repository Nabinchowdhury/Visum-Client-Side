

const jwtToken = async (currentUser) => {
    fetch("http://localhost:5000/jwt", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(currentUser)

    })
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            localStorage.setItem("serviceReview-token", data.token)



        })
        .catch(err => console.log(err))
};

export default jwtToken;