'use strict';

Module.register("Event Counter", {
   defaults: {
       text: "Hello world!"
   } ,

    // Override dom generator
    getDom: function () {
        var wrapper = document.createElement("div");
        wrapper.innerHTML = this.config.text;
        return wrapper;
    }
});