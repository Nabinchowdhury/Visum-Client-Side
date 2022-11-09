

const jwtToken = async (currentUser) => {
    fetch("https://b6a11-service-review-server-side-nabinchowdhury.vercel.app/jwt", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(currentUser)

    })
        .then(res => res.json())
        .then(data => {
            localStorage.setItem("serviceReview-token", data.token)
        })
        .catch(err => console.log(err))
};

export default jwtToken;