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

  return (
    <Box>
      {records.map((record) => (
        <Box padding={3} borderBottom="thick" key={record.id}>
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
