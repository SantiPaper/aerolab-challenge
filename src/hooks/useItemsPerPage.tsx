import { useEffect, useState } from "react";

export const useItemsPerPage = () => {
  const [itemsPerPage, setItemsPerPage] = useState(8);

  useEffect(() => {
    if (window.innerWidth >= 1024) {
      setItemsPerPage(16);
    } else if (window.innerWidth >= 375) {
      setItemsPerPage(12);
    } else setItemsPerPage(8);
  }, [itemsPerPage]);

  return { itemsPerPage };
};
