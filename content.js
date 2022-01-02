let body = document.getElementsByTagName('body')[0]
var script = document.createElement('script')
script.setAttribute('type', 'text/javascript')
script.setAttribute('src', chrome.extension.getURL('wheel_event_listener.js'))
body.appendChild(script)