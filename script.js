(function() {
	const keyshortcutElements = document.querySelectorAll('[aria-keyshortcuts]')

	function checkKey(event){
		const eventKey = event.key.toUpperCase()
		const accesskeys = []
		keyshortcutElements.forEach((elem) => {
			const key = elem.getAttribute('accesskey').toUpperCase()
			accesskeys.push(key)
		})
		accesskeys.forEach( (accesskey) => {
			if (   event.ctrlKey && eventKey === accesskey 
				|| event.ctrlKey && event.altKey && eventKey === accesskey
				|| event.altKey && eventKey === accesskey
				|| event.altKey && event.shiftKey && eventKey === accesskey
			   ) {
				const focussedElem = document.querySelector(`[accesskey="${accesskey}"]`)
				focussedElem.focus()
			}
		})
	}

	window.addEventListener('keydown', checkKey)
})()