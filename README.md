# RADARSAT1_Challenge
## International Space Apps Challenge

We designed a web based program that shows satellite images from the RADARSAT by provided coordinates from the user. 

A database of all major Canadian cities is provided in the city detials page, users can use that to get your coordinate.


## How to use?
1. git clone
2. yarn install (make sure your device has yarn)
3. yarn start
4. input the coodinate of the city that you want to search (you can use city detials page)
5. click confirm location, see the city on the google map, then jump into the image page.
6. click show picture and you can download the HD image.

## Question?
1. if your browser does not show angthing:
In the command shell, input the following sentence to open the google browser with special version for testing.
open -n -a /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --args --user-data-dir="/tmp/chrome_dev_test" --disable-web-security

2. if the page ask you to input username and password:
Just click cross, never mind.