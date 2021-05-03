import Stepper, { StepperProps } from '@material-ui/core/Stepper';

export interface IStepper extends StepperProps {}

const VStepperBase: React.FC<IStepper> = (props) => {
  return <Stepper {...props}>{props.children}</Stepper>;
};

export default VStepperBase;
