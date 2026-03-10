let Router = function () {
    this.routes = {};
};

Router.prototype.bind = function(url, method, action) {
    const key = `${method} ${url}`;
    this.routes[key] = action
};

Router.prototype.runRequest = function(url, method) {
  const key = `${method} ${url}`;
  if(this.routes[key]) {
    const action = this.routes[key];
    return action();
  }
    else return 'Error 404: Not Found';
};

const router = new Router();
router.bind('/hello', 'GET', function(){ return 'hello world'; });
// router.runRequest('/hello', 'GET') // returns 'hello world';
console.log(router.runRequest('/hello', 'GET'));   
console.log(router.runRequest('/hello', 'POST'));   