'use strict'

chrome.runtime.onInstalled.addListener(function (details) {
  chrome.declarativeContent.onPageChanged.removeRules(undefined,
    function () {
      chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {
              hostEquals: 'www.netflix.com',
              schemes: ['http', 'https'],
              pathPrefix: '/watch/'
            }
          })
        ],
        actions: [new chrome.declarativeContent.ShowPageAction()]
      }])
    })
})

//extensions should only run on the above url conditions


//Use the chrome.pageAction API to put icons in the main Google Chrome toolbar, to the right of the address bar. Page actions represent actions that can be taken on the current page, but that aren't applicable to all pages. Page actions appear grayed out when inactive.
