const DateFormatter = date => {
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
    difference = (date.getTime() - now.getTime()) / 60000;
    aprox = `${minutesToWord(difference)} from now`;
    return { formatedDate, aprox };
  } else {
    difference = (now.getTime() - date.getTime()) / 60000;
    aprox = `${minutesToWord(difference)} ago`;
    return { formatedDate, aprox };
  }
};

const minutesToWord = minutes => {
  minutes = Math.round(minutes);
  if (minutes < 60) {
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

export default DateFormatter;
