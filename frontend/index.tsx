import { flexDirection } from "@airtable/blocks/dist/types/src/ui/system";
import {
  Box,
  initializeBlock,
  useBase,
  useRecords,
  useCursor,
  Label,
  CellRenderer,
} from "@airtable/blocks/ui";
import React from "react";

function HelloWorldTypescriptApp() {
  const base = useBase();
  const cursor = useCursor();
  const table = base.getTableById(cursor.activeTableId);
  const view = table.getViewById(cursor.activeViewId);
  const queryResult = view.selectRecords();
  const records = useRecords(queryResult);
  console.log(`records`, records);

  return (
    <Box>
      {records.map((record) => (
        <Box padding={3} borderBottom="thick">
          {table.fields.map((field) => (
            <>
              <Label>{field.name}</Label>
              <CellRenderer field={field} record={record} style={{
                  margin: '10px 0px'
              }} />
            </>
          ))}
        </Box>
      ))}
    </Box>
  );
}

initializeBlock(() => <HelloWorldTypescriptApp />);
