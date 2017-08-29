### Global Installs (may require sudo)

Install ionic CLI
`npm install -g ionic`

Please install your Cordova CLI
`npm install -g cordova`

Install ios-sim to deploy iOS applications.
`npm install -g ios-sim`

Install ios-deploy to deploy iOS applications to devices.
`npm install -g ios-deploy`

### Some helpful tips:

Run your app in the browser (great for initial development):
  `ionic serve`

	`ionic serve --lab` run the app in the browser to preview the app better as in Android and iOS.

Run on a device or simulator:
  `ionic run ios` [android,browser]

Test and share your app on device with Ionic View:
  http://view.ionic.io

### package.json
Now, run the command `npm install` from directly inside the expense-6-mobile-app folder.

### For every Cordova plugin you were using, type the command:

ionic plugin add [cordova-plugin-name]

## Setting up Cordova with Android SDK (Mac)

homebrew (you can use this on a mac, if you're on windows you'll have to download them manually) Copy and paste this into your terminal
`/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`

Install java 8
`brew cask install java`

(you might have to do this if cask is not installed already)
`brew tap caskroom/cask`
`brew install brew-cask`

Install Ant - The quickest way to install Apache Ant is with Homebrew.
`brew install ant`

Android Studio https://developer.android.com/studio/install.html. This will let you install an editor that comes bundled with the Android SDK

### Setup path's in your bash profile
Edit .bash_profile
`vim ~/.bash_profile`

You’ll just need to change the path to the SDK. You want to include the SDK tools and SDK Platform-tools.

Add this:

```
export PATH=${PATH}:/Applications/Android\ Studio.app/sdk/platform-tools:/Applications/Android\ Studio.app/sdk/tools
export JAVA_HOME=$(/usr/libexec/java_home)
export PATH=${JAVA_HOME}/bin:$PATH
export PATH=/usr/local/bin:$PATH
```

To exit vim `ESC/:/wq/enter`

### Create Virtual device
Open Android Studio > Tools > Android > AVD Manager

Then create your virtual device to emulate on the desktop

Now add the android platform to android:

`ionic platform add android`

`ionic build android`

`ionic emulate android`

### Errors & Troubleshooting
If you have errors:

You have not accepted the license agreements of the following SDK components: [Android SDK Platform 24].
Open Adroid Studio and navigate to Tools/Android/SDK Manager then Launch Standalone SDK Manager. Find Android 7.0 (API 24) and install it's packages and accept all of it's Licenses.

`ionic build android --release` <-- look into this

## Phonegap
http://phonegap.com/getstarted/
https://www.npmjs.com/package/phonegap

PhoneGap App allows you to test the app in realtime on your native device. No need for any compiling.

`npm install -g phonegap`
This will install the command line tool and give us access to use PhoneGap from the CLI.

Next install the mobile app called PhoneGap Developer app on your native device's app store.

Now you can run:
`phonegap serve` in the project's directory
