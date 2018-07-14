export const Validations = {
    User: {
        required: "user details are required",
        userNotFound: {
            required: "logged in user not found"
        },
        isAdmin: {
            required: "You do not have admin privileges!"
        },
        alreadyLoggedIn: {
            required: "user already logged in!"
        },
        username: {
            required: "username or email can not be left blank",
            minLength: "username should be atleast 5 letters long"
        },
        name: {
            required: "name can not be left blank"
        },
        email: {
            required: "email can not be left blank",
            invalid: "email is invalid",
        },
        city: {
            required: "city can not be left blank"
        },
        password: {
            required: "password can not be left blank",
            minLength: "password should be atleast 6 letters long"
        }
    },
    Log: {
        required: "log details are required",
        id: {
            required: "id can not be left blank"
        },
        sessionId: {
            required: "session id can not be left blank"
        },
        url: {
            required: "url can not be left blank"
        },
        request: {
            required: "request can not be left blank"
        },
        response: {
            required: "response can not be left blank"
        }
    }
}