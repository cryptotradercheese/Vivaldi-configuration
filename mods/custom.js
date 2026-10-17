(function () {
    // Which key event each field reacts to (found by testing):
    // the address field reacts to keypress, Quick Commands and search fields to keydown
    function enterEventTypeFor(element) {
        return element.closest('.UrlBar-AddressField') ? 'keypress' : 'keydown';
    }

    // Replace the pressed Enter with a fake Enter that has different modifier keys
    function replaceEnter(event, modifiers) {
        // Stop Vivaldi from handling the real key press
        event.preventDefault();
        event.stopImmediatePropagation();

        const fakeEnter = new KeyboardEvent(enterEventTypeFor(event.target), {
            key: 'Enter',
            charCode: 13, // React ignores keypress events without a character code
            bubbles: true, // React listens at the top of the page, not on the input
            ...modifiers,
        });
        event.target.dispatchEvent(fakeEnter);
    }

    // Fields where Enter opens a page:
    //   address field (⌘L), search fields (Start Page and toolbar), Quick Commands (⌘E)
    function isUrlOrSearchInput(element) {
        if (!(element instanceof HTMLInputElement)) return false;
        return element.closest('.UrlBar-AddressField, .SearchField') || element.classList.contains('quick-command-search');
    }

    window.addEventListener('keydown', (event) => {
        if (!event.isTrusted) return; // ignore the fake key presses this script sends
        if (event.key !== 'Enter') return;
        if (!isUrlOrSearchInput(event.target)) return;

        const { metaKey, shiftKey, altKey, ctrlKey } = event;
        const isCmdShiftEnter = metaKey && shiftKey && !altKey && !ctrlKey;
        const isShiftEnter = shiftKey && !metaKey && !altKey && !ctrlKey;

        if (isCmdShiftEnter) {
            replaceEnter(event, { shiftKey: true }); // new focused tab
        } else if (isShiftEnter) {
            replaceEnter(event, { metaKey: true, shiftKey: true }); // new window
        }
    }, true); // true = run before Vivaldi's own handlers
})();
