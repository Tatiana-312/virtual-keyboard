class KeyButton {
    constructor(en, code, cssClasses = []) {
        this.en = en;
        this.code = code;
        this.cssClasses = ['key'].concat(cssClasses);
    }
}

class ControlButton {
    constructor(en, code, cssClasses = []) {
        this.en = en;
        this.code = code;
        this.cssClasses = ['key', 'dark-bg'].concat(cssClasses);
    }
}

export {
    KeyButton,
    ControlButton
}
