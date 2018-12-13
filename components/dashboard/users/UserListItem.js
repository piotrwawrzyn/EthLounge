import React, { Component } from 'react';
import { Table, Icon, Image, Button } from 'semantic-ui-react';
import makeBlockie from 'ethereum-blockies-base64';
import dateFormatter from '../../../utils/dateFormatter';
import { Link } from '../../../next-routes';
import { ICON } from '../../../utils/constants';

class UserListItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { item } = this.props;
    const signupDate = dateFormatter(item.signupDate).formatedDate;
    return (
      <Link route={`/admin/dashboard/users/user/${item._id}`}>
        <Table.Row className="user-list-item">
          <Table.Cell>{item._id}</Table.Cell>
          <Table.Cell>{item.username}</Table.Cell>
          <Table.Cell>{item.email}</Table.Cell>
          <Table.Cell>
            {item.verified ? (
              <Icon color="green" name={ICON.USER_VERIFIED} />
            ) : (
              <Icon color="red" name={ICON.USER_UNVERIFIED} />
            )}
          </Table.Cell>
          <Table.Cell>{item.bets.length}</Table.Cell>
          <Table.Cell>
            <Image
              className="user-list-item-avatar"
              src={makeBlockie(item.username)}
            />
          </Table.Cell>
          <Table.Cell>{signupDate}</Table.Cell>
        </Table.Row>
      </Link>
    );
  }
}

export default UserListItem;
