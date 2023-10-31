"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigSetCommand = void 0;
const cli_framework_1 = require("@ionic/cli-framework");
const utils_terminal_1 = require("@ionic/utils-terminal");
const constants_1 = require("../../constants");
const color_1 = require("../../lib/color");
const errors_1 = require("../../lib/errors");
const base_1 = require("./base");
class ConfigSetCommand extends base_1.BaseConfigCommand {
    async getMetadata() {
        const projectFile = this.project ? (0, utils_terminal_1.prettyPath)(this.project.filePath) : constants_1.PROJECT_FILE;
        return {
            name: 'set',
            type: 'global',
            summary: 'Set config values',
            description: `
This command writes configuration values to the project's ${(0, color_1.strong)((0, utils_terminal_1.prettyPath)(projectFile))} file. It can also operate on the global CLI configuration (${(0, color_1.strong)('~/.ionic/config.json')}) using the ${(0, color_1.input)('--global')} option.

For nested properties, separate nest levels with dots. For example, the property name ${(0, color_1.input)('integrations.cordova')} will look in the ${(0, color_1.strong)('integrations')} object for the ${(0, color_1.strong)('cordova')} property.

For multi-app projects, this command is scoped to the current project by default. To operate at the root of the project configuration file instead, use the ${(0, color_1.input)('--root')} option.

This command will attempt to coerce ${(0, color_1.input)('value')} into a suitable JSON type. If it is JSON-parsable, such as ${(0, color_1.input)('123')}, ${(0, color_1.input)('true')}, ${(0, color_1.input)('[]')}, etc., then it takes the parsed result. Otherwise, the value is interpreted as a string. For stricter input, use ${(0, color_1.input)('--json')}, which will error with non-JSON values.

By default, if ${(0, color_1.input)('property')} exists and is an object or an array, the value is not overwritten. To disable this check and always overwrite the property, use ${(0, color_1.input)('--force')}.
      `,
            inputs: [
                {
                    name: 'property',
                    summary: 'The property name you wish to set',
                    validators: [cli_framework_1.validators.required],
                },
                {
                    name: 'value',
                    summary: 'The new value of the given property',
                    validators: [cli_framework_1.validators.required],
                },
            ],
            options: [
                {
                    name: 'global',
                    summary: 'Use global CLI config',
                    type: Boolean,
                    aliases: ['g'],
                },
                {
                    name: 'json',
                    summary: `Always interpret ${(0, color_1.input)('value')} as JSON`,
                    type: Boolean,
                    groups: ["advanced" /* MetadataGroup.ADVANCED */],
                },
                {
                    name: 'force',
                    summary: 'Always overwrite existing values',
                    type: Boolean,
                    groups: ["advanced" /* MetadataGroup.ADVANCED */],
                },
                {
                    name: 'root',
                    summary: `Operate on root of ${(0, color_1.strong)((0, utils_terminal_1.prettyPath)(projectFile))}`,
                    type: Boolean,
                    hint: (0, color_1.weak)('[multi-app]'),
                    groups: ["advanced" /* MetadataGroup.ADVANCED */],
                },
            ],
            exampleCommands: ['name newAppName', 'name "\\"newAppName\\"" --json', '-g interactive false'],
        };
    }
    async run(inputs, options) {
        const ctx = this.generateContext(inputs, options);
        const { property } = ctx;
        if (typeof property === 'undefined') {
            throw new errors_1.FatalException(`Cannot set config to ${(0, color_1.input)(ctx.value)} without a property.`);
        }
        const originalValue = (0, base_1.getConfigValue)(ctx);
        (0, base_1.setConfigValue)({ ...ctx, property, originalValue });
        if (ctx.value !== originalValue) {
            this.env.log.ok(`${(0, color_1.input)(property)} set to ${(0, color_1.input)(JSON.stringify(ctx.value))}!`);
        }
        else {
            this.env.log.info(`${(0, color_1.input)(property)} is already set to ${(0, color_1.input)(JSON.stringify(ctx.value))}.`);
        }
    }
}
exports.ConfigSetCommand = ConfigSetCommand;
