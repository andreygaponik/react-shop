import { useEffect } from "react";

const Alert = (props) => {
  useEffect(() => {
    const timerId = setTimeout(props.handleCloseAlert, 2000);

    return () => {
      clearTimeout(timerId);
    }
  }, [props.displayName]);

  return (
    <div id="toast-container">
      <div className="toast">{props.displayName} added to cart</div>
    </div>
  )
}

export default Alert;