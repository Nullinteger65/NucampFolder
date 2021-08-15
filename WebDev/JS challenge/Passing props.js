class App extends React.Component {

    constructor(props) {
      super(props);
  
      this.state = {
        partyType: "birthday",
        entertainment: "clowns",
        venue: {
          name: "Polly's Party Palace",
          capacity: 120
        }
        bandName: "Those who Fear"
      };
    }
  
    render() {
      return (
        <div> 
            
            <party
        partyType={this.state.partytype}
        entertainment={this.state.entertainment}
        venue={this.state.venue}
        bandName={this.state.bandName}
          
        </div>
      );
    }
  }
// create/define a new React component name Party. in it have it
return a div that contains h3 tags surrounding the words part time!//

class Party extends React.component {
    constructor(props){
        super(props);
    }
    render(){
    return(
        <div>

            <h3>Party Time!</h3>
            <p>This {this.props.partyType} party will be held at {this.props.venue.name} with a maximum capacity of {this.props.venue.capacity}.
            </p>
            <p> 
                Featured Entertainment: {this.props.entertainment}!

            </p>
            <p>
                Live Performance by: {this.props.bandName}!!!
            </p>
        </div>
    )
}
}
  
  ReactDOM.render(<App />, document.getElementById('root'));