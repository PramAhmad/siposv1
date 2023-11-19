"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOnFallback = void 0;
const color_1 = require("./color");
function createOnFallback({ flags: { confirm }, log }) {
    return (question) => {
        if (question.type === 'confirm') {
            if (confirm) {
                log.msg(`${(0, color_1.input)('--confirm')}: ${(0, color_1.weak)(question.message)} ${(0, color_1.ancillary)('Yes')}`);
                return true;
            }
            else {
                log.msg(`${(0, color_1.input)('--no-confirm')}: ${(0, color_1.weak)(question.message)} ${(0, color_1.ancillary)('No')}`);
                return false;
            }
        }
    };
}
exports.createOnFallback = createOnFallback;
