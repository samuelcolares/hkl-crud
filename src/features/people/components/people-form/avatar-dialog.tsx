import * as React from "react";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { IconButton, Stack, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Avatar as AvatarType } from "../../types";
import { cn, getRandomNumber } from "@/src/utils";
import { Status } from "@/src/types";
import { useCallback, useEffect, useState } from "react";
import LoaderCircle from "@/src/components/ui/icons/loader-circle";

export interface SimpleDialogProps {
  open: boolean;
  selectedValue: AvatarType;
  onClose: () => void;
  avatars: AvatarType[];
  selectAvatar: (avatar: AvatarType) => void;
}

const SimpleDialog: React.FC<SimpleDialogProps> = ({
  avatars,
  onClose,
  open,
  selectedValue,
  selectAvatar,
}) => {
  return (
    <Dialog
      onClose={onClose}
      open={open}
      sx={{
        "& .MuiDialog-paper": {
          backgroundColor: "rgba(73, 78, 85, 0.42)",
          backdropFilter: "blur(10px)",
        },
      }}
    >
      <DialogTitle className="text-white">Selecione um avatar</DialogTitle>
      <IconButton
        aria-label="close"
        onClick={onClose}
        sx={(theme) => ({
          position: "absolute",
          right: 8,
          top: 8,
          color: theme.palette.grey[500],
        })}
      >
        <CloseIcon />
      </IconButton>
      <Stack
        direction={"row"}
        className="flex-wrap gap-4 justify-center p-2 pb-4"
      >
        {avatars.map((avatar) => (
          <Avatar
            key={avatar.id}
            onClick={() => selectAvatar(avatar)}
            alt={avatar.id.toString()}
            src={avatar.url}
            sx={{ border: 1 }}
            className={cn(
              "w-24 h-24 cursor-pointer hover:border-[#01AF0F] transition-all border-white hover:bg-primary/30",
              avatar.id === selectedValue.id &&
                "border-[#01AF0F] bg-primary/30 cursor-default"
            )}
          />
        ))}
      </Stack>
    </Dialog>
  );
};

type AvatarsDialogProps = {
  avatars: AvatarType[];
  status: Status;
  setAvatarUrl: (url: string) => void;
  defaultAvatar?: string;
};

const AvatarsDialog: React.FC<AvatarsDialogProps> = ({
  avatars,
  status,
  setAvatarUrl,
  defaultAvatar,
}) => {
  if (status === "pending")
    return (
      <Stack
        direction="column"
        spacing={1}
        className="items-start justify-start"
      >
        <Typography className="text-white">Avatar</Typography>
        <Button
          variant="outlined"
          disabled
          type="button"
          className="border-primary hover:border-white w-24 h-24"
        >
          <LoaderCircle className="text-white w-20 h-20 opacity-40" />
        </Button>
      </Stack>
    );

  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<AvatarType>(
    defaultAvatar
      ? avatars.find((avatar) => avatar.url === defaultAvatar)!
      : avatars[getRandomNumber({ min: 0, max: 20 })]
  );

  useEffect(() => {
    if (status === "success") {
      setAvatarUrl(selectedValue.url);
    }
  }, [status]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const selectAvatar = useCallback((avatar: AvatarType) => {
    setSelectedValue(avatar);
    setAvatarUrl(avatar.url);
  }, []);

  return (
    <div>
      <Stack
        direction="column"
        spacing={1}
        className="items-start justify-start"
      >
        <Typography className="text-white">Avatar</Typography>
        <Button
          variant="outlined"
          onClick={handleClickOpen}
          type="button"
          className="border-primary hover:border-white w-24 h-24"
        >
          <Avatar
            alt="selected-avatar"
            src={selectedValue.url}
            className="w-20 h-20"
          />
        </Button>
      </Stack>
      <SimpleDialog
        selectAvatar={selectAvatar}
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
        avatars={avatars}
      />
    </div>
  );
};

export default AvatarsDialog;
