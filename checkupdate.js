// ############################################### #
// Simple Update checker                           #
//   to be used with Generic Monitor from          #
//                      xfce4 ArchLinux System     #
//                                      and packer #
// ############################################### #

// I make some assumptions here:
// 1.That you use *packer instead of aur as your aur package manager
// 2.That your linux system is *password protected
// 3.Last but not least, that you have installed *nodejs

var exec = require('child_process').exec;

var password = 'yourpassword' // Replace 'yourpassword' with your linux root password

// Parse 'packer -Syyuu' output and check if updates
// are available
var doScan = function () {
  exec('echo "' + password + '" | sudo -S packer -Syyuu', function (err, output) {
    if (err) {
      console.log('There was an error:\n' + err);
    } else {

      var check = function (str) {
        return output.match(str);
      }

      if (check('there is nothing to do') !== null && check('local database is up to date') !== null) {
        console.log('No updates available');
      } else {
        console.log('Updates available');
      }
    }
  });
}

doScan();

// I'll probably not continue to add something more to this.
// It's just a personal script that helps me (I try updating everytime I finish a task on pc).
// If recommandations are made I'm happy to implement them.