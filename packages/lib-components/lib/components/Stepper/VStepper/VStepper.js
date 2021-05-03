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
import { makeStyles, createStyles, withStyles, } from '@material-ui/core/styles';
import clsx from 'clsx';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepConnector from '@material-ui/core/StepConnector';
import VStepperBase from '../StepperBase/StepperBase';
var LineStepsConection = withStyles({
    alternativeLabel: {
        top: 3,
        left: 'calc(-50% + 1px)',
        right: 'calc(50% + 3px)',
    },
    active: {
        '& $line': {
            borderColor: '#efb94d',
        },
    },
    completed: {
        '& $line': {
            borderColor: '#efb94d',
        },
    },
    line: {
        borderColor: '#eaeaf0',
        borderTopWidth: 3,
        borderRadius: 1,
    },
})(StepConnector);
var iconStepsStylesConnector = makeStyles({
    root: {
        color: '#eaeaf0',
        display: 'flex',
        alignItems: 'center',
        zIndex: 1,
    },
    active: {
        color: '#efb94d',
        backgroundColor: 'currentColor',
        width: 8,
        height: 8,
        borderRadius: '50%',
    },
    circle: {
        width: 8,
        height: 8,
        borderRadius: '50%',
        backgroundColor: 'currentColor',
    },
    completed: {
        color: '#efb94d',
    },
});
var controlStepsIcons = function (props) {
    var _a;
    var classes = iconStepsStylesConnector();
    var active = props.active, completed = props.completed;
    return (_jsx("div", __assign({ className: clsx(classes.root, (_a = {},
            _a[classes.active] = active,
            _a)) }, { children: completed ? (_jsx("div", { className: classes.active }, void 0)) : (_jsx("div", { className: classes.circle }, void 0)) }), void 0));
};
var stepperStyles = makeStyles(function (theme) {
    return createStyles({
        root: {
            width: '100%',
        },
        button: {
            marginRight: theme.spacing(1),
        },
        instructions: {
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1),
        },
    });
});
var VStepper = function (_a) {
    var steps = _a.steps, showLabel = _a.showLabel, currentStep = _a.currentStep;
    var classes = stepperStyles();
    return (_jsx("div", __assign({ className: classes.root }, { children: _jsx(VStepperBase, __assign({ alternativeLabel: true, activeStep: currentStep, connector: _jsx(LineStepsConection, {}, void 0) }, { children: steps.length > 1 &&
                steps.map(function (step) { return (_jsx(Step, { children: _jsx(StepLabel, __assign({ StepIconComponent: controlStepsIcons }, { children: showLabel ? step.label : '' }), void 0) }, step.label)); }) }), void 0) }), void 0));
};
export default VStepper;
//# sourceMappingURL=VStepper.js.map