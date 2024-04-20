const os = require("os").platform();

let year = new Date().getFullYear();
const obj = {
	"require_path": os == "linux" ? "/usr/local/lib/node_modules/" : "",
	"sprite_limit": 8192,
	"include_host": "",
	"encode": "utf-8",
	"init_cdn_dist": "https://www-ninja3-global.bluemorn.com/res/topic",
	"init_cdn_release": "https://www.pandadagames.com/res/topic",
	"cdn_path_dist": "",
	"cdn_path_release": "",
	"year": year,
	"ztName": "test",
	"side": ['pc', 'm', 'n'],     // 有多少个端
	"artOption": {
		test: /\.art$/,
		use: [{
			loader: "art-template-loader",
			options: {
				"compileDebug": true
			}
		}]
	},
};

obj.cdn_path_dist = `${obj.init_cdn_dist}/${year}/${obj.ztName}/`;
obj.cdn_path_release = `${obj.init_cdn_release}/${year}/${obj.ztName}/`;

module.exports = obj;