"use strict";
var async   = require('async');
var should  = require('should');
var parsers = require('../../app/lib/streams/parsers/doc');

var raw = "Version: 2\n" +
    "Type: Transaction\n" +
    "Currency: test_net\n" +
    "Locktime: 0\n" +
    "Issuers:\n" +
    "HnFcSms8jzwngtVomTTnzudZx7SHUQY8sVE1y8yBmULk\n" +
    "Inputs:\n" +
    "D:HnFcSms8jzwngtVomTTnzudZx7SHUQY8sVE1y8yBmULk:3428\n" +
    "Unlocks:\n" +
    "0:SIG(0)\n" +
    "Outputs:\n" +
    "1000:0:SIG(yGKRRB18B4eaZQdksWBZubea4VJKFSSpii2okemP7x1)\n" +
    "99000:0:SIG(HnFcSms8jzwngtVomTTnzudZx7SHUQY8sVE1y8yBmULk)\n" +
    "Comment: reessai\n" +
    "P6MxJ/2SdkvNDyIyWuOkTz3MUwsgsfo70j+rpWeQWcm6GdvKQsbplB8482Ar1HMz2q0h5V3tfMqjCuAeWVQ+Ag==\n";

describe("Transaction format", function(){

    var parser = parsers.parseTransaction;

    it('a valid block should be well formatted', () => parser.syncWrite(raw));

});
