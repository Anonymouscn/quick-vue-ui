import { ButtonPlugin } from './Button';
import {InputPlugin} from "./input/index.js";
import {TablePlugin} from "./table/index.js";

let MyKitPlugin = {
    install(app) {
        ButtonPlugin.install?.(app);
        InputPlugin.install?.(app);
        TablePlugin.install?.(app);
    },
};

export default MyKitPlugin;

export * from './Button';
export * from './input';
export * from './table';