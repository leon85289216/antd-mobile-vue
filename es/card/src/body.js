import _initializerDefineProperty from "@babel/runtime/helpers/initializerDefineProperty";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import _applyDecoratedDescriptor from "@babel/runtime/helpers/applyDecoratedDescriptor";
import _initializerWarningHelper from "@babel/runtime/helpers/initializerWarningHelper";

var _dec, _dec2, _class, _class2, _descriptor;

import classnames from 'classnames';
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
var Body = (_dec = Component({
  name: 'Body'
}), _dec2 = Prop({
  default: 'am-card'
}), _dec(_class = (_class2 =
/*#__PURE__*/
function (_Vue) {
  _inheritsLoose(Body, _Vue);

  function Body() {
    var _temp, _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (_temp = _this = _Vue.call.apply(_Vue, [this].concat(args)) || this, _initializerDefineProperty(_this, "prefixCls", _descriptor, _assertThisInitialized(_this)), _temp) || _assertThisInitialized(_this);
  }

  var _proto = Body.prototype;

  _proto.render = function render() {
    var h = arguments[0];
    var prefixCls = this.prefixCls;
    var wrapCls = classnames(prefixCls + "-body");
    return h("div", {
      "class": wrapCls
    }, [this.$slots.default]);
  };

  return Body;
}(Vue), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "prefixCls", [_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class);
export { Body as default };