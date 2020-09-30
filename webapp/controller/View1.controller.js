 sap.ui.define([
	"second/fiori/controller/BaseController",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function (BaseController,Filter,FilterOperator) {
	"use strict";

	return BaseController.extend("second.fiori.controller.View1", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf second-fiori.view.View1
		 */
		onInit: function () {

		},
		
		onUpdate: function(oEvent) {
			var oListActual = oEvent.getSource();
			oListActual.setSelectedItem(oListActual.getItems()[0]);
			var oView2 = this.getView().getParent().getParent().getDetailPages()[0];
			oView2.bindElement("/fruits/0");
		},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf second-fiori.view.View1
		 */
		//	onBeforeRendering: function() {
		//
		//	},
		
		onItemPress: function(oEvent){
			var oItempress=oEvent.getParameter("listItem");
			var addressofSelectedPath=oItempress.getBindingContextPath();
			var oView2=this.getView().getParent().getParent().getDetailPages()[0];
			oView2.bindElement(addressofSelectedPath); 
			
			//get the object of icon tab filter
			//inside that fragment
			//inside each fragment a simpleform
			//bind that simpleform with /address/index
			oView2.byId("filter3").getContent()[0].getItems()[0].bindElement("address/0");
			oView2.byId("filter3").getContent()[1].getItems()[0].bindElement("address/1");
			this.onShowMe();
			
		},
		
		onFilter:function(oEvent){
		/*	sap.m.MessageBox.confirm("This page is under construction..");*/
		var oFragment= new sap.ui.xmlfragment("second.fiori.fragments.popup");
		this.getView().addDependent(oFragment);
		oFragment.bindAggregation("items",{
			path:"/supplier",
			template: new sap.m.StandardListItem({
				description:"{sName}",
				title:"{sCity}"
			})
		});
		oFragment.open();
		},
		
		onSearch:function(oEvent){
			var searchStr=oEvent.getParameter("query");
			var oFilter=new Filter("fName",FilterOperator.Contains,searchStr);
			var oFilter1=new Filter("type",FilterOperator.Contains,searchStr);
			var mainFilter= new Filter({
				filters:[oFilter,oFilter1],
				and:false
				
			});
			var aFilter=[mainFilter];
			var oList=this.getView().byId("idFruits");
			oList.getBinding("items").filter(aFilter);
		},
		
		onShowMe:function(){
		//Step 1: Get the object of parent for both view : Container control
		var oApp=this.getView().getParent();
		//Step2: Call the to method to navigate to another view by passing Id
		oApp.to("idView2");
		}

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf second-fiori.view.View1
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf second-fiori.view.View1
		 */
		//	onExit: function() {
		//
		//	}

	});

});