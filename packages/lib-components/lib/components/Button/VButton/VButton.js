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
import { makeStyles } from '@material-ui/styles';
import { BaseComponent } from '../../../baseComponents';
import ButtonBase from '../Base/ButtonBase';
var EBtnType;
(function (EBtnType) {
    EBtnType[EBtnType["primary"] = 0] = "primary";
    EBtnType[EBtnType["secsundary"] = 1] = "secsundary";
})(EBtnType || (EBtnType = {}));
var themeProps = {
    vrMainGreen: '#00AA13',
    white: '#ffff',
    vrSecundGreeen: '#00BC1E',
};
var useStyles = makeStyles({
    primary: function (props) { return ({
        backgroundColor: themeProps.vrMainGreen,
        color: themeProps.white,
        '&:hover': {
            backgroundColor: 'rgb(0 170 19 / 47%)',
        },
    }); },
    outlined: {
        backgroundColor: themeProps.white,
        color: themeProps.vrSecundGreeen,
        border: themeProps.vrSecundGreeen + " solid 2px",
    },
});
var VButton = function (props) {
    var btntype = props.btntype, children = props.children;
    var classes = useStyles(props);
    return (_jsx(BaseComponent, { children: _jsx(ButtonBase, __assign({ className: classes[btntype] }, props, { children: children }), void 0) }, void 0));
};
export default VButton;
//# sourceMappingURL=VButton.js.map