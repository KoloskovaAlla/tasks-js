export const distanceBetweenTwoPoints = (pointA={}, pointB={}) => {
  const distanceX = pointB.x - pointA.x;
  const distanceY = pointB.y - pointA.y; 
  return Math.sqrt(Math.pow(distanceX, 2)+Math.pow(distanceY, 2));
}
