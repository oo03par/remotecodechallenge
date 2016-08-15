# WDS Remote Code Challenge

This is an exercise, but there is not one right answer.  Please do not distribute without permission.
This is a deliberately simple project with a few small tasks to complete.

* Should take approximately one to two hours
* Do what seems right to you to complete the work
* Complete as many stories as you can
* Choose an appropriate technology to implement this in
* Should provide a method of proving the effectiveness of the program
* Please manually clone this repository and send us the link to your implementation when finished
* An example "devices.json" file is provided

---

## Story 1

As a DeviceTester 

I want to load in a list of devices from a file

So that I can deliver them on request

Acceptance Criteria:
* Load in a list of devices from a file in json format
* Example file provided - "devices.json"
* Return all devices loaded in on demand

---

## Story 2

As a DeviceTester

I want to retrieve devices based on full name (BRAND and MODEL)

So that I can return devices more selectively

Acceptance Criteria:
* Devices are loaded from a file (i.e. Story 1)
* Return a device or devices that match a full name (BRAND and MODEL separated by a space)

---

## Story 3

As a Device Tester

I want to ensure that my device file is valid

So that I do not see any invalid devices

Acceptance Criteria:
* Validate device based on the following criteria
	* full name (BRAND and MODEL separated by a space) should be unique
	* brand must be filled in - max length 50 characters
	* model must be filled in - max length 50 characters
	* form factor must be one of the following "CANDYBAR", "SMARTPHONE", "PHABLET", "CLAMSHELL"
	* attributes are optional
	* if any attributes are given, they must have a name and a value
	* attribute name max length 20 characters
	* attribute value max length 100 characters
* Only load valid devices from the JSON file
* Log invalid devices

---

## Story 4

As a DeviceTester

I want to retrieve devices based on their brand or model name 

So that I can return devices more selectively

Acceptance Criteria:
* Return a device or devices that match a brand name
* Return a device or devices that match a model name

---

Question: What would you do to improve things if you had more time?

If you have any questions then you can email dev@wds.co for help.

---

(c) WDS, A Xerox Company 2016.  Please do not distribute without permission.
