'use strict'

let Helper = codecept_helper;

class MyHelper extends Helper {

  // before/after hooks
  _before() {
    // remove if not used
  }

  _after() {
    // remove if not used
  }

  // add custom methods here
  // If you need to access other helpers
  // use: this.helpers['helperName']

async uploadImage(file) {
  let client = this.helpers['WebDriverIO'].browser;
  let upload = await client.uploadFile(file);
  return upload;
  }
}

module.exports = MyHelper;
