/// <reference types="react" />
import { ButtonProps } from '@material-ui/core/Button';
export interface IBtnProps extends ButtonProps {
    btntype: 'primary' | 'outlined';
}
export interface IBtnStyles {
    vrMainGreen: string | '#00AA13';
    white: string | '#ffff';
    vrSecundGreeen: string | '#00BC1E';
}
declare const VButton: React.FC<IBtnProps>;
export default VButton;
//# sourceMappingURL=VButton.d.ts.map