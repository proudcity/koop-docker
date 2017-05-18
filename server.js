'use strict'
// initialize Koop with configs from env
var Koop = require('koop')
var config = require('config')
config.geojsonFiles = [
  {"name": "test", "path": "./json/example.json"},
  {"name": "danvers-trail-map", "path": "./json/danvers-trail-map.json"}
];
var koop = new Koop(config);


// var FeatureServer = require('koop-output-geoservices')


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
// koop.register(FeatureServer)
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
var cors = require('cors')
var app = express()
app.use(cors())
app.use(koop)
app.get('/status', (req, res) => res.status(200).json({status: 'up'}))

var port = process.env.IS_PRODUCTION ? 80 : 8004
app.listen(port, function () { console.log('we\'re up and running') })

