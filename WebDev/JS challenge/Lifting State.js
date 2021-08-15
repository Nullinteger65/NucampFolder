 

class App extends React.Component {
  
    constructor(props) {
      super(props);
      this.state = {
        bootcampName: "Nucamp 💻"
      };
    }
    
    render() {
      return(<Welcome name={this.state.bootcampName} />
    );
    }
  }
  
  function Welcome({name}) {
    return (
      <h1>Welcome to {name}! </h1>
    );
  }
  
  ReactDOM.render(<App />, document.getElementById('root'));