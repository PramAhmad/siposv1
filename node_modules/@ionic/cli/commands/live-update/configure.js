"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigureCommand = void 0;
const color_1 = require("../../lib/color");
const errors_1 = require("../../lib/errors");
const core_1 = require("./core");
class ConfigureCommand extends core_1.LiveUpdatesConfCommand {
    async getMetadata() {
        return {
            name: 'configure',
            type: 'project',
            groups: ["paid" /* MetadataGroup.PAID */],
            summary: 'Overrides Ionic Live Updates plugin configuration',
            description: `
This command overrides configuration for the Ionic Live Updates plugin (${(0, color_1.input)('cordova-plugin-ionic')}) in Capacitor projects.

For Capacitor projects, if the plugin is already installed, it overrides the configuration variables in the native projects.

For Cordova projects this is not implemented because it is better to reinstall the plugin with the different parameters and let Cordova deal with the changes.
      `,
            exampleCommands: [
                '',
                '--app-id=abcd1234 --channel-name="Master" --update-method=background',
                '--max-store=2 --min-background-duration=30',
                '--app-id=abcd1234 --channel-name="Master" --update-method=background --max-store=2 --min-background-duration=30',
                'android',
                'ios',
            ],
            options: [
                {
                    name: 'app-id',
                    summary: 'Your Appflow app ID',
                    type: String,
                    spec: { value: 'id' },
                },
                {
                    name: 'channel-name',
                    summary: 'The channel to check for updates from',
                    type: String,
                    spec: { value: 'name' },
                },
                {
                    name: 'update-method',
                    summary: 'The update method that dictates the behavior of the plugin',
                    type: String,
                    spec: { value: 'name' },
                },
                {
                    name: 'max-store',
                    summary: 'The maximum number of downloaded versions to store on the device',
                    type: String,
                    groups: ["advanced" /* MetadataGroup.ADVANCED */],
                    spec: { value: 'quantity' },
                },
                {
                    name: 'min-background-duration',
                    summary: 'The minimum duration after which the app checks for an update in the background',
                    type: String,
                    groups: ["advanced" /* MetadataGroup.ADVANCED */],
                    spec: { value: 'seconds' },
                },
                {
                    name: 'update-api',
                    summary: 'The location of the Appflow API',
                    type: String,
                    groups: ["hidden" /* MetadataGroup.HIDDEN */],
                    spec: { value: 'url' },
                },
            ],
            inputs: [
                {
                    name: 'platform',
                    summary: `The native platform (e.g. ${['ios', 'android'].map(v => (0, color_1.input)(v)).join(', ')})`,
                },
            ],
        };
    }
    async preRun(inputs, options) {
        // check if it is already installed
        const alreadyAdded = await this.checkLiveUpdatesInstalled();
        if (!alreadyAdded) {
            throw new errors_1.FatalException(`Live Updates (cordova-plugin-ionic) not yet installed.\n` +
                `Please run ${(0, color_1.input)('ionic live-update add')}`);
        }
        // check if there are native integration installed
        await this.requireNativeIntegration();
        // check that if an input is provided, it is valid
        if (inputs[0] && !['ios', 'android'].includes(inputs[0])) {
            throw new errors_1.FatalException(`Only ${(0, color_1.input)('ios')} or ${(0, color_1.input)('android')} can be used.`);
        }
        await this.preRunCheckInputs(options);
    }
    async run(inputs, options, runinfo) {
        const integration = await this.getAppIntegration();
        if (integration === 'cordova') {
            throw new errors_1.FatalException(`Live Updates (cordova-plugin-ionic) configuration cannot be overridden for a Cordova project.\n` +
                `Please uninstall the plugin and run ${(0, color_1.input)('ionic live-update add')} again.`);
        }
        if (integration === 'capacitor') {
            // check if there is an input that matches only one
            const updateIos = !inputs[0] || (inputs[0] === 'ios');
            const updateAndroid = !inputs[0] || (inputs[0] === 'android');
            // update the ios project if present
            let printOkMessage = false;
            if (updateIos) {
                printOkMessage = await this.addConfToIosPlist(options);
            }
            // update the android project if present
            if (updateAndroid) {
                printOkMessage = await this.addConfToAndroidString(options);
            }
            if (printOkMessage) {
                this.env.log.ok(`Live Updates (cordova-plugin-ionic) configs successfully overridden for the project\n`);
            }
        }
    }
}
exports.ConfigureCommand = ConfigureCommand;
