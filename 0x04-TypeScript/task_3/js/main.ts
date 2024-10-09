/// <reference path="./crud.d.ts" />
import {RowID, RowElement} from "./interface";
import * as CRUD from "./crud";
import {insertRow} from "./crud";

const row : RowElement = {
    firstName: "Gacha Kinfack", lastName: "Frejus Orens"
}

// @ts-ignore
const newRowId: RowID = CRUD.insertRow(row);
const updatedRow: RowElement ={
    firstName: "Gacha Kinfack", lastName: "Frejus Orens", age: 30
};
CRUD.updateRow(newRowId, updatedRow);
CRUD.deleteRow(newRowId);
