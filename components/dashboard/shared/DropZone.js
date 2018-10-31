import React from 'react';
import Dropzone from 'react-dropzone';
import { Label, Icon } from 'semantic-ui-react';

const DropZone = props => {
  const { droppedImg, handleDelete, classNameModifier, onDrop } = props;

  if (droppedImg) {
    return (
      <Label size="medium" image className="font-white dark-orange-bg">
        {droppedImg.name}
        <Icon onClick={handleDelete} name="delete" />
      </Label>
    );
  }
  return (
    <Dropzone
      className={`dropdown-div ${classNameModifier}`}
      activeClassName="dropdown-div-accepted"
      rejectClassName="dropdown-div-rejected"
      accept="image/png"
      onDrop={onDrop}>
      {({ isDragAccept, isDragReject }) => {
        if (isDragAccept) {
          return 'The logo look OK. Now drop it.';
        }
        if (isDragReject) {
          return 'This is not a PNG file. ';
        }
        return 'Drop PNG logo here';
      }}
    </Dropzone>
  );
};

export default DropZone;
