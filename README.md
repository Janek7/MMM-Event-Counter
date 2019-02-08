# MMM-Event-Counter

This is a module for the [MagicMirror²](https://github.com/MichMich/MagicMirror/) project which can displays the remaining time to a number of events.

## Installation

Navigate into your MagicMirror's modules folder:

``$ cd ~/MagicMirror/modules``

Clone this repository:

``$ git clone https://github.com/Janek7/MMM-Event-Counter.git``

Configure the module in your config.js file.

## Using module
Add the following JavaScript object to your modules array in ``config/config.js``
````
{
    module: 'MMM-Event-Counter',
    position: 'top_left',
    header: 'Time remaining until ...',
    config: {
        events: [
            {
                name: 'Holidays',
                date: '2019-06-08',
                icon: 'sun',
            },
            {
                name: 'Exam Period',
                date: '2019-07-01'
            },
            ...
        ],
        displayIcons: false
    },
}
````

## Configuration

### Entire module

The module can be configured through the following options

| Option | Description | Required |
|----------------- |----------- | ------- |
| `displayIcons` | name of the upcoming event | ❌ (*default*: `true`)  |

### Events

Every event can be configured through the following options

| Option | Description | Required |
|----------------- |----------- | ------- |
| `name` | name of the upcoming event | ✅  |
| `date` | date of the upcoming event to count down in format `YYYY-MM-DD` | ✅  |
| `icon` | displayed icon (only free fa icons can be used) | ❌ (*default*: `calendar-alt`)  |


## Dependencies
This module uses
+ [jQuery](https://jquery.com/)
+ [Font Awesome](https://origin.fontawesome.com/) icons