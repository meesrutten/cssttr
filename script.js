(function() {
	const keyshortcutElements = document.querySelectorAll('[aria-keyshortcuts]')
	
	window.addEventListener('keydown', checkKey)

	function checkKey(event){
		const accesskeys = []
		keyshortcutElements.forEach((elem) => {
			const key = elem.getAttribute('accesskey').toLowerCase()
			accesskeys.push(key)
		})
		accesskeys.forEach( (accesskey) => {
			if (event.ctrlKey && event.key === accesskey) {
				const focussedElem = document.querySelector(`[accesskey="${accesskey.toUpperCase()}"]`)
				focussedElem.focus()
			}
		})
	}
})()