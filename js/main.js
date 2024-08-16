// Add email to page
setTimeout(() => {
	const content = 'hello';
	const content2 = 'aandttechnologies.com';
	const address = `${content}&#64;${content2}`;
	document.getElementById('email').innerHTML = `<a href="mailto:${address}">${address}</a>`;
}, 1500);
