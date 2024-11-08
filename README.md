# BCC React Native App

This is a React Native Application that uses the `rn_cli` client.

## Installation Guide (macOS supported only)

### Install Xcode

In order to run the app on iOS Simulators you need to install Xcode. You can install Xcode by searching for it on the MAC App Store, which should come pre-installed.

### Install Node.js

You can find the installer on [this](https://nodejs.org/en/download) page. Download and run the appropriate version. This guide recommends LTS instead of current.

### Install Yarn (package manager)

You can install Yarn directly through the commmand line by running

```bash
curl -o- -L https://yarnpkg.com/install.sh | bash
```

### Install Homebrew


You can install Homebrew directly through the command line by running

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```


#### Install CocoaPods

If CocoaPods is not installed on your system yet:

```bash
brew install cocoapods
```

#### Install Dependencies & Run

Inside this directory (`BCF-APP`), install React Native and then to install the required packages run

```bash
yarn
```

re-add package workarounds iOS deps:

```bash
git reset --hard
```

Install iOS deps:

```bash
cd ios
pod install
```

To run:

- `yarn ios`

### Setup (Android)

1. Follow the [official Environment Setup guidance](https://reactnative.dev/docs/environment-setup) for Android (select `Android` for `Target OS`) to install Android Studio etc.
2. Set up either a virtual or physical device as outlined in the _Preparing the Android device_ section of the guidance.

To run:

- `yarn android`

Or quick start with:

- `yarn start`

Type "i" to start iOS app and "a" for Android.

