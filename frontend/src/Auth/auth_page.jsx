export default function auth_page() {
  return (
    <div className="container">
      <main>
        <section className="auth-container">
          <header>
            <h1>SIGN IN</h1>
          </header>
          <form>
            <label htmlFor="username">Enter your username</label>
            <input type="email" id="username" name="username" required />
            <label htmlFor="password">Enter your password</label>
            <input type="password" id="password" name="password" required />
            <button type="submit">Submit</button>
          </form>
          <div className="social-login">
            <button>Sign in with Google</button>
            <button>Sign in with Facebook</button>
          </div>
        </section>
        <footer>
          <a href="#" target="_blank">New to the website - Sign Up</a>
        </footer>
      </main>
    </div>
  );
}