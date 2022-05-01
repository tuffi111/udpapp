#!/usr/bin/bash

rm -rf ~/.androidjs/cache/sdk-static
androidjs build

# ~/AppData/Local/Android/Sdk/platform-tools/adb -s emulator-5554 install C:\data\moppel\Dokumente\Projects\UdpApp\dist\udpapp.apk
adb -s emulator-5554 install ~/Dokumente/Projects/UdpApp/dist/udpapp.apk

