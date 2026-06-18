class User {
     constructor(firstName, lastName) {
        if (User.instance) {
            return User.instance
        }
        
        this._firstName = firstName
        this._lastName = lastName

         User.instance = this
     }

     get firstName() {
         return this._firstName
     }

     get lastName() {
         return this._lastName
     }

     get user() {
         return { firstName: this._firstName, lastName: this._lastName }
     }
}
