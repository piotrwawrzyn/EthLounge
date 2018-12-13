const secondsToWord = seconds => {
  seconds = Math.round(seconds);
  const minutes = Math.round(seconds / 60);

  if (seconds < 60) {
    if (seconds === 1) return '1 second';
    else return `${seconds} seconds`;
  } else if (minutes < 60) {
    if (minutes === 1) return '1 minute';
    else return `${minutes} minutes`;
  } else if (minutes < 60) {
    if (minutes === 1) return '1 minute';
    else return `${minutes} minutes`;
  } else if (minutes < 60 * 24) {
    const hours = Math.round(minutes / 60);

    if (hours === 1) return '1 hour';
    else return `${hours} hours`;
  } else {
    const days = Math.round(minutes / (60 * 24));

    if (days === 1) return '1 day';
    else return `${days} days`;
  }
};

export default secondsToWord;
