;(function (rb_calendar, undefined) {
    /*private properties ->*/






    /*<- private properties*/
    /*public methods and properties ->*/
    rb_calendar.foobar = "foobar";


    rb_calendar.say = function (msg) {
        speak(msg);
    };


    rb_calendar.sayHello = function () {
        rb_calendar.say("hello world");
    };

    /*<- public methods and properties*/

    /*private methods ->*/
    function speak(msg) {
        console.log("You said: " + msg);
    }
    /*<- private methods*/
    /****
    /* check to evaluate whether "rb_calendar" exists in the
    /* global rb_calendar - if not, assign window.rb_calendar an
    /* object literal
    ****/
})(window.rb_calendar = window.rb_calendar || {});