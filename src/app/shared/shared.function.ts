export function getRandomId(): number {
  const number = Math.floor((Math.random()*6)+1);
  return number !== 0 ? number : getRandomId();
}
