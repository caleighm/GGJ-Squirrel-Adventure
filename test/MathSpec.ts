/**
 * Created by rtholmes on 2016-10-31.
 */

import {expect} from 'chai';

import Math from "../src/Math";
import Log from "../src/Util";
import {error} from "util";

describe("MathSpec", function () {

    var math: Math = null;
    beforeEach(function () {
        math = new Math();
    });

    afterEach(function () {
        math = null;
    });

    it("Add - empty array", function () {
        return math.add(['http://skaha.cs.ubc.ca:11313/0.json']).then(function (value: number) {
            Log.warn('Error: ' + value);
            expect.fail();
        }).catch(function (err) {
            Log.test(err);
            //Log.info(err);
            expect(err).to.equal('Error: No number was provided');
        })
    });

   it("Add - Nested Array", function () {
        return math.add(['http://skaha.cs.ubc.ca:11313/822d.json']).then(function (value: number) {
            Log.warn('Value: ' + value);
            expect.fail();
        }).catch(function (err) {
            Log.test(err);
            expect(err).to.equal('Error: No number was provided');
        })
    });

    it("Add - 1 valid array", function () {
        return math.add(['http://skaha.cs.ubc.ca:11313/822d.json', 'http://skaha.cs.ubc.ca:11313/4968.json']).then(function (value: number) {
            Log.test('Value: ' + value);
            expect(value).to.equal(12);
        }).catch(function (err) {
            Log.warn('Error: ' + err);
            expect.fail();
        })
    });

    it("Add - 2 valid array", function () {
        return math.add(['http://skaha.cs.ubc.ca:11313/4968.json', 'http://skaha.cs.ubc.ca:11313/4968.json']).then(function (value: number) {
            Log.test('Value: ' + value);
            expect(value).to.equal(24);
        }).catch(function (err) {
            Log.warn('Error: ' + err);
            expect.fail();
        })
    });

   it("Add - Array as url", function () {
        return math.add([]).then(function (value: number) {
            Log.warn('Value: ' + value);
            expect.fail();
        }).catch(function (err) {
            Log.test(err);
            expect(err).to.equal('Error: No number was provided');
        })
    });

    it("Add - invalid URL", function () {
        return math.add(['invalidURL']).then(function (value: number) {
            Log.warn('Value: ' + value);
            expect.fail();
        }).catch(function (err) {
            Log.test(err);
            expect(err).to.equal('Error: URL could not be retrieved');
        })
    });

    it("Add - invalid + valid URL", function () {
        return math.add(['invalidURL', 'http://skaha.cs.ubc.ca:11313/4968.json']).then(function (value: number) {
            Log.warn('Value: ' + value);
            expect.fail();
        }).catch(function (err) {
            Log.test(err);
            expect(err).to.equal('Error: URL could not be retrieved');
        })
    });

    it("Add - Nested + Nested", function () {
        return math.add(['http://skaha.cs.ubc.ca:11313/822d.json', 'http://skaha.cs.ubc.ca:11313/822d.json']).then(function (value: number) {
            Log.warn('Value: ' + value);
            expect.fail();
        }).catch(function (err) {
            Log.test(err);
            expect(err).to.equal('Error: No number was provided');
        })
    });

    it("Add - invalid JSON", function () {
        return math.add(['http://skaha.cs.ubc.ca:11313/4666.json']).then(function (value: number) {
            Log.warn('Value: ' + value);
            expect.fail();
        }).catch(function (err) {
            Log.test(err);
            expect(err).to.equal('Error: Could not parse JSON');
        })
    });

    it("Add - multiple URL", function () {
        return math.add(['http://skaha.cs.ubc.ca:11313/4543.json', 'http://skaha.cs.ubc.ca:11313/4969.json',
        'http://skaha.cs.ubc.ca:11313/7b77.json', 'http://skaha.cs.ubc.ca:11313/944a.json']).then(function (value: number) {
            Log.test('Value: ' + value);
            expect(value).to.equal(6235);
        }).catch(function (err) {
            Log.warn(err);
            expect.fail();
        })
    });

    it("Multiply should reject -- Nested Array", function () {
        return math.multiply(['http://skaha.cs.ubc.ca:11313/822d.json']).then(function (value: number) {
            Log.test('Value: ' + value);
            expect.fail();
        }).catch(function (err) {
            Log.test('Error: ' + err);
        })
    });

    it("Multiply should return 40", function () {
        return math.multiply(['http://skaha.cs.ubc.ca:11313/822d.json', 'http://skaha.cs.ubc.ca:11313/4968.json']).then(function (value: number) {
            Log.test('Value: ' + value);
            expect(value).to.equal(40);
        }).catch(function (err) {
            Log.test('Error: ' + err);
            expect.fail();
        })
    });

    it("Multiply reject - invalid url ", function () {
        return math.multiply(['URLWithInvalidJSON']).then(function (value: number) {
            Log.test('Value: ' + value);
            expect.fail();
        }).catch(function (err) {
            Log.test(err);
        })
    });
});

