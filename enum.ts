enum Role {
    users,
    admin
}

type user = {
    email : string,
    role : Role
}


const user1: user  = {
    email: "doe@gmail.com",
    role : Role.users
}

const user2: user = {
    email : "john@gmail.com",
    role : Role.admin
}