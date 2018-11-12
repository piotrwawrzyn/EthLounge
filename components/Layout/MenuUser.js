import React, { Component } from 'react';
import { Grid, Header, Button } from 'semantic-ui-react';
import makeBlockie from 'ethereum-blockies-base64';
import axios from 'axios';
import { Router } from '../../next-routes';

class MenuUser extends Component {
  constructor(props) {
    super(props);
    this.handleSingOut = this.handleSignOut.bind(this);
    this.state = { avatarClassNameModifier: '' };
  }

  async handleSignOut() {
    this.setState({ avatarClassNameModifier: 'avatar-exit' });
    await axios.get('/logout');
    window.location.href = window.location.href;
  }

  render() {
    let { user } = this.props;

    const { username, id } = user;
    const usernameStyle = { color: 'white' };

    return (
      <Grid className="top-menu-right">
        <Grid.Row verticalAlign="middle">
          <Grid.Column width={4}>
            <div>
              <img
                src={makeBlockie(username)}
                className={`user-avatar user-avatar-menu undragable ${
                  this.state.avatarClassNameModifier
                }`}
              />
            </div>
          </Grid.Column>
          <Grid.Column width={1} />
          <Grid.Column width={10} className="user-column-right">
            <Grid>
              <Grid.Row style={{ padding: '0' }}>
                <div>
                  <Header size="tiny" style={usernameStyle}>
                    {username}
                  </Header>
                </div>
              </Grid.Row>
              <Grid.Row style={{ padding: '0' }}>
                <Grid.Column width="3" style={{ padding: '0' }}>
                  <Button
                    size="small"
                    onClick={e => this.handleSignOut()}
                    icon="power off"
                    className="user-column-right-button orange-button-dark"
                  />
                </Grid.Column>
                <Grid.Column width="1" style={{ padding: '0.5em' }} />
                <Grid.Column style={{ padding: '0' }} width="3">
                  <Button
                    size="small"
                    icon="setting"
                    className="user-column-right-button orange-button-dark"
                  />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default MenuUser;
