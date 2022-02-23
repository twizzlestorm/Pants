document.addEventListener('yt-navigate-start', process);
if (document.body) process();
else document.addEventListener('DOMContentLoaded', process);
	
function process() {
	let s = window.location.href;

	if ((s.substring(24, 30)) == 'shorts') {
		window.location.replace('https://www.youtube.com/watch?v=${s.substring(31)}');
	}
}
