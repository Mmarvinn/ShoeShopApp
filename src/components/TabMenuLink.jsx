export const TabMenuLink = ({
  backgroundColor,
  textColor,
  text,
  isEnableBottomArrow,
}) => {
  const squareStyle = {
    width: '160px',
    height: '69.3px',
    backgroundColor: backgroundColor,
    position: 'relative',
    border: '1.5px solid #DEDEE0',
    zIndex: '0',
    textTransform: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };
  const textInSquareStyle = { fontSize: '15px', color: textColor };
  const bottomArrowStyle = {
    width: '14px',
    height: '14px',
    backgroundColor: backgroundColor,
    borderBottom: '1.5px solid #DEDEE0',
    borderRight: '1.5px solid #DEDEE0',
    zIndex: '1',
    transform: 'rotate(45deg)',
    position: 'absolute',
    top: '62px',
    left: '73px',
  };

  return (
    <div style={{ position: 'relative', height: '81px' }}>
      <div style={squareStyle}>
        <span style={textInSquareStyle}>{text}</span>
      </div>
      {isEnableBottomArrow && <div style={bottomArrowStyle} />}
    </div>
  );
};
