import clsx from "clsx";
import React from "react";

import { Container } from "../Container";
import downIcon from "../../../public/assets/arrow-down-icon.svg";
import admirationIcon from "../../../public/assets/admiration-icon.svg";

export interface IHeaderObject {
  label: string;
  sortFunction?(): void;
}

interface IRowsObject {
  function?(): void;
  items: Array<React.ReactNode>;
}

export interface ITable {
  emptyTitle?: string;
  haveOptions?: boolean;
  headerbgColor?: string;
  rows: Array<IRowsObject>;
  emptyDescription: string;
  headers: Array<IHeaderObject>;
}

export const Table = ({
  rows,
  headers,
  emptyTitle,
  haveOptions,
  headerbgColor,
  emptyDescription,
}: ITable) => {
  return (
    <Container
      externalStyles="remove-padding"
      content={
        <>
          <table>
            <thead
              style={{
                backgroundColor: headerbgColor
                  ? headerbgColor
                  : "rgba(0, 169, 101, 0.05)",
              }}
            >
              <tr>
                {headers.map((item: IHeaderObject) => (
                  <th key={item.label}>
                    <div className="center-element">
                      {item.label}
                      {item.sortFunction && (
                        <img
                          src={downIcon}
                          onClick={item.sortFunction}
                          className="margin-left-medium"
                        />
                      )}
                    </div>
                  </th>
                ))}
                {haveOptions && <th className="th-option" />}
              </tr>
            </thead>
            {rows?.length > 0 && (
              <tbody>
                {rows?.map((row, index) => (
                  <tr
                    key={index}
                    onClick={row.function}
                    className={row.function ? "cursor-pointer" : ""}
                  >
                    {row.items.map((itemRow, indexRow) => (
                      <td key={indexRow}>{itemRow}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            )}
          </table>
          {!rows?.length && (
            <div className="empt-state-container">
              <img src={admirationIcon} className="img-empty" />
              <span className={clsx("variant-h3", "small-margin-button")}>
                {emptyTitle}
              </span>
              <span className="variant-body1">{emptyDescription}</span>
            </div>
          )}
        </>
      }
    />
  );
};
