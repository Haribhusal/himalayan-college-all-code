

let user = {
    username: "user123",
    role: "staff",
    isLoggedIn: true
}

switch (user.role) {
    case "user":
        console.log("Welcome User");
        break;
    case "staff":
        console.log("Welcome Staff")
        break;
    case "manager":
        console.log("Welcome Manager")
        break;
    case "admin":
        console.log("Welcome Admin")
        break;
    default:
        console.log("Welcome Guest")
}