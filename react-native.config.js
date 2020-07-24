module.exports = {
    dependencies: {
        "react-native-camera": {
            platforms: {
                // disable only on iOS as we require some conditional setup
                ios: null,
            },
        },
        "react-native-code-push": {
            platforms: {
                // disable only on Android as we require some conditional setup
                android: null,
            },
        },
    },
};
