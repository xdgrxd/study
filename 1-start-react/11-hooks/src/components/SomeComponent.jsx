import { forwardRef, useImperativeHandle, useRef } from "react";

const SomeComponent = forwardRef((props, ref) => {
  const localInputRef = useRef();

  useImperativeHandle(ref, () => {
    return {
      validate: () => {
        if (localInputRef.current.value.length > 3) {
          localInputRef.current.value = "";
        }
    }
  }});

  return <div>
    <p>Insert up to 3 characters</p>
    <input type="text" ref={localInputRef} />
  </div>;
});

export default SomeComponent;
