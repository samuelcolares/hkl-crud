import { Avatar } from "../types";
import { useQuery } from "@tanstack/react-query";
import { getAvatars } from "../queries/get-avatars";

const useAvatars = () => {
  const { data: avatars = [], status } = useQuery<Avatar[], Error>({
    queryKey: ["avatars"],
    queryFn: getAvatars,
  });

  return {
    avatars,
    status,
  };
};

export default useAvatars;
