export default function () {
  return `<div>classChallenge</div>`;
}

export const greeting = `Welcome`;

export function array() {
  const sum = [1, 2, 3, 4, 5];
  let total = 0;
  for (let i = 0; i < sum.length; i++) {
    total = total + sum[i];
    console.log(total);
  }
}
