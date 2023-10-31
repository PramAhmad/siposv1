"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StateCommand = void 0;
const utils_terminal_1 = require("@ionic/utils-terminal");
const constants_1 = require("../constants");
const color_1 = require("../lib/color");
const command_1 = require("../lib/command");
const errors_1 = require("../lib/errors");
class StateCommand extends command_1.Command {
    async getMetadata() {
        return {
            name: 'state',
            type: 'global',
            summary: '',
            groups: ["hidden" /* MetadataGroup.HIDDEN */],
        };
    }
    async run() {
        const data = [
            [`${(0, utils_terminal_1.indent)(4)}${(0, color_1.input)('ionic cordova platform save')}`, `save existing installed platforms to ${(0, color_1.strong)('config.xml')}`],
            [`${(0, utils_terminal_1.indent)(4)}${(0, color_1.input)('ionic cordova plugin save')}`, `save existing installed plugins to ${(0, color_1.strong)('config.xml')}`],
            [`${(0, utils_terminal_1.indent)(4)}${(0, color_1.input)('ionic cordova platform --help')}`, `view help page for managing Cordova platforms`],
            [`${(0, utils_terminal_1.indent)(4)}${(0, color_1.input)('ionic cordova plugin --help')}`, `view help page for managing Cordova plugins`],
            [`${(0, utils_terminal_1.indent)(4)}${(0, color_1.input)('ionic cordova prepare')}`, `install platforms and plugins listed in ${(0, color_1.strong)('config.xml')}`],
        ];
        throw new errors_1.FatalException(`${(0, color_1.input)('ionic state')} has been removed.\n\n` +
            `We recommend using Cordova directly to manage Cordova plugins and platforms.\n` +
            `The following commands fulfill the old ${(0, color_1.input)('ionic state')} functionality:\n\n` +
            `${(0, utils_terminal_1.columnar)(data, constants_1.COLUMNAR_OPTIONS)}\n\n` +
            `See ${(0, color_1.strong)('https://cordova.apache.org/docs/en/latest/platform_plugin_versioning_ref/')} for detailed information.\n`);
    }
}
exports.StateCommand = StateCommand;
