# ROCTHIS
#### Developers: Clara Bridges, Vignesh Rangaraj

### About The App
RocThis is a Chrome plugin that essentialy adds a browser (Google Chrome) extension that uses vanilla Javascript, CSS and HTML scripts. There is a business need to get the Notice of Actions (NOAs) from ICRAS to ROCIS. 
1. The plugin does not interact with the server side configuration/scripts that belong to ROCIS
2. The service worker does not automatically interact with the ROCIS landscape other than visually manipulate client end scripts strictly limiting to HTML of a page. The scraping is user dependant--RocThis does not decide which page to scrape. 
3. RocThis does not navigate web pages on user's behalf. The submit button needs to be clicked by the user after the scraping is completed.

### Prerequisites
Latest Google Chrome browser

### Installation
1. Open the Extension Management page by navigating to chrome://extensions.
2. The Extension Management page can also be opened by clicking on the Chrome menu, hovering over More Tools then selecting Extensions.
3. Enable Developer Mode by clicking the toggle switch next to Developer mode.
4. Click the LOAD UNPACKED button and select the extension directory.

