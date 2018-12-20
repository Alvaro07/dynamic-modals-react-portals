import React from 'react';
import Button from '../Button/Button';

// App component

class App extends React.Component {

	componentDidMount = () => {
		document.title = "Dynamic modals with react portals";
	}

	render(){
		return(
      <section className="page-wrap">


   
        <main className="main-box">
          <h2 className="main-box__title">Modal React Component</h2>
          
          <div className="button-wrap">
            <Button onClick={() => this.setState({ showModal: 'modal-one' }) }>🚀 Open Modal</Button>
            <Button onClick={() => this.setState({ showModal: 'modal-two' }) }>✌ Open different Modal</Button>
          </div>

        </main>	

      </section>

		)
	}
	
}

export default App;