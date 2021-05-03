import React from 'react';
import { StepperProps } from '@material-ui/core/Stepper';
interface IStep {
    label: string | null | undefined;
}
declare type TStepper = Omit<StepperProps, 'children'>;
export interface IStepper extends TStepper {
    children?: React.ReactNode;
    steps: Array<IStep>;
    showLabel: boolean;
    currentStep: number;
}
declare const VStepper: React.FC<IStepper>;
export default VStepper;
//# sourceMappingURL=VStepper.d.ts.map