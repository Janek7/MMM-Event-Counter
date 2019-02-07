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
    header: 'Events',
    config: {
        events: [
            {
                name: 'Holidays',
                date: '2019-06-08'
            },
            {
                name: 'Exam Period',
                date: '2019-07-01'
            },
            ...
        ],
    },
}
````

## Configuration
Every event can be configured through the following options

| Option | Description | Required |
|----------------- |----------- | ------- |
| `name` | name of the upcoming event | ✅  |
| `date` | date of the upcoming event to count down in format `YYYY-MM-DD` | ✅  |
| `icon` | displayed icon | ❌  |


## Dependencies
This module uses [jQuery](https://jquery.com/).