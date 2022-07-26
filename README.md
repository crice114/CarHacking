# ReadME

![Gauges screenshot](https://user-images.githubusercontent.com/79558669/180919193-4b0581e3-ed1f-457c-8e1e-63e7c2ea8a78.png)


![GitHub last commit](https://img.shields.io/github/last-commit/crice114/CarHacking)


## About

This project creates a car speedometer and rev gauge canbus simulator. The gauges are modelled after the Toyota Tacoma 2020 model gauges, including a max speed of 113 mph. The project runs on a Raspberry Pi and simulates a car outputting revs and speed, and displays via the frond end using nodejs and socketcan. The Pi model I am using is Raspberry Pi 3- B model. The server is created using express, socket.io, socketcan and the gauges are created with the help of an existing canvas-gauge template. Project modelled after rhysmorgan134/Can-App


## Installation

```
# install samba onto the Pi
sudo apt install samba samba-common-bin

# create project folder, named share in this case
mkdir /home/pi/share

# set up smb.conf file
sudo nano /etc/samba/smb.conf

# add the following to the bottom of the file and save changes.
[Pishare]
Comment = Pi shared folder
Path = /share
Browsable = yes
Writable = yes
only guest = no
create mask = 0777
directory mask = 0777
Public = yes
Guest ok = yes

# Make a user to log into the Pi (username is pi in this case) and enter a password
sudo smbpasswd -a pi

# To test, in Network folder of your computer type: \\[Pi IP Address]\
# Map the Network drive.

# If you need to download nodejs or have a version before v10, download or upgrade nodejs.
sudo apt-get install -y nodejs

# Now cd to share directory, and make a directory we will call tutorial.
mkdir tutorial

# Now cd to tutorial and initialize as project directory where we will be installing packages.
npm init

# Press enter through all the options.

# install socketcan
npm install socketcan

# set up virtual canbus
sudo modprobe vcan
sudo ip link add dev vcan0 type vcan
sudo ip link set up vcan

# To test, type ifconfig and look for vcan

# install express
npm install express

# install canvas gauges and their packages
npm install canvas-gauges

# install socket.io to send information between backend to frontend.
npm install socket.io



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


