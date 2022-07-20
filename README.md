# ReadME



![GitHub last commit](https://img.shields.io/github/last-commit/crice114/CarHacking)


## About

This project creates a car speedometer and rev gauge canbus simulator. The gauges are modelled after the Toyota Tacoma 2020 model gauges, including a max speed of 113 mph. The project runs on a Raspberry Pi and simulates a car outputting revs and speed, and displays via the frond end using nodejs and socketcan. The server is created using express, socket.io, socketcan and the gauges are created with the help of an existing canvas-gauge template. Project modelled after rhysmorgan134/Can-App


## Installation

```
npm install canvas-gauges
sudo apt install nodejs
```

## Usage
```
open [Raspberry Pi IP Address]:3000/index.html in web browser.

start server to present gauges.
```




```
# starts server, presents gauges in browser in terminal #1
node server.js

# starts sending car data to gauges in terminal #2
node car.js


```
## Acknowledgement
Project concept and execution inspired by rhysmorgan134/Can-App


