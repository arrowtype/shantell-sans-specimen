import { writable } from 'svelte/store'


import { detect } from 'detect-browser'
const browser = detect();

let runAnimations;
let animationsPossible;

// handle the case where we don't detect the browser
if (browser) {

    if (["safari", "firefox", "ios-webview", "ios"].includes(browser.name)) {
        runAnimations = 'running'
        animationsPossible = true
    } else {
        runAnimations = 'paused'
        animationsPossible = false
    }
}

export const animationState = writable(runAnimations)
export const canAnimate = writable(animationsPossible)
