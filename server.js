'use strict'
// initialize Koop with configs from env
var Koop = require('koop')
var config = require('config')
var koop = Koop(config)

// register pgcache so providers have access to it
var pgCache = require('koop-pgcache')
koop.register(pgCache)

// register providers
var craigslist = require('koop-craigslist')
koop.register(craigslist)

// set up the actual app server
var express = require('express')
var app = express()
app.use(koop)
app.get('/status', (req, res) => res.status(200).json({status: 'up'}))
app.listen(80, function () { console.log('we\'re up and running') })

