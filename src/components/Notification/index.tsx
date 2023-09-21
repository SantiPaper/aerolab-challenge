import { StyledNotification } from "./style";
import success from "/assets/icons/system-success.svg";
import error from "/assets/icons/system-error.svg";
import cross from "/assets/icons/cross-default.svg";
import { useEffect } from "react";

type Props = {
  name: string;
  status: "success" | "error";
  onClose: (id: string) => void;
  id: string;
};

export const Notification = ({ name, status, onClose, id }: Props) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      onClose(id);
    }, 5000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);
  return (
    <StyledNotification className={status}>
      {status === "success" ? (
        <>
          <img width={32} height={32} src={success} alt="" />
          <p>
            <span>{name}</span> redeem successfully
          </p>
        </>
      ) : (
        <>
          <img width={32} height={32} src={error} alt="" />
          <p>There was a problem with the transaction</p>
        </>
      )}
      <button onClick={() => onClose(id)} aria-label="close notification">
        <img src={cross} alt="" />
      </button>
    </StyledNotification>
  );
};
