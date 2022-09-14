import { en } from '@languages/en.language';

let currentLanguage = 'en';

export function setLanguage(lang: string) {
    currentLanguage = lang;
}

export function trans(): typeof en {
    let languages = {
        en
    };
    return languages[currentLanguage];
}
