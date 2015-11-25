# github-upstream-url [![Build Status](https://travis-ci.org/hemanth/github-upstream-url.svg?branch=master)](https://travis-ci.org/hemanth/github-upstream-url)

> Get the upstream URL for your fork.


## Install

```
$ npm install --save github-upstream-url
```


## Usage

```js
const githubUpstreamUrl = require('github-upstream-url');

githubUpstreamUrl('user/repo')
	.then((url) => console.log(url || 'Not a fork!'))
	.catch((err) => console.error(err))
```


## API

### githubUpstreamUrl(input)

#### input

Type: `string`

`user/repo`

## CLI

__Usage:__ `$ github-upstream-url [user/repo]`

__Examples:__ 

```sh
$ github-upstream-url hemanth/node
https://github.com/nodejs/node.git
```


## License

MIT © [Hemanth.HM](http://h3manth.com)
