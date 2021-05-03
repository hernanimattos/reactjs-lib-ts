import React from 'react';
import {
  makeStyles,
  Theme,
  createStyles,
  withStyles,
} from '@material-ui/core/styles';
import clsx from 'clsx';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepConnector from '@material-ui/core/StepConnector';
import { StepIconProps } from '@material-ui/core/StepIcon';
import VStepperBase from '../StepperBase/StepperBase';
import { StepperProps } from '@material-ui/core/Stepper';

const LineStepsConection = withStyles({
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

const iconStepsStylesConnector = makeStyles({
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

const controlStepsIcons: React.FC<StepIconProps> = (props) => {
  const classes = iconStepsStylesConnector();
  const { active, completed } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
      })}
    >
      {completed ? (
        <div className={classes.active} />
      ) : (
        <div className={classes.circle} />
      )}
    </div>
  );
};

interface IStep {
  label: string | null | undefined;
}

type TStepper = Omit<StepperProps, 'children'>;

export interface IStepper extends TStepper {
  children?: React.ReactNode;
  steps: Array<IStep>;
  showLabel: boolean;
  currentStep: number;
}

const stepperStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
  })
);

const VStepper: React.FC<IStepper> = ({ steps, showLabel, currentStep }) => {
  const classes = stepperStyles();

  return (
    <div className={classes.root}>
      <VStepperBase
        alternativeLabel
        activeStep={currentStep}
        connector={<LineStepsConection />}
      >
        {steps.length >= 1 &&
          steps.map((step) => (
            <Step key={step.label}>
              <StepLabel StepIconComponent={controlStepsIcons}>
                {showLabel ? step.label : ''}
              </StepLabel>
            </Step>
          ))}
      </VStepperBase>
    </div>
  );
};

export default VStepper;
