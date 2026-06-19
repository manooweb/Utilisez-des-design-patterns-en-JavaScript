class UserContext {
    constructor() {
        this.states = [
            new AnonymousUserState(),
            new UserConnectedState()
        ]
        this.currentState = this.getInitialState();
    }

    getInitialState() {
        const user = new User();

        const [anonymousState, connectedState] = this.states;

        if (user.user) {
            connectedState.user = user.user
            return connectedState;
        }

        return anonymousState;
    }

    change(firstName, lastName) {
        const user = new User({
            firstName,
            lastName
        })

        this.currentState = this.states[1];
    }
}
