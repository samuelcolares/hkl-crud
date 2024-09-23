import { useStore } from "@/src/Providers/store-provider";
import { useMediaQuery } from "@/src/hooks/use-media-query.hook";

import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import PersonDialog from "../person-form";
import PeopleList from "../people-list";

import { columns } from "./columns";
import { dataTableSX } from "@/src/theme/data-table-sx";
import { localizedTextsMap } from "@/src/utils/constants";

const desktop = "(min-width: 1200px)";

export default function PeopleDataGrid() {
  const { people, peopleStatus: status } = useStore();
  const isDesktop = useMediaQuery(desktop);
  return (
    <Box className="space-y-2 flex-1">
      {isDesktop && (
        <Box>
          <DataGrid
            localeText={localizedTextsMap}
            rows={people}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            sx={dataTableSX}
            pageSizeOptions={[5]}
            rowSelection={false}
            loading={status === "pending"}
            className="w-full"
          />
        </Box>
      )}
      <PersonDialog variant="add" className={isDesktop ? "" : "ml-0 w-full"} />
      {!isDesktop && <PeopleList />}
    </Box>
  );
}
