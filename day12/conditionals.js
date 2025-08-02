


let user = {
    username: "user123",
    role: "admin",
    isLoggedIn: true
}

if (user.isLoggedIn) {
    console.log("You can go to Dashboard Page")

    if (user.role == "admin") {
        console.log("Welcome to admin page")
    } else if (user.role == "staff") {
        console.log("Welcome to Staff Page")
    } else if (user.role == "user") {
        console.log("Welcome User")
    }

} else {
    console.log(" Please Login")
}