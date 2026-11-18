sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], (Controller, MessageToast) => {
    "use strict";

    return Controller.extend("pagespanelsnshellcontrolascontainer.controller.View1", {
        onInit() {
        },
    
        //  Functionality for button press, i.e Executes when the button is pressed
        onShowDetails: function() {
        MessageToast.show("Employee details displayed successfully!");
        }

    });
});