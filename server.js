'use strict'
// initialize Koop with configs from env
var Koop = require('koop')
var config = require('config')
config.geojsonFiles = [
  {"name": "test", "path": "./json/example.json"}
];
var koop = Koop(config)

// register pgcache so providers have access to it
var pgCache = require('koop-pgcache')
//koop.registerCache(pgCache)

// register providers
var socrata = require('koop-socrata')
//var agol = require('koop-agol')
//var zillow = require('koop-provider-zillow')
//var craigslist = require('koop-provider-craigslist')
var census = require('koop-census')
var geojson = require('koop-geojson-file')
//var yelp = require('koop-yelp')
var gist = require('koop-gist')



// register koop providers
koop.register(socrata)
//koop.register(agol)
//koop.register(zillow)
//koop.register(craigslist)
koop.register(census)
koop.register(geojson)
//koop.register(yelp)
//koop.register(gist)


// set up the actual app server
var express = require('express')
var app = express()
app.use(koop)
app.get('/status', (req, res) => res.status(200).json({status: 'up'}))
app.listen(80, function () { console.log('we\'re up and running') })

