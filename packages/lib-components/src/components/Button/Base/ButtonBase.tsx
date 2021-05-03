import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { BaseComponent } from '../../../baseComponents';

const VBaseBtn = styled(Button)({
  minWidth: 190,
  height: 52,
  textTransform: 'capitalize',
});

const VBaseButton: React.FC<any> = (props) => {
  const { children, ...restProps } = props;

  return (
    <BaseComponent>
      <VBaseBtn {...restProps}>{children}</VBaseBtn>
    </BaseComponent>
  );
};

export default VBaseButton;
