function createDomTag(tagName) {
    return document.createElement(tagName)
}

function insertTag(tag) {
    document.body.appendChild(tag)
}

var testTag = createDomTag('div')
// insertTag(testTag)