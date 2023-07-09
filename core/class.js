var User = /** @class */ (function () {
    function User(email, name) {
        this.email = email;
        this.name = name;
    }
    Object.defineProperty(User.prototype, "getEmail", {
        get: function () {
            return this.email;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "setEmail", {
        set: function (email) {
            this.email = email;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
var myUser = new User("user@gmail.com", "User");
console.log(myUser.getEmail);
console.log(myUser);
