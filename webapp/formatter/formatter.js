sap.ui.define(
	[],
	function(){
		return {
			setStatus: function(status){
				switch(status){
					case "Registered":
					return "Success";
					case "Not Registered":
					return "Warning";
					case "Out of Market":
					return "Error";
					default:
				}
			}
		};
	}
	);