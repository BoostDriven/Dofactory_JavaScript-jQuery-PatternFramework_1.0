require.config({
    paths: {
        jquery: "http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min",
        module1: "modules/module1",
        module2: "modules/module2",
        module3: "modules/module3",
    }
});

require(["jquery", "module1"], function ($, mod1) {
    
    $("#clicker").on("click", function () {
        mod1.go();
    });
});
