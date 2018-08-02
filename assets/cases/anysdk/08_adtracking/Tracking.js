const TipsManager = require('TipsManager');
cc.Class({
    extends: cc.Component,

	start: function () {
		this.adTrackingPlugin = anysdk.agentManager.getAdTrackingPlugin();
	},

	onRegister: function () {
		if (!this.adTrackingPlugin) {
			TipsManager.createTips(' this.adTrackingPlugin is null ');
			return;
		}
		this.adTrackingPlugin.onRegister("userid");
	},

	onLogin: function () {
		if (!this.adTrackingPlugin) {
			TipsManager.createTips(' this.adTrackingPlugin is null ');
			return;
		}
		var info = {
			"User_Id": "123456",
			"Role_Id": "test",
			"Role_Name": "test"
		};
		this.adTrackingPlugin.onLogin(info);
	},

	onPay: function () {
		if (!this.adTrackingPlugin) {
			TipsManager.createTips(' this.adTrackingPlugin is null ');
			return;
		}
		var myDate = new Date();
		var info = {
			"User_Id": "123456",
			"Order_Id": myDate.toLocaleTimeString(),
			"Currency_Amount": "5",
			"Currency_Type": "CNY",
			"Payment_Type": "test",
			"Payment_Time": myDate.toLocaleTimeString()
		};
		this.adTrackingPlugin.onPay(info);
	},

	trackEvent: function () {
		if (!this.adTrackingPlugin) {
			TipsManager.createTips(' this.adTrackingPlugin is null ');
			return;
		}
		this.adTrackingPlugin.trackEvent("event_1");
		this.adTrackingPlugin.trackEvent("event_2");
	},

	onCreateRole: function () {
		if (!this.adTrackingPlugin || !this.adTrackingPlugin.onCreateRole) {
			TipsManager.createTips(' this.adTrackingPlugin is null or onCreateRole is not supported ');
			return;
		}
		var info = {
			"User_Id": "123456",
			"Role_Id": "test",
			"Role_Name": "test"
		};
		this.adTrackingPlugin.trackEvent("onCreateRole", info);
	},

	onLevelUp: function () {
		if (!this.adTrackingPlugin || !this.adTrackingPlugin.onLevelUp) {
			TipsManager.createTips(' this.adTrackingPlugin is null  or onLevelUp is not supported');
			return;
		}
		var info = {
			"User_Id": "123456",
			"Role_Id": "test",
			"Role_Name": "test",
			"Level": "10"
		};
		this.adTrackingPlugin.trackEvent("onLevelUp", info);
	},

	onStartToPay: function () {
		if (!this.adTrackingPlugin || !this.adTrackingPlugin.onStartToPay) {
			TipsManager.createTips(' this.adTrackingPlugin is null or onStartToPay is not supported');
			return;
		}
		var myDate = new Date();
		var info = {
			"User_Id": "123456",
			"Order_Id": myDate.toLocaleTimeString(),
			"Currency_Amount": "5",
			"Currency_Type": "CNY",
			"Payment_Type": "test",
			"Payment_Time": myDate.toLocaleTimeString()
		};
		this.adTrackingPlugin.trackEvent("onStartToPay", info);
	}

});
