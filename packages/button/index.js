import Button from './src/index.vue';

export const ButtonPlugin = {
    install(app) {
        app.component('a-button', Button);
    },
};

export { Button };
