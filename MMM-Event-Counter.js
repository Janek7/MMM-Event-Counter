'use strict';

Module.register("MMM-Event-Counter", {

    defaults: {
        displayIcons: true,
    },

    // Override dom generator
    getDom: function () {

        var config = this.config;
        var wrapper = document.createElement("div");
        var table = document.createElement("table");

        for (var e in config.events) {

            var event = config.events[e];
            var eventRow = document.createElement("tr");

            // append icon
            if (config.displayIcons) {

                var iconTd = document.createElement("td");
                var icon = document.createElement("i");
                $(icon).addClass(event.icon === undefined || event.icon === '' || event.icon === null ?
                    "fas fa-calendar-alt" : "fas fa-" + event.icon);
                $(iconTd).append(icon);
                $(eventRow).append(iconTd);

            }

            // append name
            var nameTd = document.createElement("td");
            $(nameTd).text(event.name);
            $(eventRow).append(nameTd);

            //append time
            var timeTd = document.createElement("td");
            var timeDiff = Math.abs(new Date(event.date).getTime() - new Date().getTime());
            var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
            $(timeTd).text(this.translate("TIME_DAYS", {"days" : diffDays}));
            $(eventRow).append(timeTd);

            $(table).append(eventRow);

        }

        $(wrapper).append(table);
        return wrapper;

    },

    getScripts: function () {
        return [
            'https://code.jquery.com/jquery-2.2.3.min.js',  // this file will be loaded from the jquery servers.
        ]
    },

    getStyles: function () {
        return [
            'https://use.fontawesome.com/releases/v5.7.1/css/all.css',
            'MMM-Event-Counter.css'
        ]
    },

    getTranslations: function() {
        return {
            en: "translations/en.json",
            de: "translations/de.json"
        }
    }

});