import React from 'react';

type OscarProps = {
    children: React.ReactNode
}

const Oscar = (props: OscarProps) => {
  return (
    <div>
      <h5>{props.children}</h5>
    </div>
  );
}

export default Oscar;


// Passing react components as children props...