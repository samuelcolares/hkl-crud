import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { columns } from "./columns";
import { localizedTextsMap } from "@/src/utils/constants";
import { useStore } from "@/src/Providers/store-provider";
import { dataTableSX } from "@/src/theme/data-table-sx";

export default function PeopleDataGrid() {
  const { people, peopleStatus: status } = useStore();
  return (
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
        className="w-full"
        rowSelection={false}
        loading={status === "pending"}
      />
    </Box>
  );
}
