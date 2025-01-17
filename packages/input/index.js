import {TextInput} from "./text-input/index.js";

export const InputPlugin = {
    install(app) {
        app.component('text-input', TextInput);
    },
};

export { TextInput };