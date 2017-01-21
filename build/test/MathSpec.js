/**
 * Created by rtholmes on 2016-10-31.
 */
"use strict";
var chai_1 = require("chai");
var Math_1 = require("../src/Math");
var Util_1 = require("../src/Util");
describe("MathSpec", function () {
    var math = null;
    beforeEach(function () {
        math = new Math_1.default();
    });
    afterEach(function () {
        math = null;
    });
    it("Add - empty array", function () {
        return math.add(['http://skaha.cs.ubc.ca:11313/0.json']).then(function (value) {
            Util_1.default.warn('Error: ' + value);
            chai_1.expect.fail();
        }).catch(function (err) {
            Util_1.default.test(err);
            //Log.info(err);
            chai_1.expect(err).to.equal('Error: No number was provided');
        });
    });
    it("Add - Nested Array", function () {
        return math.add(['http://skaha.cs.ubc.ca:11313/822d.json']).then(function (value) {
            Util_1.default.warn('Value: ' + value);
            chai_1.expect.fail();
        }).catch(function (err) {
            Util_1.default.test(err);
            chai_1.expect(err).to.equal('Error: No number was provided');
        });
    });
    it("Add - 1 valid array", function () {
        return math.add(['http://skaha.cs.ubc.ca:11313/822d.json', 'http://skaha.cs.ubc.ca:11313/4968.json']).then(function (value) {
            Util_1.default.test('Value: ' + value);
            chai_1.expect(value).to.equal(12);
        }).catch(function (err) {
            Util_1.default.warn('Error: ' + err);
            chai_1.expect.fail();
        });
    });
    it("Add - 2 valid array", function () {
        return math.add(['http://skaha.cs.ubc.ca:11313/4968.json', 'http://skaha.cs.ubc.ca:11313/4968.json']).then(function (value) {
            Util_1.default.test('Value: ' + value);
            chai_1.expect(value).to.equal(24);
        }).catch(function (err) {
            Util_1.default.warn('Error: ' + err);
            chai_1.expect.fail();
        });
    });
    it("Add - Array as url", function () {
        return math.add([]).then(function (value) {
            Util_1.default.warn('Value: ' + value);
            chai_1.expect.fail();
        }).catch(function (err) {
            Util_1.default.test(err);
            chai_1.expect(err).to.equal('Error: No number was provided');
        });
    });
    it("Add - invalid URL", function () {
        return math.add(['invalidURL']).then(function (value) {
            Util_1.default.warn('Value: ' + value);
            chai_1.expect.fail();
        }).catch(function (err) {
            Util_1.default.test(err);
            chai_1.expect(err).to.equal('Error: URL could not be retrieved');
        });
    });
    it("Add - invalid + valid URL", function () {
        return math.add(['invalidURL', 'http://skaha.cs.ubc.ca:11313/4968.json']).then(function (value) {
            Util_1.default.warn('Value: ' + value);
            chai_1.expect.fail();
        }).catch(function (err) {
            Util_1.default.test(err);
            chai_1.expect(err).to.equal('Error: URL could not be retrieved');
        });
    });
    it("Add - Nested + Nested", function () {
        return math.add(['http://skaha.cs.ubc.ca:11313/822d.json', 'http://skaha.cs.ubc.ca:11313/822d.json']).then(function (value) {
            Util_1.default.warn('Value: ' + value);
            chai_1.expect.fail();
        }).catch(function (err) {
            Util_1.default.test(err);
            chai_1.expect(err).to.equal('Error: No number was provided');
        });
    });
    it("Add - invalid JSON", function () {
        return math.add(['http://skaha.cs.ubc.ca:11313/4666.json']).then(function (value) {
            Util_1.default.warn('Value: ' + value);
            chai_1.expect.fail();
        }).catch(function (err) {
            Util_1.default.test(err);
            chai_1.expect(err).to.equal('Error: Could not parse JSON');
        });
    });
    it("Add - multiple URL", function () {
        return math.add(['http://skaha.cs.ubc.ca:11313/4543.json', 'http://skaha.cs.ubc.ca:11313/4969.json',
            'http://skaha.cs.ubc.ca:11313/7b77.json', 'http://skaha.cs.ubc.ca:11313/944a.json']).then(function (value) {
            Util_1.default.test('Value: ' + value);
            chai_1.expect(value).to.equal(6235);
        }).catch(function (err) {
            Util_1.default.warn(err);
            chai_1.expect.fail();
        });
    });
    it("Multiply should reject -- Nested Array", function () {
        return math.multiply(['http://skaha.cs.ubc.ca:11313/822d.json']).then(function (value) {
            Util_1.default.test('Value: ' + value);
            chai_1.expect.fail();
        }).catch(function (err) {
            Util_1.default.test('Error: ' + err);
        });
    });
    it("Multiply should return 40", function () {
        return math.multiply(['http://skaha.cs.ubc.ca:11313/822d.json', 'http://skaha.cs.ubc.ca:11313/4968.json']).then(function (value) {
            Util_1.default.test('Value: ' + value);
            chai_1.expect(value).to.equal(40);
        }).catch(function (err) {
            Util_1.default.test('Error: ' + err);
            chai_1.expect.fail();
        });
    });
    it("Multiply reject - invalid url ", function () {
        return math.multiply(['URLWithInvalidJSON']).then(function (value) {
            Util_1.default.test('Value: ' + value);
            chai_1.expect.fail();
        }).catch(function (err) {
            Util_1.default.test(err);
        });
    });
});
//# sourceMappingURL=MathSpec.js.map