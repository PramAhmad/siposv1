"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenerateRunner = void 0;
class GenerateRunner {
    createOptionsFromCommandLine(inputs, options) {
        const [name] = inputs;
        return { name };
    }
    async ensureCommandLine(inputs, options) { }
}
exports.GenerateRunner = GenerateRunner;
