export function Register() {
    return <div>
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">Wow chat</span>
                <span className="title">Register</span>
                <form>
                    <input type="text" placeholder="display name"/>
                    <input type="text" placeholder="email"/>
                    <input type="text" placeholder="password"/>
                    <input type="file" />
                    <button>Sign up</button>
                </form>
                <p>You do have an account?</p>
                <a>Login</a>
            </div>
        </div>
    </div>
}