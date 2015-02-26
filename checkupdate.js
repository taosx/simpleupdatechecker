var exec = require('child_process').exec;

var password = 'yourpassword'; // Replace 'yourpassword' with your linux root password

// Parse 'packer -Syyuu' output and check if updates
// are available
var doScan = function () {
  exec('echo "' + password + '"sudo -S packer -Syu', function (err, output) {
    if (err) {
      console.log('There was an error:\n' + err);
    } else {
      if (output.search('/there/g') !== -1 && output.search('/date/g') !== -1) {
        console.log('No updates available');
      } else {
        console.log('Updates available');
      }
    }
  });
}

// packer -Syu | grep -w 'Packages ([0-9])' && /Packages (\([0-9]\))/

doScan();