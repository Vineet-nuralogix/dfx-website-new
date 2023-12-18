var allNodes = document.body.querySelectorAll(':not(script)');
allNodes.forEach(function(node) {
    Array.from(node.childNodes).filter(function(childNode) {
        return childNode.nodeType === 3;
    }).forEach(function(textNode) {
        textNode.replaceWith(document.createRange().createContextualFragment(
            textNode.nodeValue.replace(/[™®]/g, '<sup>$&</sup>')
        ));
    });
});
