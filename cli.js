#!/usr/bin/env node
'use strict';
var meow = require('meow');
var githubUpstreamUrl = require('./');

var cli = meow([
	'Usage',
	'  $ github-upstream-url [user/repo]',
	'',
	'Examples',
	'  $ github-upstream-url hemanth/node',
	'  https://github.com/nodejs/node.git'
]);

githubUpstreamUrl(cli.input[0])
	.then((url) => console.log(url || 'Not a fork!'))
	.catch((err) => console.error(err))
