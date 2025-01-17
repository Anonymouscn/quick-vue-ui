import { ButtonPlugin } from './Button';
import {InputPlugin} from "./input/index.js";

let MyKitPlugin = {
    install(app) {
        ButtonPlugin.install?.(app);
        InputPlugin.install?.(app);
    },
};

export default MyKitPlugin;

export * from './Button';
export * from './input';