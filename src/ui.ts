import * as Blessed from 'blessed';

class UI {

    private screen: Blessed.Widgets.Screen = Blessed.screen({
        autoPadding: true,
        smartCSR: true,
        useBCE: true,
        fullUnicode: true,
        dockBorders: true,
        title: ''
    });

    private input: Blessed.Widgets.TextareaElement = Blessed.textarea({
        bottom: 0,
        height: 3,
        inputOnFocus: true,
        padding: {
            top: 1,
            left: 2
        }
    });

    constructor() {

    }
}

export { UI };