import test from 'ava';
import githubUpstreamUrl from './';

test('Must return a github upstream URL', t => {
	githubUpstreamUrl('hemanth/node')
		.then((url) => {
			 t.is(url, 'https://github.com/nodejs/node-v0.x-archive.git')
		     t.end();
			});
});

test('Must return null for a repo that is not a fork.', t => {
	githubUpstreamUrl('hemanth/paws-on-es6')
		.then((url) => { t.is(url, null);t.end(); });
});
