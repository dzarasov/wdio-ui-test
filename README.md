## Automation Setup

- Navigate to root directory
- npm i
- npm run build

### Install Selenium Standalone

- npm install selenium-standalone@latest -g
- selenium-standalone install
- In separate terminal window run command: selenium-standalone start
NOTE: You need to keep selenium server running during automation execution

### Run UI Tests
- cd tests
- ../bin/wdio ./wdio.conf.js
