// import React from 'react';

type MyStylesProps = {
    styles: React.CSSProperties
}

const MyStyles = (props: MyStylesProps) => {
  return (
    <div>
      <h2 style={props.styles}>My Styles Goes Here!</h2>
    </div>
  );
}

export default MyStyles;
