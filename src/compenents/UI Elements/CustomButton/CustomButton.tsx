import React, {FC} from 'react';
import classes from "./CustomButton.module.sass"

interface customButtonProps{
    label: string,
    onClick: () => void
}
const CustomButton: FC<customButtonProps> = ({ label, onClick}) => {
    return (
        <button className={classes.customButton} onClick={() => onClick()}>
            {label}
        </button>
    );
};

export default CustomButton;