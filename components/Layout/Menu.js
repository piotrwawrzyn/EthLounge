import React, { Component } from 'react'
import { Button, Menu, Image, Icon, Grid, Modal, Header } from 'semantic-ui-react'
import { connect } from 'react-redux';
import web3 from '../../ethereum/web3';
import Blockies from 'react-blockies';
import EthLounge from '../../ethereum/EthLounge';
import store from '../../redux/store';
import { Sleep } from '../../helpers/Sleep';
import ShortEthAddress from '../../helpers/ShortEthAddress';

class Item {
    constructor(token, amount, position) {
        this.token = token;
        this.amount = amount;
        this.initialAmount = amount;
        this.position = position;
    }
}

class MenuExampleSizeLarge extends Component {

   constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.state = {loading: false, account: '', signedIn: false, items: {}, popupOpen: false, readyToGenerateRightMenu: false}; 
   }

   async componentDidMount() {
        // Restore session from local storage
        const account = window.localStorage.getItem('eth-account', account);
        const openSessionAccounts = await web3.eth.getAccounts();
        
        if (account && openSessionAccounts.length > 0) {
            store.dispatch({ type: 'LOG_IN', account: account });
            this.setState({signedIn: true, account: account})
            this.getItems(account);
        }
        else
        store.dispatch({ type: 'LOG_OUT' }); 
        
        this.setState({readyToGenerateRightMenu: true})
   }

    generateRightMenu(signedIn, readyToGenerateRightMenu) {
        if(readyToGenerateRightMenu) {
            if (signedIn) {
            const ethAddressShort = ShortEthAddress(this.state.account);           

            const ethAddressStyle = {color: 'white'};

            return (
                <Grid>
                    <Grid.Row verticalAlign='middle'>
                        <Grid.Column width={4}>
                            <div className='user-avatar'><Blockies seed={this.state.account} scale={6} size={14}/></div>
                        </Grid.Column>
                        <Grid.Column width={1}>

                        </Grid.Column>
                        <Grid.Column width={10} className='user-column-right'>
                            <div className='user-column-right-address'><a style={ethAddressStyle} href={`https://etherscan.io/address/${this.state.account}`} target='_blank'>{ethAddressShort}</a></div>
                            <Button onClick={e => this.handleLogout(e)} loading={this.state.loading} size='mini' color='black' icon labelPosition='right' className='user-column-right-signout-button'>
                                Log out
                                <Icon name='power off' />
                            </Button>
                        </Grid.Column>

                    </Grid.Row>
                </Grid>); 
       } 
        return (<Button className='menu-right-item-button' loading={this.state.loading} onClick={e => this.handleLogin(e)} color='black'>Sign in</Button>);       
        }
       
      return <Button loading={true} className="dark-orange-bg" />;
   }

  async handleLogin(e) {  
    this.setState({loading: true});
    await Sleep(300);

    let account;

    [ account ] = await web3.eth.getAccounts();

    if (typeof account !== 'undefined') {
        this.setState({account: account});
        this.getItems(account);
        this.setState({signedIn: true});
        store.dispatch({ type: 'LOG_IN', account: account });
        window.localStorage.setItem('eth-account', account);
    } else {
        this.setState({popupOpen: true});
    }

    this.setState({loading: false});
  }

  async handleLogout(e) {
    this.setState({loading: true});
    await Sleep(600);
    this.setState({signedIn: false});
    store.dispatch({ type: 'LOG_OUT' });
    this.setState({loading: false});
    window.localStorage.removeItem('eth-account');
  }


  render() {

    return (
      <Menu inverted size='large' className='menu'>
        <Menu.Item>
            <Image src='/static/img/logo.png' />
        </Menu.Item>
        <Menu.Item>
            <Icon name='chess knight' />       
             My Bets
        </Menu.Item>
        <Menu.Item>
            <Icon name='angle double down' />   
            Deposit
        </Menu.Item>

        <Menu.Item>
            <Icon name='angle double up' />   
            Withdraw
        </Menu.Item>

        <Menu.Item>
            <Icon name='question circle outline' />   
            FAQ
        </Menu.Item>
        <Menu.Item position='right' className='menu-right-item'>
            {this.generateRightMenu(this.state.signedIn, this.state.readyToGenerateRightMenu)}     
        </Menu.Item>

        <Modal open={this.state.popupOpen} size='small'>
                <Modal.Header>You need Metamask to sign in</Modal.Header>
                <Modal.Content image>
                    <Image wrapped size='medium' src='/static/img/metamask.png' />
                    <Modal.Description>
                        <Header>What is Metamask?</Header>
                        <p>MetaMask is an extension for accessing Ethereum Dapps. You can download it <a href='https://metamask.io/' target='_blank'>here</a>.</p>                        <Header>But I have Metamask...</Header>
                        <p>If you have Metamask installed, please make sure to unlock your account.</p>                        
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                    <Button className="dark-orange-bg font-white" onClick={(e) => {this.setState({popupOpen: false})}}>
                        Close
                    </Button>
                </Modal.Actions>
        </Modal>        
      </Menu>
      

    );
  }


  async getItems(account) {
    const result = await EthLounge.methods.getBalances().call({from: account});
    const tokens = result[0];
    const amounts = result[1];

    for (let i = 0; i < amounts.length; i++) {
        if (amounts[i] !== '0') {
            const newItem = new Item(tokens[i], amounts[i], 'token-box');
            store.dispatch({ type: 'ADD_ITEM', item: newItem });
        }
    }
  }
}




export default connect()(MenuExampleSizeLarge);