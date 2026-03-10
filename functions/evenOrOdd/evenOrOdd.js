const target = function(n){
return n%2?'Odd':'Even';
};
const handler = {
get(target, prop) {
return target(prop);
}
};
const evenOrOdd = new Proxy(target, handler);
