import Button, { ButtonProps } from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles';
import { BaseComponent } from '../../../baseComponents';
import ButtonBase from '../Base/ButtonBase';

enum EBtnType {
  primary,
  secsundary,
}

export interface IBtnProps extends ButtonProps {
  btntype: 'primary' | 'outlined';
}

export interface IBtnStyles {
  vrMainGreen: string | '#00AA13';
  white: string | '#ffff';
  vrSecundGreeen: string | '#00BC1E';
}

const themeProps: IBtnStyles = {
  vrMainGreen: '#00AA13',
  white: '#ffff',
  vrSecundGreeen: '#00BC1E',
};

const useStyles = makeStyles({
  primary: (props) => ({
    backgroundColor: themeProps.vrMainGreen,
    color: themeProps.white,
    '&:hover': {
      backgroundColor: 'rgb(0 170 19 / 47%)',
    },
  }),
  outlined: {
    backgroundColor: themeProps.white,
    color: themeProps.vrSecundGreeen,
    border: `${themeProps.vrSecundGreeen} solid 2px`,
  },
});

const VButton: React.FC<IBtnProps> = (props) => {
  const { btntype, children } = props;
  const classes = useStyles(props);
  return (
    <BaseComponent>
      <ButtonBase className={classes[btntype]} {...props}>
        {children}
      </ButtonBase>
    </BaseComponent>
  );
};

export default VButton;
