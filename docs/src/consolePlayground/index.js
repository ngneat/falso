import * as falso from '../theme/ReactLiveScope/falso.min';

if (typeof window !== 'undefined') {
	window.onload = function () {
		const titleStyles = 'color:#8a76d9; font-size: 22px; font-weight:bold;';
		const copyStyles = 'color:white; font-size: 14px';
		const exampleStyles = 'color:#8a76d9; font-size: 14px;';
		console.log('%c🎩Falso\n' + '%cYou can use _ to access Falso functions here in the console. \n\n%c' + 'For example: _.randFullName()', titleStyles, copyStyles, exampleStyles)

		window._ = falso;
	};
}
