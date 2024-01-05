export type InputProps = {
    value: string;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  };


//   created a separate file for the type input props, take note that this is necessary when working on large projects.

// keep in mind that types can be imported and exported just like components.


// It's also possible to extract a type and use it in multiple places - "RE-USING TYPES"...