import { Notification } from "../Notification";
import { StyledContainerNotifications } from "./style";
type Status = "success" | "error";

export type Notification = {
  name: string;
  status: Status;
  id: string;
};

type Props = {
  notifications: Array<Notification>;
  onClose: (id: string) => void;
};

export const ContainerNotification = ({ notifications, onClose }: Props) => {
  return (
    <StyledContainerNotifications>
      {notifications.map((noti) => (
        <Notification key={noti.id} {...noti} onClose={onClose} />
      ))}
    </StyledContainerNotifications>
  );
};
