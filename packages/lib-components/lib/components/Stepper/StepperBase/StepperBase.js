var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import Stepper from '@material-ui/core/Stepper';
var VStepperBase = function (props) {
    return _jsx(Stepper, __assign({}, props, { children: props.children }), void 0);
};
export default VStepperBase;
//# sourceMappingURL=StepperBase.js.map