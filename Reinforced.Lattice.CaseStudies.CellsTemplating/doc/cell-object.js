var cell = {
    Row: {  // IRow object that represents row containing current cell
        DataObject: object { /*...*/ }, // Whole data object for current row
        Index: number,              // Zero-based row displaying index. 
        MasterTable:  { /*...*/ };      // reference to root table object this row behinds to
        Cells: {                    // Cells collection for this particular row
            "name" : ICell { /*...*/ },       // key = Raw column name (equals to C# property name)
            "name" : ICell { /*...*/ },       // value = ICell object
            /*...*/
        }
    },
    Column: {   // IColumn object that represents column containing current cell
        RawName: string,  // Raw column name (equals to TTargetData C# property name)
        Configuration: {  // Column configuration 
            Title: string,         // Column title
            Description: string,   // Column description
            Meta: object { /*...*/ },    // Column metadata object
            IsNullable: boolean    // True when corresponding C# property is nullable
        },
        MasterTable:  { /*...*/ };      // reference to root table object this column behinds to
        Order: number;              // Column order (left-to-right)
        IsDateTime: boolean;        // True when corresponding C# property type is DateTime
        IsInteger: boolean;         // True when corresponding C# property type is one of integer types (int, short, uint etc...)
        IsFloat: boolean;           // True when corresponding C# property type is one of fractional number types (float, double etc...)
        IsString: boolean;          // True when corresponding C# property type is string
        IsEnum: boolean;            // True when corresponding C# property is of enumeration type
        IsBoolean: boolean;         // True when corresponding C# property is of bool type
    },  
    Data: object,               // Current cell data
    DataObject: object { /*...*/ } // Whole data object for current row
}: