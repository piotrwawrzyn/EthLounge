import React from 'react';
import { Message } from 'semantic-ui-react';

const FormMessage = props => {
  const { message } = props;
  if (message) {
    const success = message === 'success' ? true : false;
    const header = success ? 'Success' : 'There has been a problem'; 
    const content = success
      ? 'New record has been succesfuly added to database.'
      : 'No new record has been added to database. Probably something simmilar already exist.';
    return (
      <Message
        success={success}
        error={!success}
        content={content}
        header={header}
      />
    );
  }

  return '';
};

export default FormMessage;
