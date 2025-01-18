import {QTable} from './q-table/index.js';
import {QTableColumn} from './q-table-column/index.js';

export const TablePlugin = {
    install(app) {
        app.component('q-table', QTable)
        app.component('q-table-column', QTableColumn)
    }
};

export { QTable };