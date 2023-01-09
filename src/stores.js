import { writable } from 'svelte/store'


import { detect } from 'detect-browser'
const browser = detect();

let runAnimations;

// handle the case where we don't detect the browser
if (browser) {

    if (browser.name === "safari" ||  browser.name === "firefox") {
        runAnimations = 'running'
    } else {
        runAnimations = 'paused'
    }
}

export const animationState = writable(runAnimations)
