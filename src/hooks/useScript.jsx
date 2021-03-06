import React, { useState, useEffect } from 'react';

// credits to https://usehooks.com/useScript/

export const useScript = (src) => {
	const [status, setStatus] = useState(src ? 'loading' : 'idle');

	useEffect(() => {
		// Allow falsy src value if waiting on other data needed for
		// constructing the script URL passed to this hook.
		if (!src) {
			setStatus('idle');
			return;
		}

		// Fetch existing script element by src
		// It may have been added by another intance of this hook
		let script = document.querySelector(`script[src="${src}"]`);

		if (!script) {
			// Create script
			script = document.createElement('script');
			script.async = true;
			script.defer = true;
			script.setAttribute('data-status', 'loading');
			script.src = src;
			// Add script to document body
			document.body.insertAdjacentElement('afterbegin', script);

			// Store status in attribute on script
			// This can be read by other instances of this hook
			const setAttributeFromEvent = (event) => {
				script.setAttribute(
					'data-status',
					event.type === 'load' ? 'ready' : 'error'
				);
			};

			script.addEventListener('load', setAttributeFromEvent);
			script.addEventListener('error', setAttributeFromEvent);
		} else {
			// Grab existing script status from attribute and set to state.
			setStatus(script.getAttribute('data-status'));
		}

		// Script event handler to update status in state
		// Note: Even if the script already exists we still need to add
		// event handlers to update the state for *this* hook instance.
		const setStateFromEvent = (event) => {
			setStatus(event.type === 'load' ? 'ready' : 'error');
		};

		// Add event listeners
		script.addEventListener('load', setStateFromEvent);
		script.addEventListener('error', setStateFromEvent);

		return () => {
			if (script) {
				script.removeEventListener('load', setStateFromEvent);
				script.removeEventListener('error', setStateFromEvent);
			}
		};
	}, [src]);

	return status;
};

export default useScript;
