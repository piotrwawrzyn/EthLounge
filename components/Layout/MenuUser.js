import React, { Component } from 'react';
import { Grid, Header, Button } from 'semantic-ui-react';
import makeBlockie from 'ethereum-blockies-base64';
import axios from 'axios';
import { Router } from '../../next-routes';
import Sleep from '../../utils/Sleep';

class MenuUser extends Component {
  constructor(props) {
    super(props);
    this.handleSingOut = this.handleSignOut.bind(this);
    this.state = { avatarClassNameModifier: '' };
  }

  async handleSignOut() {
    this.setState({ avatarClassNameModifier: 'avatar-exit' });
    await axios.get('/logout');
    Sleep(100);
    window.location.href = window.location.href;
  }

  render() {
    let { user } = this.props;

    const { username, id } = user;
    const usernameStyle = { color: 'white' };

    return (
      <Grid className="top-menu-right">
        <Grid.Row verticalAlign="middle">
          <Grid.Column width={6}>
            <div>
              <img
                src={makeBlockie(username)}
                className={`user-avatar user-avatar-menu undragable ${
                  this.state.avatarClassNameModifier
                }`}
              />
            </div>
          </Grid.Column>

          <Grid.Column
            width={10}
            className="user-column-right"
            textAlign="left">
            <div className="user-column-right-content">
              <div>
                <Header size="tiny" style={usernameStyle}>
                  {username}
                </Header>
              </div>

              <div className="user-column-right-buttons">
                {' '}
                <Button
                  size="small"
                  onClick={e => this.handleSignOut()}
                  icon="power off"
                  className="user-column-right-button orange-button-dark"
                />
                <Button
                  size="small"
                  icon="setting"
                  className="user-column-right-button orange-button-dark"
                />
              </div>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default MenuUser;
