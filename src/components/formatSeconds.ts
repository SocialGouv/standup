//

const pad = (num: number) => String(num < 10 ? "0" + num : num);

export const formatSeconds = (seconds: number) => {
  let minutes = 0;
  let secs = 0;
  if (seconds >= 60) {
    minutes = Math.floor(seconds / 60);
    secs = seconds - minutes * 60;
  } else {
    secs = seconds;
  }
  return `${pad(minutes)}:${pad(secs)}`;
};
