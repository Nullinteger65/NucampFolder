class App extends React.Compnent {

    constructor(props) {
      super(props);
  
      this.state = {
        countries: [
          {
            id: 0,
            name: 'Greece',
            continent: 'Europe'
          },
          {
            id: 1,
            name: 'Laos',
            continent: 'Asia'
          },
          {
            id: 2,
            name: 'Zambia',
            continent: 'Africa'
          },
          {
           id: 3,
           name: 'sydney',
           continent: 'Australia'
          } 
          ],
            
      };
    }
  
    renderCountries(countries) {
      return (
        <div>
          {countries.map(country => <div key={country.id}>{country.name} - {country.continent}</div>)}
        </div>
      );
    }
    
    render() {
      return (
        <div>
          <h1 class = "title"> My Travel Bucket List</h1>
            {this.renderCountries(this.state.countries)}
        </div>
      );
    }
  }
  
  ReactDOM.render(<App />, document.getElementById('root'));