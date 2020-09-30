 sap.ui.define([
 	"second/fiori/controller/BaseController",
 	"sap/m/MessageBox",
 	"sap/m/MessageToast",
 	"second/fiori/formatter/formatter"
 ], function (BaseController, MessageBox, MessageToast, Formatter) {
 	"use strict";

 	return BaseController.extend("second.fiori.controller.View2", {

 		/**
 		 * Called when a controller is instantiated and its View controls (if available) are already created.
 		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
 		 * @memberOf view.View2
 		 */
 		onInit: function () {

 		},

 		/**
 		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
 		 * (NOT before the first rendering! onInit() is used for that one!).
 		 * @memberOf view.View2
 		 */
 		//	onBeforeRendering: function() {
 		//
 		//	},

 		onApprove: function () {
 			this.selectedFruit = this.getView().byId("idHeader").getTitle();
 			var that = this;
 			MessageBox.confirm("Do you really like this fruit?", {
 				onClose: function (status) {
 					if (status === "OK") {
 						MessageToast.show("Thats cool" + that.selectedFruit);
 					} else {
 						MessageToast.show("Thanks");
 					}
 				}
 			});
 		},

 		formatter: Formatter,

 		onBack: function () {
 			//Step 1: Get the object of parent for both view : Container control
 			var oApp = this.getView().getParent();
 			//Step2: Call the to method to navigate to another view by passing Id
 			oApp.to("idView1");
 		},

 		onConfirm: function (oEvent) {
 			var oVal = oEvent.getParameter("selectedItem").getTitle();
 			this.getView().byId(this.cellId).setValue(oVal);

 		},

 		onValueHelp: function (oEvent) {
 			this.cellId = oEvent.getSource().getId();
 			var oFragment = new sap.ui.xmlfragment("second.fiori.fragments.popup", this);
 			this.getView().addDependent(oFragment);
 			oFragment.bindAggregation("items", {
 				path: "/city",
 				template: new sap.m.StandardListItem({
 					description: "{state}",
 					title: "{cName}"
 				})
 			});
 			oFragment.open();
 		}

 		/**
 		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
 		 * This hook is the same one that SAPUI5 controls get after being rendered.
 		 * @memberOf view.View2
 		 */
 		//	onAfterRendering: function() {
 		//
 		//	},

 		/**
 		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
 		 * @memberOf view.View2
 		 */
 		//	onExit: function() {
 		//
 		//	}

 	});

 });