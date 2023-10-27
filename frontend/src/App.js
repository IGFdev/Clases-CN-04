import { Component } from 'react';

class App extends Component {
  constructor(){
    super();

    this.state = {
      usersData: {}
    }
  }

  async fetchApi(endpoint){
    
  }


  async componentDidMount() {
    try {
      const response = await fetch('https://randomuser.me/api/?results=5');
      const data = await response.json();

      this.setState({
        usersData: data
      });

    } catch (error) {
      console.error(error);;
    }
  }


  render() {
    return (
      <div>
        {
          this.state.usersData.results?.length > 0 &&
          this.state.usersData.results.map((userData, index) => (
            <h1 key={index}>{userData.name.first}</h1>
          ))
        }
      </div>
    )
  }
}

// module.exports = App;
export default App;
