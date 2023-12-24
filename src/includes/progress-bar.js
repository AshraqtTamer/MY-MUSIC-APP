<<<<<<< HEAD
import NProgress from 'nprogress';

export default (router) => {
  router.beforeEach((to, from, next) => {
    NProgress.start();
    next();
  });

  router.afterEach(NProgress.done);
};
=======
import NProgress from 'nprogress';

export default (router) => {
  router.beforeEach((to, from, next) => {
    NProgress.start();
    next();
  });

  router.afterEach(NProgress.done);
};
>>>>>>> e8b6db1 (Music App)
