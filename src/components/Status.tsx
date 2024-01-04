import React from 'react';

type StatusProps = {
    status: 'loading' | 'success' | 'error'
}

const Status = (props: StatusProps) => {

    let message;
    if(props.status === 'loading') {
        message = 'Loading...'
    } else if(props.status === 'success') {
        message = 'Data Fetched Successfully'
    } else if(props.status === 'error') {
        message = 'Error Fetching Data'
    }

  return (
    <div>
      <h2>Status - {message}</h2>
    </div>
  );
}

export default Status;


// I want to conditionally render statuses depending on a prop passed in as a parameter using a union of string literals as the "status type"