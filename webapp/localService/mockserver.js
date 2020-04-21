sap.ui.define([
	"sap/ui/core/util/MockServer",
	"sap/base/Log"
], function(MockServer, Log) {
	"use strict";

	return {
		init: function() {
			var oMockServer = new MockServer({
				rootUri: "/"
			});

			MockServer.config({
				autoRespond: true,
				autoRespondAfter: 3000
			});
			
			oMockServer.simulate("../localService/metadata.xml", {
				sMockdataBaseUrl: "../localService/mockdata",
				bGenerateMissingMockData: true
			});

			oMockServer.start();

			Log.info("Running the app with mock data");
		}
	};
});