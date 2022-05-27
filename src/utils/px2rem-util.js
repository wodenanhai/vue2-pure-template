import {floor} from "xe-utils";

let maxWidth = 1920;
let minWidth = 1024;

export function initPx2Rem() {
    document.documentElement.style.fontSize = convertPx(14) + "px";
}

export function convertPx(val) {
    let width = window.innerWidth;
    width = width > maxWidth ? maxWidth : width;
    width = width < minWidth ? minWidth : width;
    val = (width / 1920) * val;
    val = floor(val)
    return val;
}
