"use strict";var _baseComponent=_interopRequireDefault(require("../helpers/baseComponent")),_classNames2=_interopRequireDefault(require("../helpers/classNames"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function ownKeys(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function _objectSpread(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?ownKeys(r,!0).forEach(function(e){_defineProperty(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):ownKeys(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}(0,_baseComponent.default)({properties:{prefixCls:{type:String,value:"wux-prompt"},classNames:{type:null,value:"wux-animate--fadeIn"},icon:{type:String,value:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAQAAAAAYLlVAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAHdElNRQfgCxwAHyE2vHbUAAACWUlEQVRo3u2ZP2gTcRTHP7EpBTOJWrDSxdZBxE0yCC3UdilqUBCs4B8ogVfr0EnQ6lAEsylIXR6moFA1g6IoSAct7WhxUBQFsS5aLDgWcWitLjG5y11zufxyl8Hfd8n7vd+79z738svvfkfAysrqf1fC3609jHGYtnDJJBEuHiDpU7yNAkfj6sAmH990fOV9ADTN8fjK+3VA4izvB9AfL4B3EbY67E75Vn9qHeSCHAzfgQZJIU+f7moaAPvpAC7FAKAnPJ6EprkOQFbP6OZIAbSdgna5PEf4wSt6i8O7/NRx3RZdB84B4y7PGFsrYq7RExGAppgAhnV72ScDdDFVGi7ST4s8jqoD/77/UadTvkiW0wB8pltmZX3jBEYAmizd6YSmKiYfATAStLGadWDAYQ+5p+QXF4G5oBQGANrObccwr50VAXmG5HdQFs8RQpfoKA023Ip1N5c563E/5Qrvwj3NkqGiAU2Q5gYHfCczZPio55mvtuyMADTDHbZUDdnDLOhJKbiu+1O23Qe3sGsgFVC+HFejQgLIA1ro40OVkGUO0SpTtWYM/SuQdZljL/t44jM5T5od8lzWas8XehECCLznmO7kDc6HTLcshs9lsA/IEsOO4Wg95U13whmHPV1fCiMAWWWkaOZkpQkAwP3i52S9CQwBZIUccE+WmwQA3AKu1n+5MYB8JyufmggAte96EQGYyQJYAAtgASyA90y46rC/ahM68DLiigtBAFHfdC4AQBZ4GGH5tzwL6gCc8n3paIRe01v52trQ/wuqaI0X3JQZ80RWVlYN11+uNXxr6IunHwAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxNi0xMS0yOFQwMDozMTozMyswODowMBHRiXcAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTYtMTEtMjhUMDA6MzE6MzMrMDg6MDBgjDHLAAAAAElFTkSuQmCC"},title:{type:String,value:""},text:{type:String,value:""},buttons:{type:Array,value:[]},visible:{type:Boolean,value:!1}},computed:{classes:["prefixCls, buttons",function(r,e){return{wrap:(0,_classNames2.default)(r),button:e.map(function(e){var t;return{wrap:(0,_classNames2.default)("".concat(r,"__button"),(_defineProperty(t={},"".concat(r,"__button--disabled"),e.disabled),_defineProperty(t,"".concat(e.className),e.className),t)),hover:e.hoverClass&&"default"!==e.hoverClass?e.hoverClass:"".concat(r,"__button--hover")}}),bd:"".concat(r,"__bd"),icon:"".concat(r,"__icon"),title:"".concat(r,"__title"),buttons:"".concat(r,"__buttons")}}]},methods:{onTap:function(e){var t=this.data.buttons,r=e.currentTarget.dataset.index,n=this.data.buttons[r];n.disabled||this.triggerEvent("click",{index:r,value:n,buttons:t})},bindgetuserinfo:function(e){this.triggerEvent("getuserinfo",_objectSpread({},e.detail,{},e.currentTarget.dataset))},bindcontact:function(e){this.triggerEvent("contact",_objectSpread({},e.detail,{},e.currentTarget.dataset))},bindgetphonenumber:function(e){this.triggerEvent("getphonenumber",_objectSpread({},e.detail,{},e.currentTarget.dataset))},bindopensetting:function(e){this.triggerEvent("opensetting",_objectSpread({},e.detail,{},e.currentTarget.dataset))},onError:function(e){this.triggerEvent("error",_objectSpread({},e.detail,{},e.currentTarget.dataset))}}});