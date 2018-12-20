import React from 'react';
import Button from '../Button/Button';
import { Modal, ModalContent } from '../Modal/Modal';

// App component

class App extends React.Component {

  constructor(props){
		super(props)
		this.state = {
			showModal: null,
		}
	}

	componentDidMount = () => {
		document.title = "Dynamic modals with react portals";
	}

	render(){

    const isModal = this.state.showModal;
		const modalText = <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a luctus nisi. Suspendisse dignissim pellentesque ipsum varius placerat. Proin varius vel quam at vestibulum. Suspendisse et purus id mauris malesuada congue lacinia non felis. Nam mauris turpis, tempus a lectus ac, gravida ornare dui. Suspendisse dui arcu, congue eu tempor ac, tincidunt non quam. Quisque ultricies nisl ligula, non mollis elit elementum congue.<br /><br /> Pellentesque malesuada eleifend tempor. Nulla tristique commodo arcu, euismod faucibus purus tincidunt ac. Vivamus vitae lectus egestas, molestie nisi sed, vehicula sapien.</p>;
    const modalDifferentText = <p>Sed gravida, nisi in pharetra dictum, mauris justo faucibus ligula, eu maximus nulla metus ut leo. Duis at tellus vitae diam ultrices auctor non nec nunc. Sed viverra dui aliquet justo eleifend iaculis.<br /><br /> Cras congue pulvinar tellus nec tincidunt. Praesent vitae dolor rhoncus, finibus odio id, convallis leo. Aenean venenatis eget justo id dapibus. Morbi tincidunt nulla ut odio suscipit, a pharetra elit imperdiet. Nunc iaculis metus nec euismod laoreet. Ut sed ornare ligula. Phasellus iaculis dapibus efficitur. In venenatis sem ut diam auctor hendrerit. <br /><br />Cras euismod tempus augue quis tempus. Curabitur vitae nisi placerat, venenatis leo id, varius arcu. Vestibulum iaculis elementum massa id laoreet. <br /><br />Pellentesque fringilla ligula et nisl ultrices, varius malesuada arcu luctus. Nulla viverra congue sodales.</p>;

		return(
      <section className="page-wrap">

        {isModal === 'modal-one' &&
          <Modal>
            <ModalContent show={this.state.showModal} handleClose={() => this.setState({ showModal: null }) } modalTitle="Modal Title" >
              {modalText}
            </ModalContent>
          </Modal>
        }
        
        
        {isModal === 'modal-two' &&
          <Modal>
            <ModalContent show={this.state.showModal} handleClose={() => this.setState({ showModal: null }) } modalTitle="Different modal title" >
              {modalDifferentText}
            </ModalContent>
          </Modal>
        }
   
        <main className="main-box">
          <h2 className="main-box__title">Dynamic modal component<span> with react portals</span></h2>
          
          <div className="button-wrap">
            <Button onClick={() => this.setState({ showModal: 'modal-one' }) }><span role="img" aria-label="open">🚀</span> Open Modal</Button>
            <Button onClick={() => this.setState({ showModal: 'modal-two' }) }><span role="img" aria-label="open">✌</span> Open different Modal</Button>
          </div>

        </main>	

      </section>

		)
	}
	
}

export default App;