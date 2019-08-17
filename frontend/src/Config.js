const baseurl = 'http://10.145.113.217:3000/';

const endpoints = {
  user: {
    getFollowedTags: 'user/followedTags',
    getFeed: 'user/getFeed',
    getPayment: 'user/get_payment',
    postPayment: 'user/payment',
    postInfoUpdate: 'user/update',
    getUser: 'user'
  },

  auth: {
    postLogin: 'auth/login',
    getLogout: 'auth/logout',
    postSignUp: 'auth/signup',
    postForgotPassword: 'auth/reset/request'
  },
  article: {
    getByTags: 'post/by_tags',
    postCreate: 'post/create',
    postRate: 'post/rate',
    postSave: 'post/save',
    postuploadImg: 'post/uploadImg',
    getPost: 'post'
  },
  tag: {
    getAll: 'tag/getAll',
    postPriority: 'tag/setPriority'
  },

  issue: {
    getAll: 'issue/getAll'
  }
};