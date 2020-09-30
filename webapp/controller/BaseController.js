sap.ui.define(
	["sap/ui/core/mvc/Controller",
	"second/fiori/model/models"],
	function (Controller, models) {
		return Controller.extend("second.fiori.BaseController", {
			initiateModels: function(){
				var oAppView = sap.ui.getCore().byId("idMyXml");
				var oModel = models.createFruitModel();
				oAppView.setModel(oModel);

			}
		});
	}

);