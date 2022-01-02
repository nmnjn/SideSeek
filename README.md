# SideSeek
Chrome extension to seek YouTube videos with your side scroll wheel.

<br/>

## Installation 📦
- Download the zip [here](https://github.com/nmnjn/SideSeek/raw/master/SideSeek.zip) and unzip it.
- Navigate to [chrome://extensions/](chrome://extensions/)
- Toggle on developer mode. (Top Right)
- Click on `Load Unpacked`. (Top Left)
- Select the downloaded folder.
- Go to any youtube video and scroll with you side wheel to seek forward and backwards.

<br/>

## Working 🛠

The logic behind this extension is very simple. 
It injects a JS event listener that can capture the scroll events. When the scroll happens in the horization (x-direction) it dispatches a left/right key press event to make the video seek backwards or forwards.