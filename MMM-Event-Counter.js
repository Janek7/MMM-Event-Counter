'use strict';

Module.register("MMM-Event-Counter", {

   defaults: {
       text: "Hello world!"
   } ,

    // Override dom generator
    getDom: function () {

        var config = this.config;
        var wrapper = document.createElement("div");
        var table = document.createElement("table");

        for (var i = 0; i < config.events.length; i++) {

            var event = config.events[i];

            // create fields
            var eventTitle = document.createElement("td");
            $(eventTitle).text(event.name);

            var eventTime = document.createElement("td");
            var timeDiff = Math.abs(new Date(event.date).getTime() - new Date().getTime());
            var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
            $(eventTime).text(diffDays + " Tage");

            // append as row
            var eventRow = document.createElement("tr");
            $(eventRow).append(eventTitle);
            $(eventRow).append(eventTime);
            $(table).append(eventRow);

        }

        $(wrapper).append(table);
        return wrapper;

    },

    getScripts: function() {
        return [
            'https://code.jquery.com/jquery-2.2.3.min.js',  // this file will be loaded from the jquery servers.
        ]
    }

});