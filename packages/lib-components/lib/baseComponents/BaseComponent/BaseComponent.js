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
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import '@fontsource/montserrat';
var theme = createMuiTheme({
    typography: {
        fontFamily: ['Montserrat'].join(),
    },
});
var BaseComponent = function (props) {
    return _jsx(ThemeProvider, __assign({ theme: theme }, { children: props.children }), void 0);
};
export default BaseComponent;
//# sourceMappingURL=BaseComponent.js.map