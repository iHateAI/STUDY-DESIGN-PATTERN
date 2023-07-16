"use strict";
exports.__esModule = true;
exports.AtomicId = void 0;
var uuidv4_1 = require("uuidv4");
var AtomicId = /** @class */ (function () {
    function AtomicId() {
        this.id = (0, uuidv4_1.uuid)();
    }
    AtomicId.prototype.getId = function () {
        return this.id;
    };
    return AtomicId;
}());
exports.AtomicId = AtomicId;
