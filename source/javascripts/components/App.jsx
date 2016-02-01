/*jshint esnext: true */

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Middleman React boilerplate</h1>

        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/about">About</Link></li>

          {this.props.children}
        </ul>
      </div>
    );
  }
}
