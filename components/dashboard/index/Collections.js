import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react';
import { Link } from '../../../next-routes';

class Collections extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="collections">
        <Link route="/admin/dashboard/collections/tokens">
          <a>
            <Button fluid className="dark-button">
              <Icon name="ethereum" />
              Tokens
            </Button>
          </a>
        </Link>
        <Link route="/admin/dashboard/collections/teams">
          <a>
            <Button fluid className="dark-button">
              <Icon name="crosshairs" />
              Teams
            </Button>
          </a>
        </Link>
        <Link route="a">
          <a>
            <Button disabled fluid className="dark-button">
              <Icon name="trophy" />
              Leagues
            </Button>
          </a>
        </Link>
      </div>
    );
  }
}

export default Collections;
