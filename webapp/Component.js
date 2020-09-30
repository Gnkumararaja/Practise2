sap.ui.define(
	["sap/ui/core/UIComponent"],
	function(UIComponent){
		return UIComponent.extend("second.fiori.Component",{
		metaData:{
			manifest:"json"
		},
		//constructor of the class, all the initialization code
		//must be added in this code
		init:function(){
			//calling the base class constructor to activate the base
			sap.ui.core.UIComponent.prototype.init.apply(this);
			//get the object of the router from parent
			var oRouter=this.getRouter();
			oRouter.initialize();
		},
		/*createContent:function(){
			
			var oName = new sap.ui.view ( "idMyXml",{
				viewName: "second.fiori.view.App",
				type : sap.ui.core.mvc.ViewType.XML
			});
			
			var oView1 = new sap.ui.view("idView1",{
				viewName: "second.fiori.view.View1",
				type:sap.ui.core.mvc.ViewType.XML
			});
	
			var oView2 = new sap.ui.view("idView2",{
				viewName: "second.fiori.view.View2",
				type: sap.ui.core.mvc.ViewType.XML
			});
			
			var oApp= oName.byId("idApp");
			oApp.addMasterPage(oView1).addDetailPage(oView2); 
			return oName;
		},*/
		destroy:function(){
			
		}
		
	});
	
	}
);