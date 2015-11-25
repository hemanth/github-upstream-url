'use strict';
var fetch = require("isomorphic-fetch");
var repoInfoAPI = 'https://api.github.com/repos/';

module.exports = function (remotePath) {
	if (typeof remotePath !== 'string' || !/\//.exec(remotePath)) {
		throw new TypeError('Expected a string in user/repo format.');
	}
    return fetch(repoInfoAPI + remotePath)
        .then((data) => data.json())
        .then((res) => {
        	if(res.fork) {
        		return res.parent.clone_url
        	} else {
        		return null; // Not a fork.
        	}
        });
};
