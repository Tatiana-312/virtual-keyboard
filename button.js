class KeyButton {
    constructor(en, ru, shiftRu, shiftEn, code, cssClasses = []) {
        this.en = en;
        this.ru = ru;
        this.shiftRu = shiftRu;
        this.shiftEn = shiftEn;
        this.code = code;
        this.cssClasses = ['key'].concat(cssClasses);
    }
}

class ControlButton {
    constructor(en, ru, shiftRu, shiftEn, code, cssClasses = []) {
        this.en = en;
        this.ru = ru;
        this.shiftRu = shiftRu;
        this.shiftEn = shiftEn;
        this.code = code;
        this.cssClasses = ['key', 'dark-bg'].concat(cssClasses);
    }
}

export {
    KeyButton,
    ControlButton
}
