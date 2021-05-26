import { withStyles } from '@material-ui/core/styles';
import MuiButton from '@material-ui/core/Button';
import { CircularProgress } from '@material-ui/core';

const ColorButton = withStyles(() => ({
    root: {
      color: "#c5cee0",
      backgroundColor: "#5e03c5",
      '&:hover': {
        backgroundColor: "#5e03c5",
        backgroundColor: "#7025c7",
      },
      font: "inherit",
      fontWeight: 700,
      margin: "0.3rem",
      width: "100px"
    },
    outlined: {
      color: "#5e03c5",
      backgroundColor: "inherit",
      '&:hover': {
        // backgroundColor: "#7025c7",
        color: "#c5cee0",
        fontWeight: 600,
      },
      '&:active': {
        backgroundColor: "#5e03c5",
      },
      border: "solid 1px #5e03c5",
      fontWeight: 500,
    },
    fullWidth: {
        width: "100%"
    },
  }))(MuiButton);

const CustomButton = ({ children, onClick, fullWidth, isLoading = false, variant = "outlined", type = "button", width, size = "large" }) => {

    return (
      <ColorButton 
        size={size}
        fullWidth={fullWidth}
        variant={variant}
        onClick={onClick}
        type={type}
        style={{ width }}
      >
        { isLoading ? <CircularProgress color="inherit" size={21} /> : children }
      </ColorButton>
    ) 
}

export default CustomButton