'use strict';

const FastBootAppServer = require('fastboot-app-server');

const server = new FastBootAppServer({
	distPath: 'dist',
	gzip: true,
	port: process.env.PORT || 4000,
});

server.start();
