/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer
  .prompt([
    /* Pass your questions in here */
    {
      type: 'input',
      name: 'url',
      message: 'Enter a URL to generate a QR code:',
    },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log(`Generating QR code for URL: ${answers.url}`);
    let url = answers.url;
    let qr_svg = qr.image(url, { type: 'png' });
    qr_svg.pipe(fs.createWriteStream('qr_img_npm.png'));
    console.log('QR code saved as qr_img_npm.png ✅');
    fs.writeFileSync('url.txt', url);
    console.log('URL saved as url.txt ✅');
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
      console.error("Prompt couldn't be rendered in the current environment");
    } else {
      // Something else went wrong
      console.error("Something else went wrong");
    }
  });
