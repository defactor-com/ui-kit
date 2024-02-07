import React from "react";

import { Container } from "../Container";
import downIcon from "../../../public/assets/arrow-down-icon.svg";

export interface IHeaderObject {
  label: string;
  sortFunction?(): void;
}

export interface ITable {
  haveOptions?: boolean;
  headers: Array<IHeaderObject>;
  rows: Array<Array<React.ReactNode>>;
}

export const Table = ({ rows, headers, haveOptions }: ITable) => {
  return (
    <Container
      externalStyles="remove-padding"
      content={
        <table>
          <thead style={{ backgroundColor: "rgba(0, 169, 101, 0.05)" }}>
            <tr>
              {headers.map((item: IHeaderObject) => (
                <th key={item.label}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {item.label}
                    {item.sortFunction && (
                      <img
                        style={{ marginLeft: 4 }}
                        src={downIcon}
                        onClick={item.sortFunction}
                      />
                    )}
                  </div>
                </th>
              ))}
              {haveOptions && <th className="th-option" />}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index}>
                {row.map((itemRow, indexRow) => (
                  <td key={indexRow}>{itemRow}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      }
    />
  );
};
