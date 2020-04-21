sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("MockDemo.MockDemo.controller.Main", {
		onInit: function () {
			var oModel = this.getOwnerComponent().getModel();
			var oView = this.getView();
			oView.setModel(oModel);
		}
	});
});