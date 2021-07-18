// Require file system access
fs = require('fs');

// Read file buffer 
imgReadBuffer = fs.readFileSync('D:/blockchain/JSBlockchain/test_encoding/eclipse_update_120.jpg');


// Encode image buffer to hex
imgHexEncode = new Buffer(imgReadBuffer).toString('hex');

// Output encoded data to console
console.log(imgHexEncode);

// save decoded
fs.writeFileSync('encodedImage.txt', imgHexEncode);

// Decode hex
var imgHexDecode = new Buffer(imgHexEncode, 'hex');

// Save decoded file file system 
fs.writeFileSync('decodedHexImage.jpg', imgHexDecode);
