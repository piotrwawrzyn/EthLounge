const dateFormatter = date => {
  date = new Date(date);
  const hours =
    date.getHours().toString().length > 1
      ? date.getHours()
      : `0${date.getHours()}`;

  const minutes =
    date.getMinutes().toString().length > 1
      ? date.getMinutes()
      : `0${date.getMinutes()}`;

  let formatedDate = `${date.getDate()}/${date.getMonth() +
    1}/${date.getFullYear()} ${hours}:${minutes}`;

  const now = new Date();

  let difference;
  let aprox;

  if (date > now) {
    difference = ((date.getTime() - now.getTime()) / 60000) * 60;
    aprox = `${secondsToWord(difference)} from now`;
    return { formatedDate, aprox, isFuture: true };
  } else {
    difference = ((now.getTime() - date.getTime()) / 60000) * 60;
    aprox = `${secondsToWord(difference)} ago`;
    return { formatedDate, aprox, isFuture: false };
  }
};

const secondsToWord = seconds => {
  seconds = Math.round(seconds);
  const minutes = Math.round(seconds / 60);

  if (seconds < 60) {
    if (seconds === 1) return '1 second';
    else return `${minutes} seconds`;
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

export default dateFormatter;
