const path = require('path');

describe('Upload File', () => {
    it('should be able to upload a file on hidden input', function () {
        const inputDiv = $('#div_file_box0');
        const input = $('#input_file0');
        const submitBtn = $('.convert_button');

        const filePath = path.join(__dirname, '../data/cy methods.png');
        const remoteFilePath = browser.uploadFile(filePath);

        browser.url('https://online2pdf.com/');

        browser.execute(function() {
            document.getElementById('div_file_box0').style.display = 'block';
        });

        inputDiv.waitForDisplayed();

        input.setValue(remoteFilePath);
        submitBtn.click();

        browser.pause(5000); //chai assertion
    });
})
