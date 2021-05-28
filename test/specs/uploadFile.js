const path = require('path');

describe('Upload File', () => {
    it('should be able to upload a file', function () {
        const input = $('#file-upload');
        const submitBtn = $('#file-submit');
        const filePath = path.join(__dirname, '../data/cy methods.png');
        const remoteFilePath = browser.uploadFile(filePath);

        browser.url('https://the-internet.herokuapp.com/upload');
        input.setValue(remoteFilePath);
        submitBtn.click();
        browser.pause(2000); //chai assertion
    });
})
