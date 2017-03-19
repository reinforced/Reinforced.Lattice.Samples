declare module Reinforced.Lattice {
    interface ITableConfiguration {
        EmptyFiltersPlaceholder: string;
        Prefix: string;
        TableRootId: string;
        OperationalAjaxUrl: string;
        LoadImmediately: boolean;
        DatepickerOptions: Reinforced.Lattice.IDatepickerOptions;
        Columns: Reinforced.Lattice.IColumnConfiguration[];
        PluginsConfiguration: Reinforced.Lattice.IPluginConfiguration[];
        StaticData: string;
        CoreTemplates: Reinforced.Lattice.ICoreTemplateIds;
        KeyFields: string[];
        CallbackFunction: (table: Reinforced.Lattice.IMasterTable) => void;
        TemplateSelector: (row: Reinforced.Lattice.IRow) => string;
        MessageFunction: (msg: Reinforced.Lattice.ILatticeMessage) => void;
        Subscriptions: Reinforced.Lattice.IConfiguredSubscriptionInfo[];
        QueryConfirmation: (query: Reinforced.Lattice.ILatticeRequest, scope: Reinforced.Lattice.QueryScope, continueFn: any) => void;
        SelectionConfiguration: Reinforced.Lattice.ISelectionConfiguration;
        PrefetchedData: any[];
        Commands: {
            [key: string]: Reinforced.Lattice.Commands.ICommandDescription;
        };
        Partition: Reinforced.Lattice.IPartitionConfiguration;
    }
    interface IDatepickerOptions {
        CreateDatePicker: (element: HTMLElement, isNullableDate: boolean) => void;
        PutToDatePicker: (element: HTMLElement, date?: Date) => void;
        GetFromDatePicker: (element: HTMLElement) => Date;
        DestroyDatepicker: (element: HTMLElement) => void;
    }
    interface ICoreTemplateIds {
        Layout: string;
        PluginWrapper: string;
        RowWrapper: string;
        CellWrapper: string;
        HeaderWrapper: string;
    }
    interface ILatticeMessage {
        Type: Reinforced.Lattice.MessageType;
        Title: string;
        Details: string;
        Class: string;
    }
    interface IColumnConfiguration {
        Title: string;
        DisplayOrder: number;
        Description: string;
        Meta?: any;
        RawColumnName: string;
        CellRenderingTemplateId: string;
        CellRenderingValueFunction: (a: any) => string;
        ColumnType: string;
        IsDataOnly: boolean;
        IsEnum: boolean;
        IsNullable: boolean;
        ClientValueFunction: (a: any) => any;
        TemplateSelector: (cell: Reinforced.Lattice.ICell) => string;
        IsSpecial: boolean;
    }
    interface IPluginConfiguration {
        PluginId: string;
        Placement: string;
        Configuration: any;
        Order: number;
        TemplateId: string;
    }
    interface IUiListItem {
        Text: string;
        Value: string;
        Selected: boolean;
        Disabled: boolean;
    }
    interface ILatticeResponse {
        Message: Reinforced.Lattice.ILatticeMessage;
        ResultsCount: number;
        BatchSize: number;
        PageIndex: number;
        Data: any[];
        AdditionalData: any;
        Success: boolean;
    }
    interface ILatticeRequest {
        Command: string;
        Query: Reinforced.Lattice.IQuery;
    }
    interface IQuery {
        Partition?: Reinforced.Lattice.IPartition;
        Orderings: {
            [key: string]: Reinforced.Lattice.Ordering;
        };
        Filterings: {
            [key: string]: string;
        };
        AdditionalData: {
            [key: string]: string;
        };
        StaticDataJson: string;
        Selection: {
            [key: string]: number[];
        };
        IsBackgroundDataFetch: boolean;
    }
    interface IPartition {
        Skip: number;
        Take: number;
        NoCount: boolean;
    }
    interface ITableAdjustment {
        Message: Reinforced.Lattice.ILatticeMessage;
        IsUpdateResult: boolean;
        UpdatedData: any[];
        RemoveKeys: string[];
        OtherTablesAdjustments: {
            [key: string]: Reinforced.Lattice.ITableAdjustment;
        };
        AdditionalData: any;
    }
    interface IConfiguredSubscriptionInfo {
        IsRowSubscription: boolean;
        ColumnName: string;
        Selector: string;
        DomEvent: string;
        Handler: (dataObject: any, originalEvent: any) => void;
    }
    interface ISelectionConfiguration {
        SelectAllBehavior: Reinforced.Lattice.SelectAllBehavior;
        ResetSelectionBehavior: Reinforced.Lattice.ResetSelectionBehavior;
        CanSelectRowFunction: (dataObject: any) => boolean;
        CanSelectCellFunction: (dataObject: any, column: string, select: boolean) => boolean;
        NonselectableColumns: string[];
        SelectSingle: boolean;
        InitialSelected: {
            [key: string]: string[];
        };
    }
    interface IPartitionConfiguration {
        Type: Reinforced.Lattice.PartitionType;
        InitialSkip: number;
        InitialTake: number;
        Server: Reinforced.Lattice.IServerPartitionConfiguration;
        Sequential: Reinforced.Lattice.IServerPartitionConfiguration;
    }
    interface IPartitionRowData {
        UiColumnsCount: () => number;
        IsLoading: () => boolean;
        Stats: () => Reinforced.Lattice.IStatsModel;
        IsClientSearchPending: () => boolean;
        CanLoadMore: () => boolean;
        LoadAhead: () => number;
    }
    interface IStatsModel {
        IsSetFinite: () => boolean;
        Mode: () => Reinforced.Lattice.PartitionType;
        ServerCount: () => number;
        Stored: () => number;
        Filtered: () => number;
        Displayed: () => number;
        Ordered: () => number;
        Skip: () => number;
        Take: () => number;
        Pages: () => number;
        CurrentPage: () => number;
        IsAllDataLoaded: () => boolean;
    }
    interface IServerPartitionConfiguration {
        LoadAhead: number;
        UseLoadMore: boolean;
        AppendLoadingRow: boolean;
        LoadingRowTemplateId: string;
    }
    enum MessageType {
        UserMessage = 0,
        Banner = 1,
    }
    enum Ordering {
        Ascending = 0,
        Descending = 1,
        Neutral = 2,
    }
    enum SelectAllBehavior {
        AllVisible = 0,
        OnlyIfAllDataVisible = 1,
        AllLoadedData = 2,
        Disabled = 3,
    }
    enum ResetSelectionBehavior {
        DontReset = 0,
        ServerReload = 1,
        ClientReload = 2,
    }
    enum PartitionType {
        Client = 0,
        Server = 1,
        Sequential = 2,
    }
}
declare module Reinforced.Lattice.Plugins.Formwatch {
    interface IFormwatchClientConfiguration {
        DoNotEmbed: boolean;
        FieldsConfiguration: Reinforced.Lattice.Plugins.Formwatch.IFormwatchFieldData[];
        FiltersMappings: {
            [key: string]: Reinforced.Lattice.Plugins.Formwatch.IFormWatchFilteringsMappings;
        };
    }
    interface IFormwatchFieldData {
        FieldJsonName: string;
        FieldSelector: string;
        FieldValueFunction: () => any;
        TriggerSearchOnEvents: string[];
        ConstantValue: string;
        SearchTriggerDelay: number;
        SetConstantIfNotSupplied: boolean;
        AutomaticallyAttachDatepicker: boolean;
        IsDateTime: boolean;
        IsArray: boolean;
        IsBoolean: boolean;
        IsString: boolean;
        IsInteger: boolean;
        IsFloating: boolean;
        ArrayDelimiter: string;
    }
    interface IFormWatchFilteringsMappings {
        FilterType: number;
        FieldKeys: string[];
        ForServer: boolean;
        ForClient: boolean;
    }
}
declare module Reinforced.Lattice.Plugins.Hideout {
    interface IHideoutPluginConfiguration {
        ShowMenu: boolean;
        HideableColumnsNames: string[];
        ColumnInitiatingReload: string[];
        HiddenColumns: {
            [key: string]: boolean;
        };
        DefaultTemplateId: string;
    }
}
declare module Reinforced.Lattice.Filters.Range {
    interface IRangeFilterUiConfig {
        ColumnName: string;
        FromPlaceholder: string;
        ToPlaceholder: string;
        InputDelay: number;
        FromValue: string;
        ToValue: string;
        ClientFiltering: boolean;
        ClientFilteringFunction: (object: any, fromValue: string, toValue: string, query: IQuery) => boolean;
        TreatEqualDateAsWholeDay: boolean;
        Hidden: boolean;
        DefaultTemplateId: string;
    }
}
declare module Reinforced.Lattice.Filters.Value {
    interface IValueFilterUiConfig {
        Placeholder: string;
        InputDelay: number;
        DefaultValue: string;
        ColumnName: string;
        ClientFiltering: boolean;
        ClientFilteringFunction: (object: any, filterValue: string, query: IQuery) => boolean;
        Hidden: boolean;
        CompareOnlyDates: boolean;
        DefaultTemplateId: string;
    }
}
declare module Reinforced.Lattice.Plugins.ResponseInfo {
    interface IResponseInfoClientConfiguration {
        ClientCalculators: {
            [key: string]: (data: Reinforced.Lattice.IClientDataResults) => any;
        };
        ClientTemplateFunction: (data: any) => string;
        ResponseObjectOverriden: boolean;
        DefaultTemplateId: string;
    }
}
declare module Reinforced.Lattice.Filters.Select {
    interface ISelectFilterUiConfig {
        SelectedValue: string;
        IsMultiple: boolean;
        ColumnName: string;
        Items: Reinforced.Lattice.IUiListItem[];
        Hidden: boolean;
        ClientFiltering: boolean;
        ClientFilteringFunction: (object: any, selectedValues: string[], query: Reinforced.Lattice.IQuery) => boolean;
        DefaultTemplateId: string;
    }
}
declare module Reinforced.Lattice.Plugins.Limit {
    interface ILimitClientConfiguration {
        LimitValues: number[];
        LimitLabels: string[];
        DefaultTemplateId: string;
    }
}
declare module Reinforced.Lattice.Plugins.Ordering {
    interface IOrderingConfiguration {
        DefaultOrderingsForColumns: {
            [key: string]: Reinforced.Lattice.Ordering;
        };
        ClientSortableColumns: {
            [key: string]: (a: any, b: any) => number;
        };
        DefaultTemplateId: string;
    }
}
declare module Reinforced.Lattice.Plugins.Paging {
    interface IPagingClientConfiguration {
        ArrowsMode: boolean;
        UsePeriods: boolean;
        PagesToHideUnderPeriod: number;
        UseFirstLastPage: boolean;
        UseGotoPage: boolean;
        DefaultTemplateId: string;
    }
}
declare module Reinforced.Lattice.Plugins.Toolbar {
    interface IToolbarButtonsClientConfiguration {
        Buttons: Reinforced.Lattice.Plugins.Toolbar.IToolbarButtonClientConfiguration[];
        DefaultTemplateId: string;
    }
    interface IToolbarButtonClientConfiguration {
        Id: string;
        Css: string;
        Style: string;
        HtmlContent: string;
        Command: string;
        BlackoutWhileCommand: boolean;
        DisableIfNothingChecked: boolean;
        Title: string;
        OnClick: (table: Reinforced.Lattice.IMasterTable, menuElement: any) => void;
        Submenu: Reinforced.Lattice.Plugins.Toolbar.IToolbarButtonClientConfiguration[];
        HasSubmenu: boolean;
        IsMenu: boolean;
        Separator: boolean;
        InternalId: number;
        IsDisabled: boolean;
    }
}
declare module Reinforced.Lattice.Plugins.Total {
    interface ITotalResponse {
        TotalsForColumns: {
            [key: string]: any;
        };
    }
    interface ITotalClientConfiguration {
        ShowOnTop: boolean;
        ColumnsValueFunctions: {
            [key: string]: (a: any) => string;
        };
        ColumnsCalculatorFunctions: {
            [key: string]: (data: Reinforced.Lattice.IClientDataResults) => any;
        };
    }
}
declare module Reinforced.Lattice.Editing {
    interface IEditFieldUiConfigBase {
        TemplateId: string;
        FieldName: string;
        PluginId: string;
        ValidationMessagesTemplateId: string;
        FakeColumn: Reinforced.Lattice.IColumnConfiguration;
        ValidationMessagesOverride: {
            [key: string]: string;
        };
    }
    interface IEditFormUiConfigBase {
        Fields: Reinforced.Lattice.Editing.IEditFieldUiConfigBase[];
    }
}
declare module Reinforced.Lattice.Editing.Cells {
    interface ICellsEditUiConfig extends Reinforced.Lattice.Editing.IEditFormUiConfigBase {
        BeginEditEventId: string;
    }
}
declare module Reinforced.Lattice.Editing.Form {
    interface IFormEditUiConfig extends Reinforced.Lattice.Editing.IEditFormUiConfigBase {
        FormTargetSelector: string;
        FormTemplateId: string;
    }
}
declare module Reinforced.Lattice.Editing.Rows {
    interface IRowsEditUiConfig extends Reinforced.Lattice.Editing.IEditFormUiConfigBase {
        BeginEditEventId: string;
        CommitEventId: string;
        RejectEventId: string;
    }
}
declare module Reinforced.Lattice.Editing.Editors.Display {
    interface IDisplayingEditorUiConfig extends Reinforced.Lattice.Editing.IEditFieldUiConfigBase {
        PluginId: string;
        Template: (cell: ICell) => string;
    }
}
declare module Reinforced.Lattice.Editing.Editors.SelectList {
    interface ISelectListEditorUiConfig extends Reinforced.Lattice.Editing.IEditFieldUiConfigBase {
        PluginId: string;
        SelectListItems: Reinforced.Lattice.IUiListItem[];
        AllowEmptyString: boolean;
        EmptyElementText: string;
        AddEmptyElement: boolean;
        MissingKeyFunction: (a: any) => any;
        MissingValueFunction: (a: any) => any;
    }
}
declare module Reinforced.Lattice.Editing.Editors.Memo {
    interface IMemoEditorUiConfig extends Reinforced.Lattice.Editing.IEditFieldUiConfigBase {
        PluginId: string;
        WarningChars: number;
        MaxChars: number;
        Rows: number;
        Columns: number;
        AllowEmptyString: boolean;
    }
}
declare module Reinforced.Lattice.Editing.Editors.Check {
    interface ICheckEditorUiConfig extends Reinforced.Lattice.Editing.IEditFieldUiConfigBase {
        PluginId: string;
        IsMandatory: boolean;
    }
}
declare module Reinforced.Lattice.Editing.Editors.PlainText {
    interface IPlainTextEditorUiConfig extends Reinforced.Lattice.Editing.IEditFieldUiConfigBase {
        PluginId: string;
        ValidationRegex: string;
        EnableBasicValidation: boolean;
        FormatFunction: (value: any, column: IColumn) => string;
        ParseFunction: (value: string, column: IColumn, errors: Reinforced.Lattice.Editing.IValidationMessage[]) => any;
        FloatRemoveSeparatorsRegex: string;
        FloatDotReplaceSeparatorsRegex: string;
        AllowEmptyString: boolean;
        MaxAllowedLength: number;
    }
}
declare module Reinforced.Lattice.Plugins.LoadingOverlap {
    interface ILoadingOverlapUiConfig {
        Overlaps: {
            [key: string]: string;
        };
        DefaultTemplateId: string;
    }
    enum OverlapMode {
        All = 0,
        BodyOnly = 1,
        Parent = 2,
    }
}
declare module Reinforced.Lattice.Plugins.Reload {
    interface IReloadUiConfiguration {
        ForceReload: boolean;
        RenderTo: string;
        DefaultTemplateId: string;
    }
}
declare module Reinforced.Lattice.Plugins.Hierarchy {
    interface IHierarchyUiConfiguration {
        ParentKeyFields: string[];
        ExpandBehavior: Reinforced.Lattice.Plugins.Hierarchy.NodeExpandBehavior;
        CollapsedNodeFilterBehavior: Reinforced.Lattice.Plugins.Hierarchy.TreeCollapsedNodeFilterBehavior;
    }
    enum NodeExpandBehavior {
        LoadFromCacheWhenPossible = 0,
        AlwaysLoadRemotely = 1,
    }
    enum TreeCollapsedNodeFilterBehavior {
        IncludeCollapsed = 0,
        ExcludeCollapsed = 1,
    }
}
declare module Reinforced.Lattice.Plugins.MouseSelect {
    interface IMouseSelectUiConfig {
    }
}
declare module Reinforced.Lattice.Plugins.Checkboxify {
    interface ICheckboxifyUiConfig {
        SelectAllTemplateId: string;
    }
}
declare module Reinforced.Lattice.Adjustments {
    interface ISelectionAdditionalData {
        SelectionToggle: Reinforced.Lattice.Adjustments.SelectionToggle;
        Unselect: {
            [key: string]: string[];
        };
        Select: {
            [key: string]: string[];
        };
    }
    interface IReloadAdditionalData {
        ForceServer: boolean;
        ReloadTableIds: string[];
    }
    enum SelectionToggle {
        LeaveAsIs = 0,
        All = 1,
        Nothing = 2,
    }
}
declare module Reinforced.Lattice.Plugins.RegularSelect {
    interface IRegularSelectUiConfig {
        Mode: Reinforced.Lattice.Plugins.RegularSelect.RegularSelectMode;
    }
    enum RegularSelectMode {
        Rows = 0,
        Cells = 1,
    }
}
declare module Reinforced.Lattice.Commands {
    interface ICommandDescription {
        Name: string;
        ServerName: string;
        ClientFunction: (param: ICommandExecutionParameters) => any;
        ConfirmationDataFunction: (param: ICommandExecutionParameters) => any;
        CanExecute: (data: {
            Subject: any;
            Master: IMasterTable;
        }) => boolean;
        Type: Reinforced.Lattice.Commands.CommandType;
        Confirmation: Reinforced.Lattice.Commands.IConfirmationConfiguration;
        OnSuccess: (param: ICommandExecutionParameters) => void;
        OnFailure: (param: ICommandExecutionParameters) => void;
        OnBeforeExecute: (param: ICommandExecutionParameters) => any;
    }
    interface IConfirmationConfiguration {
        TemplateId: string;
        TemplatePieces: {
            [_: string]: (param: ICommandExecutionParameters) => string;
        };
        TargetSelector: string;
        Formwatch: Reinforced.Lattice.Plugins.Formwatch.IFormwatchFieldData[];
        Autoform: Reinforced.Lattice.Commands.ICommandAutoformConfiguration;
        Details: Reinforced.Lattice.Commands.IDetailLoadingConfiguration;
        ContentLoadingUrl: (subject: any) => string;
        ContentLoadingMethod: string;
        ContentLoadingCommand: string;
        InitConfirmationObject: (confirmationObject: any, param: ICommandExecutionParameters) => void;
        OnDismiss: (param: ICommandExecutionParameters) => void;
        OnCommit: (param: ICommandExecutionParameters) => void;
        OnContentLoaded: (param: ICommandExecutionParameters) => void;
        OnDetailsLoaded: (param: ICommandExecutionParameters) => void;
    }
    interface ICommandAutoformConfiguration {
        Autoform: Reinforced.Lattice.Editing.IEditFieldUiConfigBase[];
        DisableWhenContentLoading: boolean;
        DisableWhileDetailsLoading: boolean;
    }
    interface IDetailLoadingConfiguration {
        CommandName: string;
        TempalteId: string;
        LoadImmediately: boolean;
        ValidateToLoad: (param: ICommandExecutionParameters) => boolean;
        DetailsFunction: (param: ICommandExecutionParameters) => any;
        LoadDelay: number;
        LoadOnce: boolean;
    }
    enum CommandType {
        Client = 0,
        Server = 1,
    }
}
declare module Reinforced.Lattice.Plugins.Scrollbar {
    interface IScrollbarPluginUiConfig {
        WheelEventsCatcher: string;
        KeyboardEventsCatcher: string;
        IsHorizontal: boolean;
        StickToElementSelector: string;
        StickDirection: Reinforced.Lattice.Plugins.Scrollbar.StickDirection;
        StickHollow: Reinforced.Lattice.Plugins.Scrollbar.StickHollow;
        DefaultTemplateId: string;
        Keys: Reinforced.Lattice.Plugins.Scrollbar.IScrollbarKeyMappings;
        Forces: Reinforced.Lattice.Plugins.Scrollbar.IScrollbarForces;
        PositionCorrector: any;
        UseTakeAsPageForce: boolean;
        ScrollerMinSize: number;
        ArrowsDelayMs: number;
        AppendToElement: string;
        FocusMode: Reinforced.Lattice.Plugins.Scrollbar.KeyboardScrollFocusMode;
        ScrollDragSmoothness: number;
    }
    interface IScrollbarKeyMappings {
        SingleUp: number[];
        SingleDown: number[];
        PageUp: number[];
        PageDown: number[];
        Home: number[];
        End: number[];
    }
    interface IScrollbarForces {
        WheelForce: number;
        SingleForce: number;
        PageForce: number;
    }
    enum StickDirection {
        Right = 0,
        Left = 1,
        Top = 2,
        Bottom = 3,
    }
    enum StickHollow {
        Internal = 0,
        External = 1,
    }
    enum KeyboardScrollFocusMode {
        Manual = 0,
        MouseOver = 1,
        MouseClick = 2,
    }
}
declare module Reinforced.Lattice {
    /**
     * Client filter interface.
     * This interface is registerable in the DataHolderService as
     * one of the part of filtering pipeline
     */
    interface IClientFilter {
        /**
         * Predicate function that must return 'true' for
         * row that is actually suitable to be displayed according to
         * implementor's settings
         *
         * @param rowObject Row table object
         * @param query Data query
         * @returns True if row is suitable to be shown. False otherwise
         */
        filterPredicate(rowObject: any, query: Reinforced.Lattice.IQuery): boolean;
    }
    /**
     * Plugin interface.
     * Leave both render functions null to obtain non-displaying plugin
     */
    interface IPlugin extends IRenderable {
        /**
         * Raw configuration object including Plugin Id
         */
        RawConfig: Reinforced.Lattice.IPluginConfiguration;
        /**
         * Plugin Id including placement
         */
        PluginLocation: string;
        /**
         * Plugin order among its location
         */
        Order: number;
        /**
         * Beginning of plugin lifecycle
         *
         * @param masterTable
         * @param configuration
         */
        init(masterTable: IMasterTable): void;
    }
    /**
     * Main table interface for breaking additional dependencies
     */
    interface IMasterTable {
        /**
        * API for raising and handling various table events
        */
        Events: Reinforced.Lattice.Services.EventsService;
        /**
         * API for managing local data
         */
        DataHolder: Reinforced.Lattice.Services.DataHolderService;
        /**
         * API for data loading
         */
        Loader: Reinforced.Lattice.Services.LoaderService;
        /**
         * API for rendering functionality
         */
        Renderer: Rendering.Renderer;
        /**
         * API for locating instances of different components
         */
        InstanceManager: Reinforced.Lattice.Services.InstanceManagerService;
        /**
         * API for overall workflow controlling
         */
        Controller: Reinforced.Lattice.Services.Controller;
        /**
         * API for working with dates
         */
        Date: Reinforced.Lattice.Services.DateService;
        /**
         * API for working with selection
         */
        Selection: Reinforced.Lattice.Services.SelectionService;
        /**
         * Absorb and draw table adjustments
         *
         * @param adjustments Table adjustmetns object
         */
        proceedAdjustments(adjustments: Reinforced.Lattice.ITableAdjustment): void;
        /**
        * API for table messages
        */
        MessageService: Reinforced.Lattice.Services.MessagesService;
        /**
         * API for commands
         */
        Commands: Reinforced.Lattice.Services.CommandsService;
        Partition: Reinforced.Lattice.Services.Partition.IPartitionService;
        Configuration: Reinforced.Lattice.ITableConfiguration;
        Stats: Reinforced.Lattice.IStatsModel;
        getStaticData(): any;
        setStaticData(obj: any): void;
    }
    /**
     * This enumeration distinguishes which way
     * underlying query will be used
     */
    enum QueryScope {
        /**
         * Mentioned query will be sent to server to obtain
         * data (probably) for further local filtration.
         * All locally filtered fields should be excluded from
         * underlying query
         */
        Server = 0,
        /**
         * Mentioned query will be used for local data filtration.
         * To gain performance, please exclude all data settings that were
         * applied during server request
         */
        Client = 1,
        /**
         * This query should contain both data for client and server filtering.
         * Transboundary queries are used to obtain query settings
         * that will be used on server side to retrieve data set that
         * will be used for server command handling, so server needs all filtering settings
         */
        Transboundary = 2,
    }
    /**
     * Interface for classes that are available to modify data query
     */
    interface IQueryPartProvider {
        /**
         * This method is called every time when master table needs
         * data query for its reasons. You will receive existing query part in
         * 'query' parameter and query scope denoting which this query will be used for
         * in 'scope' parameter
         *
         * @param query Existing query part
         * @param scope Query scope
         * @returns {}
         */
        modifyQuery(query: IQuery, scope: QueryScope): void;
    }
    /**
     * Renderable entity
     */
    interface IRenderable {
        /**
        * Renders whole element to string using templates provider
        *
        * @param templatesProvider Cached templates provider
        * @returns String containing HTML code for element
        */
        renderElement?: (templateProcess: Reinforced.Lattice.Templating.TemplateProcess) => void;
        /**
        * Renders element to HTML string using templates provider
        *
        * @param templatesProvider Cached templates provider
        * @returns String containing HTML code for element
        */
        renderContent?: (templateProcess: Reinforced.Lattice.Templating.TemplateProcess) => void;
    }
    /**
     * Cell object
     */
    interface ICell extends IRenderable {
        /**
         * Associated row
         */
        Row: IRow;
        /**
         * Associated column
         */
        Column: IColumn;
        /**
         * Data for this specific cell
         */
        Data: any;
        /**
         * Whole data object associated with this specific cell
         */
        DataObject: any;
        /**
         * Overriden Template ID for cell
         */
        TemplateIdOverride?: string;
        /**
         * Is cell updated or not
         */
        IsUpdated?: boolean;
        /**
         * Does cell belong to an added row in case of parsering update result
         */
        IsAdded?: boolean;
        /**
         * Flag to note that this row was selected by user
         */
        IsSelected?: boolean;
    }
    /**
     * Colun header rendering object
     */
    interface IColumnHeader extends IRenderable {
        /**
         * Reference to containing column
         */
        Column: IColumn;
        /**
         * Overriden Template ID for header
         */
        TemplateIdOverride?: string;
    }
    /**
     * Row object
     */
    interface IRow extends IRenderable {
        /**
         * Data object for row
         */
        DataObject: any;
        /**
         * Displaying index.
         * You can obtain data for this particular row from DataHolderService
         * using localLookupDisplayedData method
         */
        Index: number;
        /**
         * Reference to table object this row belongs to
         */
        MasterTable: IMasterTable;
        /**
         * Cells collection for this particular row
         */
        Cells: {
            [key: string]: ICell;
        };
        /**
         * Special rows are bein added automatically.
         * This mark denotes them to avoid confusion
         */
        IsSpecial?: boolean;
        /**
         * Overriden Template ID for row
         */
        TemplateIdOverride?: string;
        /**
         * Flag to note that this row was selected by user
         */
        IsSelected?: boolean;
        /**
         * Is cell updated or not
         */
        IsUpdated?: boolean;
        /**
         * Does cell belong to an added row in case of parsering update result
         */
        IsAdded?: boolean;
        /**
         * True when row can be selected, false otherwise
         */
        CanBeSelected?: boolean;
        /**
         * Is row subject for command
         */
        IsCommandSubject?: boolean;
    }
    interface ITemplatesProvider {
        Executor: Reinforced.Lattice.Templating.TemplatesExecutor;
    }
    interface IColumn {
        /**
         *Raw column name
         */
        RawName: string;
        /**
         * Column configuration
         */
        Configuration: IColumnConfiguration;
        /**
         * Reference to master table
         */
        MasterTable: IMasterTable;
        /**
         * Column header
         */
        Header: IColumnHeader;
        /**
         * Column order (left-to-right)
         */
        Order: number;
        /**
         * Column order (left-to-right)
         */
        UiOrder: number;
        /**
         * True when column holds DateTime values
         */
        IsDateTime: boolean;
        /**
         * True when column holds Integer numbers
         */
        IsInteger: boolean;
        /**
         * True when column holds floating point
         */
        IsFloat: boolean;
        /**
         * True when column holds strings
         */
        IsString: boolean;
        /**
         * True when column holds enum values
         */
        IsEnum: boolean;
        /**
         * True when column holds boolean
         */
        IsBoolean: boolean;
    }
    interface IUiMessage extends ILatticeMessage {
        UiColumnsCount: number;
        IsMessageObject?: boolean;
    }
    interface IEditValidationEvent {
        OriginalDataObject: any;
        ModifiedDataObject: any;
        ValidationMessages: Reinforced.Lattice.Editing.IValidationMessage[];
    }
    /**
     * Interface for client data results event args
     */
    interface IClientDataResults {
        /**
         * Source data
         */
        Source: any[];
        /**
         * Filtered data
         */
        Filtered: any[];
        /**
         * Ordered data
         */
        Ordered: any[];
        /**
         * Actually displaying data
         */
        Displaying: any[];
        OnlyPartitionPerformed?: boolean;
    }
    /**
     * Event args wrapper for table
     */
    interface ITableEventArgs<T> {
        /**
         * Reverence to master table
         */
        MasterTable: IMasterTable;
        /**
         * Event arguments
         */
        EventArgs: T;
        /**
         * Describes event direction
         */
        EventDirection: EventDirection;
    }
    enum EventDirection {
        Before = 0,
        After = 1,
        Undirected = 2,
    }
    /**
     * Event args for loading events
     */
    interface ILoadingEventArgs {
        /**
         * Query to be sent to server
         */
        Request: ILatticeRequest;
        /**
         * Request object to be used while sending to server
         */
        XMLHttp?: XMLHttpRequest;
    }
    interface ILoadingResponseEventArgs extends ILoadingEventArgs {
        /**
         * Response received from server
         */
        Response: ILatticeResponse;
    }
    /**
     * Event args for loading error event
     */
    interface ILoadingErrorEventArgs extends ILoadingEventArgs {
        /**
         * Error text
         */
        Reason: string;
    }
    /**
     * Event args for deferred data received event
     */
    interface IDeferredDataEventArgs extends ILoadingEventArgs {
        /**
         * Token to obtain deferred data
         */
        Token: string;
        /**
         * URL that should be queries to obtain request result
         */
        DataUrl: string;
    }
    /**
     * Event args for data received event
     */
    interface IDataEventArgs extends ILoadingEventArgs {
        /**
         * Query response
         */
        Data: ILatticeResponse;
        IsAdjustment: boolean;
        Adjustments?: ITableAdjustment;
    }
    /**
     * Event args for query gathering process
     */
    interface IQueryGatheringEventArgs {
        /**
         * Query is being gathered
         */
        Query: IQuery;
        /**
         * Query scope that is used
         */
        Scope: QueryScope;
    }
    interface IRowEventArgs {
        /**
         * Master table reference
         */
        Master: IMasterTable;
        /**
         * Original event reference
         */
        OriginalEvent: Event;
        /**
         * Row index.
         * Data object can be restored using Table.DataHolderService.localLookupDisplayedData(RowIndex)
         */
        Row: number;
        /**
         * Stops event propagation
         */
        Stop: boolean;
    }
    /**
     * Event arguments for particular cell event
     */
    interface ICellEventArgs extends IRowEventArgs {
        /**
         * Column index related to particular cell.
         * Column object can be restored using Table.InstanceManagerService.getUiColumns()[ColumnIndex]
         */
        Column: number;
    }
    interface ISubscription {
        /**
         * Event Id
         */
        EventId: string;
        /**
         * Selector of element
         */
        Selector?: string;
        /**
         * Subscription ID (for easier unsubscribe)
         */
        SubscriptionId: string;
        Handler: any;
        filter?: {
            [key: string]: any;
        };
    }
    /**
     * Information about UI subscription
     */
    interface IUiSubscription<TEventArgs> extends ISubscription {
        /**
         * Event handler
         *
         * @param e Event arguments
         */
        Handler: (e: TEventArgs) => any;
    }
    interface IAdjustmentResult {
        NeedRefilter: boolean;
        AddedData: any[];
        TouchedData: any[];
        TouchedColumns: string[][];
    }
    /**
     * Result of searching among local data
     */
    interface ILocalLookupResult {
        /**
         * Data object reference itself
         */
        DataObject: any;
        /**
         * Is data object currently displaying or not
         */
        IsCurrentlyDisplaying: boolean;
        /**
         * Row index among loaded data
         */
        LoadedIndex: number;
        /**
         * Row index among displayed data
         */
        DisplayedIndex: number;
    }
    /**
     * Interface for component that receives and handles additional data that came with
     * particular response
     */
    interface IAdditionalDataReceiver {
        /**
         * Method for handling additional data request
         *
         * @param additionalData Additional data object
         * @returns {}
         */
        handleAdditionalData(additionalData: any): void;
    }
    /**
     * Command execution parameters
     */
    interface ICommandExecutionParameters {
        /**
         * Reference to command description
         */
        CommandDescription: Reinforced.Lattice.Commands.ICommandDescription;
        /**
         * Reference to master table
         */
        Master: IMasterTable;
        /**
         * Command subject (if any)
         * Object that command was triggered on
         */
        Subject: any;
        /**
         * Selection objects
         */
        Selection: any[];
        /**
         * Confirmation object (if any)
         * This field might be null when command confirmation has not been obtained yet
         */
        Confirmation: any;
        /**
         * Command execution result
         */
        Result: any;
        confirm: () => void;
        dismiss: () => void;
        Details: any;
    }
    interface IAdditionalRowsProvider {
        provide(rows: IRow[]): void;
    }
    interface IPartitionChangeEventArgs {
        PreviousSkip: number;
        PreviousTake: number;
        Skip: number;
        Take: number;
    }
    /**
    * Event that was bound from template
    */
    interface ITemplateBoundEvent {
        /**
         * Element triggered particular event
         */
        Element: HTMLElement;
        /**
         * Original DOM event
         */
        EventObject: Event;
        /**
         * Event received (to avoid using "this" in come cases)
         */
        Receiver: any;
        /**
         * Event argumetns
         */
        EventArguments: any[];
    }
}
declare module Reinforced.Lattice.Rendering {
    class Resensor {
        constructor(element: HTMLElement, handler: any);
        private requestAnimationFrame;
        private _resizeBoud;
        private _handler;
        private _sensor;
        private _expandChild;
        private _expand;
        private _shrink;
        private _lastWidth;
        private _lastHeight;
        private _newWidth;
        private _newHeight;
        private _dirty;
        private _element;
        private _rafId;
        attach(): void;
        private onResized();
        private onScroll();
        private reset();
        private static getComputedStyle(element, prop);
    }
}
declare module Reinforced.Lattice.Templating {
    interface IBackbindInfo {
        EventsQueue: IBackbindEvent[];
        MarkQueue: IBackbindMark[];
        DatepickersQueue: IBackbindDatepicker[];
        CallbacksQueue: IBackbindCallback[];
        DestroyCallbacksQueue: IBackbindCallback[];
        CachedVisualStates: {
            [key: string]: IState[];
        };
        HasVisualStates: boolean;
    }
    /**
    * @internal
    */
    interface IBackbindMark {
        ElementReceiver: any;
        FieldName: string;
        Key: any;
    }
    /**
   * @internal
   */
    interface IBackbindDatepicker {
        ElementReceiver: any;
        IsNullable: boolean;
    }
    /**
   * @internal
   */
    interface IBackbindCallback {
        Element?: HTMLElement;
        Callback: any;
        CallbackArguments: any[];
        Target: any;
    }
    /**
     * Descriptor for event from events queue
     */
    interface IBackbindEvent {
        /**
         * Event target.
         * Plugin, cell, header etc. Table entity that will receive event
         */
        EventReceiver: any;
        /**
         * Event handlers that will be called
         */
        Functions: string[];
        /**
         * DOM events that will trigger handler call
         */
        Events: string[];
        /**
         * Event argumetns
         */
        EventArguments: any[];
    }
    interface IState {
        /**
         * HTML element this state is applicable to
         */
        Element: HTMLElement;
        /**
         * Object that owns mentioned HTML element
         */
        Receiver: any;
        /**
         * State ID
         */
        id: string;
        /**
         * Classes to add/remove
         */
        classes: string[];
        /**
         * Attributes values in desired state
         */
        attrs: {
            [key: string]: string;
        };
        /**
         * Styles to be changed in desired state
         */
        styles: {
            [key: string]: string;
        };
        /**
         * Element HTML content to be set in particular state
         */
        content: string;
    }
}
declare module Reinforced.Lattice.Templating {
    interface ITemplatesLib {
        Prefix: string;
        Templates: {
            [_: string]: ITemplateDel;
        };
    }
    interface ITemplateDel {
        (data: any, driver: any, w: IWriteFn, p: TemplateProcess, s: IWriteFn): void;
    }
    interface IWriteFn {
        (str: string | number): void;
    }
    interface ITemplateResult {
        Html: string;
        BackbindInfo: IBackbindInfo;
    }
}
declare module Reinforced.Lattice.Templating {
    class TemplateProcess {
        constructor(uiColumns: () => IColumn[], executor: Reinforced.Lattice.Templating.TemplatesExecutor);
        private _stack;
        Html: string;
        w: IWriteFn;
        s: IWriteFn;
        Context: IRenderingContext;
        BackInfo: Reinforced.Lattice.Templating.IBackbindInfo;
        Executor: TemplatesExecutor;
        UiColumns: IColumn[];
        ColumnRenderes: {
            [key: string]: (x: ICell) => string;
        };
        private append(str);
        private autotrack(str);
        private static alphaRegex;
        private findStartTag(buf);
        nest(data: any, templateId: string): void;
        private spc(num);
        spaceW(): void;
        nestElement(e: IRenderable, templateId: string, type: RenderedObject): void;
        nestContent(e: IRenderable, templateId: string): void;
        d(model: any, type: RenderedObject): void;
        u(): void;
        vs(stateName: string, state: Reinforced.Lattice.Templating.IState): void;
        e(commaSeparatedFunctions: string, commaSeparatedEvents: string, eventArgs: any[]): void;
        rc(fn: any, args: any[]): void;
        dc(fn: any, args: any[]): void;
        m(fieldName: string, key: string, receiverPath: string): void;
        dp(condition: boolean, nullable: boolean): void;
        private trackAttr();
        isLoc(location: string): boolean;
        isLocation(): boolean;
    }
    /**
     * What renders in current helper method
     */
    enum RenderedObject {
        /**
         * Plugin (0)
         */
        Plugin = 0,
        /**
         * Column header (1)
         */
        Header = 1,
        /**
         * Row (containing cells) (2)
         */
        Row = 2,
        /**
         * Cell (belonging to row and column) (3)
         */
        Cell = 3,
        /**
         * Template region for messages
         */
        Message = 4,
        /**
         * Template region for partition tools row
         */
        Partition = 5,
        /**
         * Custom rendering object.
         * Needed for rendering of random templates bound to random objects
         */
        Custom = 6,
    }
}
declare module Reinforced.Lattice.Templating {
    class _ltcTpl {
        private static _lib;
        static _(prefix: string, id: string, tpl: ITemplateDel): void;
        static executor(prefix: string, table: Reinforced.Lattice.IMasterTable): TemplatesExecutor;
    }
}
declare module Reinforced.Lattice.Templating {
    class TemplatesExecutor {
        private _lib;
        ColumnRenderes: {
            [key: string]: (x: ICell) => string;
        };
        CoreTemplateIds: ICoreTemplateIds;
        Instances: Reinforced.Lattice.Services.InstanceManagerService;
        private _master;
        private _uiColumns;
        constructor(lib: ITemplatesLib, masterTable: Reinforced.Lattice.IMasterTable);
        Spaces: {
            [_: number]: string;
        };
        private cacheColumnRenderers(columns);
        executeLayout(): ITemplateResult;
        beginProcess(): TemplateProcess;
        endProcess(tp: TemplateProcess): ITemplateResult;
        execute(data: any, templateId: string): ITemplateResult;
        nest(data: any, templateId: string, p: TemplateProcess): void;
        hasTemplate(templateId: string): boolean;
        obtainRowTemplate(rw: IRow): string;
        obtainCellTemplate(cell: ICell): string;
    }
}
declare module Reinforced.Lattice.Templating {
    class Driver {
        static body(p: Reinforced.Lattice.Templating.TemplateProcess): void;
        static content(p: Reinforced.Lattice.Templating.TemplateProcess, columnName?: string): void;
        static row(p: Reinforced.Lattice.Templating.TemplateProcess, row: IRow): void;
        static headerContent(head: IColumnHeader, p: Reinforced.Lattice.Templating.TemplateProcess): void;
        static rowContent(row: IRow, p: Reinforced.Lattice.Templating.TemplateProcess, columnName?: string): void;
        static cell(p: TemplateProcess, cell: ICell): void;
        static cellContent(c: ICell, p: TemplateProcess): void;
        static plugin(p: TemplateProcess, pluginPosition: string, pluginId: string): void;
        static plugins(p: TemplateProcess, pluginPosition: string): void;
        static renderPlugin(p: TemplateProcess, plugin: IPlugin): void;
        static colHeader(p: Reinforced.Lattice.Templating.TemplateProcess, columnName: string): void;
        /**
         * Renders specified column's header into string including its wrapper
         *
         * @param column Column which header is about to be rendered
         * @returns {}
         */
        static header(p: Reinforced.Lattice.Templating.TemplateProcess, column: IColumn): void;
        static headers(p: TemplateProcess): void;
    }
}
declare module Reinforced.Lattice {
    /**
     * Wrapper for table event with ability to subscribe/unsubscribe
     */
    class TableEvent<TBeforeEventArgs, TAfterEventArgs> {
        constructor(masterTable: any);
        private _masterTable;
        private _beforeCount;
        private _afterCount;
        private _handlersAfter;
        private _handlersBefore;
        /**
         * Invokes event with overridden this arg and specified event args
         *
         * @param thisArg "this" argument to be substituted to callee
         * @param eventArgs Event args will be passed to callee
         */
        invokeBefore(thisArg: any, eventArgs: TBeforeEventArgs): void;
        /**
         * Invokes event with overridden this arg and specified event args
         *
         * @param thisArg "this" argument to be substituted to callee
         * @param eventArgs Event args will be passed to callee
         */
        invokeAfter(thisArg: any, eventArgs: TAfterEventArgs): void;
        /**
         * Invokes event with overridden this arg and specified event args
         *
         * @param thisArg "this" argument to be substituted to callee
         * @param eventArgs Event args will be passed to callee
         */
        invoke(thisArg: any, eventArgs: TAfterEventArgs): void;
        /**
         * Subscribes specified function to AFTER event with supplied string key.
         * Subscriber key is needed to have an ability to unsubscribe from event
         * and should reflect entity that has been subscriben
         *
         * @param handler Event handler to subscribe
         * @param subscriber Subscriber key to associate with handler
         */
        subscribeAfter(handler: (e: ITableEventArgs<TAfterEventArgs>) => any, subscriber: string): void;
        /**
         * Subscribes specified function to AFTER event with supplied string key.
         * Subscriber key is needed to have an ability to unsubscribe from event
         * and should reflect entity that has been subscriben
         *
         * @param handler Event handler to subscribe
         * @param subscriber Subscriber key to associate with handler
         */
        subscribe(handler: (e: ITableEventArgs<TAfterEventArgs>) => any, subscriber: string): void;
        /**
         * Subscribes specified function to BEFORE event with supplied string key.
         * Subscriber key is needed to have an ability to unsubscribe from event
         * and should reflect entity that has been subscriben
         *
         * @param handler Event handler to subscribe
         * @param subscriber Subscriber key to associate with handler
         */
        subscribeBefore(handler: (e: ITableEventArgs<TBeforeEventArgs>) => any, subscriber: string): void;
        /**
         * Unsubscribes specified addressee from event
         * @param subscriber Subscriber key associated with handler
         */
        unsubscribe(subscriber: string): void;
        /**
         * Unsubscribes specified addressee from event
         * @param subscriber Subscriber key associated with handler
         */
        unsubscribeAfter(subscriber: string): void;
        /**
         * Unsubscribes specified addressee from event
         * @param subscriber Subscriber key associated with handler
         */
        unsubscribeBefore(subscriber: string): void;
    }
}
declare module Reinforced.Lattice {
    /**
    * Helper class for producing track ids.
    * You can use this class directly, but it is better to use it via @memberref Reinforced.Lattice.Master.Renderer.Rendering.Modifier instance
    */
    class TrackHelper {
        /**
         * Returns string track ID for cell
         */
        static getCellTrack(cell: ICell): string;
        /**
         * Returns string track ID for cell
         */
        static getCellTrackByIndexes(rowIndex: number, columnIndex: number): string;
        /**
         * Returns string track ID for plugin
         */
        static getPluginTrack(plugin: IPlugin): string;
        /**
         * Returns string track ID for plugin
         */
        static getPluginTrackByLocation(pluginLocation: string): string;
        /**
         * Returns string track ID for header
         */
        static getHeaderTrack(header: IColumnHeader): string;
        /**
         * Returns string track ID for header
         */
        static getHeaderTrackByColumnName(columnName: string): string;
        /**
         * Returns string track ID for row
         */
        static getRowTrack(row: IRow): string;
        /**
         * Returns string track ID for row
         */
        static getRowTrackByObject(dataObject: any): string;
        /**
         * Returns string track ID for row
         */
        static getMessageTrack(): string;
        /**
         * Returns string track ID for row
         */
        static getPartitionRowTrack(): string;
        /**
         * Returns string track ID for row
         */
        static getRowTrackByIndex(index: number): string;
        /**
         * Parses cell track to retrieve column and row index
         *
         * @param e HTML element containing cell with wrapper
         * @returns {ICellLocation} Cell location
         */
        static getCellLocation(e: HTMLElement): ICellLocation;
        /**
         * Parses row track to retrieve row index
         *
         * @param e HTML element containing row with wrapper
         * @returns {number} Row index
         */
        static getRowIndex(e: HTMLElement): number;
    }
    /**
     * Interface describing cell location
     */
    interface ICellLocation {
        /**
         * Row index
         */
        RowIndex: number;
        /**
         * Column index
         */
        ColumnIndex: number;
    }
}
declare module Reinforced.Lattice {
    /**
     * Components container for registration/resolving plugins
     */
    class ComponentsContainer {
        private static _components;
        /**
         * Registers component in components container for further instantiation
         * @param key Text ID for component
         * @param ctor Constructor function
         * @returns {}
         */
        static registerComponent(key: string, ctor: Function): void;
        /**
         * Instantiates component by its ID with specified arguments
         * @param key Text ID of desired component
         * @param args String arguments for instantiation
         * @returns {}
         */
        static resolveComponent<T>(key: string, args?: any[]): T;
        /**
         * Registers component-provided events in particular EventsService instance.
         * It is important to register all component's events befor instantiation and .init call
         * to make them available to subscribe each other's events.
         *
         * Instance manager asserts that .registerEvent will be called exactly once for
         * each component used in table
         *
         * @param key Text ID of desired component
         * @param eventsManager Events manager instance
         * @returns {}
         */
        static registerComponentEvents(key: string, eventsManager: Reinforced.Lattice.Services.EventsService, masterTable: IMasterTable): void;
        static registerAllEvents(eventsManager: Reinforced.Lattice.Services.EventsService, masterTable: IMasterTable): void;
    }
}
declare module Reinforced.Lattice.Services {
    /**
     * API responsible for dates operations
     */
    class DateService {
        constructor(datepickerOptions: IDatepickerOptions);
        private _datepickerOptions;
        private ensureDpo();
        /**
         * Determines is passed object valid Date object
         * @param date
         * @returns {}
         */
        isValidDate(date: Date): boolean;
        /**
         * Converts jsDate object to server's understandable format
         *
         * @param date Date object
         * @returns {string} Date in ISO 8601 format
         */
        serialize(date?: Date): any;
        /**
         * Parses ISO date string to regular Date object
         *
         * @param dateString Date string containing date in ISO 8601
         * @returns {}
         */
        parse(dateString: string): Date;
        /**
         * Retrieves Date object from 3rd party datepicker exposed by HTML element
         *
         * @param element HTML element containing datepicker componen
         * @returns {Date} Date object or null
         */
        getDateFromDatePicker(element: HTMLElement): Date;
        /**
         * Creates datepicker object of HTML element using configured function
         *
         * @param element HTML element that should be converted to datepicker
         */
        createDatePicker(element: HTMLElement, isNullableDate?: boolean): void;
        /**
         * Creates datepicker object of HTML element using configured function
         *
         * @param element HTML element that should be converted to datepicker
         */
        destroyDatePicker(element: HTMLElement): void;
        /**
         * Passes Date object to datepicker element
         *
         * @param element HTML element containing datepicker componen
         * @param date Date object to supply to datepicker or null
         */
        putDateToDatePicker(element: HTMLElement, date: Date): void;
    }
}
declare module Reinforced.Lattice.Services {
    class StatsService implements Reinforced.Lattice.IStatsModel {
        constructor(master: IMasterTable);
        private _master;
        IsSetFinite(): boolean;
        Mode(): PartitionType;
        ServerCount(): number;
        Stored(): number;
        Filtered(): number;
        Displayed(): number;
        Ordered(): number;
        Skip(): number;
        Take(): number;
        Pages(): number;
        CurrentPage(): number;
        IsAllDataLoaded(): boolean;
    }
}
declare module Reinforced.Lattice.Services {
    /**
     * API for managing in-table elements' events
     */
    class EventsDelegatorService {
        /**
         * @internal
         */
        constructor(locator: Reinforced.Lattice.Rendering.DOMLocator, bodyElement: HTMLElement, layoutElement: HTMLElement, rootId: string, masterTable: IMasterTable);
        static addHandler(element: HTMLElement, type: string, handler: any, useCapture?: boolean): void;
        static removeHandler(element: HTMLElement, type: string, handler: any, useCapture?: boolean): void;
        private _masterTable;
        private _rootId;
        private _locator;
        private _bodyElement;
        private _layoutElement;
        private _outSubscriptions;
        private _matches;
        private traverseAndFire(subscriptions, path, args);
        private ensureMouseOpSubscriptions();
        private checkMouseEvent(eventId);
        private _previousMousePos;
        private onMouseMoveEvent(e);
        private _domEvents;
        private _outEvents;
        private ensureEventSubscription(eventId);
        private ensureOutSubscription(eventId);
        private _cellDomSubscriptions;
        /**
         * Subscribe handler to any DOM event happening on particular table cell
         *
         * @param subscription Event subscription
         */
        subscribeCellEvent(subscription: IUiSubscription<ICellEventArgs>): void;
        private _rowDomSubscriptions;
        /**
         * Subscribe handler to any DOM event happening on particular table row.
         * Note that handler will fire even if particular table cell event happened
         *
         * @param subscription Event subscription
         */
        subscribeRowEvent(subscription: IUiSubscription<IRowEventArgs>): void;
        private _directSubscriptions;
        /**
        * @internal
        */
        subscribeEvent(el: HTMLElement, eventId: string, handler: any, receiver: any, eventArguments: any[]): void;
        /**
         * @internal
         */
        subscribeOutOfElementEvent(el: HTMLElement, eventId: string, handler: any, receiver: any, eventArguments: any[]): void;
        /**
         * Subscribes event that will be fired when supplied element will be destroyed
         *
         * @param e HTML element destroying of which will fire event
         * @param callback Callback being called when element is destroyed
         */
        subscribeDestroy(e: HTMLElement, callback: Reinforced.Lattice.Templating.IBackbindCallback): void;
        private parseEventId(eventId);
        private filterEvent(e, propsObject);
        private onTableEvent(e);
        private onOutTableEvent(e);
        private _destroyCallbacks;
        /**
         * @internal
         */
        handleElementDestroy(e: Element): void;
        private collectElementsHavingAttribute(parent, attribute);
    }
}
declare module Reinforced.Lattice.Services {
    /**
     * Events manager for table.
     * Contains all available events
     */
    class EventsService {
        private _masterTable;
        constructor(masterTable: any);
        /**
         * "Before Layout Drawn" event.
         * Occurs before layout is actually drawn but after all table is initialized.
         */
        LayoutRendered: TableEvent<any, any>;
        /**
        * "Before Filter Gathering" event.
        * Occurs every time before sending request to server via LoaderService before
        * filtering information is being gathered. Here you can add your own
        * additional data to prepared query that will be probably overridden by
        * other query providers.
        */
        QueryGathering: TableEvent<IQueryGatheringEventArgs, IQueryGatheringEventArgs>;
        ClientQueryGathering: TableEvent<IQueryGatheringEventArgs, IQueryGatheringEventArgs>;
        /**
         * "Before Loading" event.
         * Occurs every time right before calling XMLHttpRequest.send and
         * passing gathered filters to server
         */
        Loading: TableEvent<ILoadingEventArgs, ILoadingEventArgs>;
        /**
         * "Deferred Data Received" event.
         * Occurs every time when server has answered to particular query with
         * with reference to deferred query. It means that server has memorized particular
         * request with specified token and will proceed data selection/other operations
         * when you query it by Operatioal AJAX URL + "?q=$Token$".
         *
         * This feature is usable when it is necessary e.g. to generate file (excel, PDF)
         * using current table filters
         */
        DeferredDataReceived: TableEvent<IDeferredDataEventArgs, any>;
        /**
         * "Loading Error" event.
         * Occurs every time when LoaderService encounters loading error.
         * It may be caused by server error or network (XMLHttp) error.
         * Anyway, error text/cause/stacktrace will be supplied as Reason
         * field of event args
         */
        LoadingError: TableEvent<ILoadingErrorEventArgs, any>;
        /**
         * "Columns Creation" event.
         * Occurs when full columns list formed and available for
         * modifying. Addition/removal/columns modification is acceptable
         */
        ColumnsCreation: TableEvent<{
            [key: string]: IColumn;
        }, any>;
        /**
         * "Data Received" event.
         * Occurs EVERY time when something is being received from server side.
         * Event argument is deserialized JSON data from server.
         */
        DataReceived: TableEvent<IDataEventArgs, IDataEventArgs>;
        ClientDataProcessing: TableEvent<IQuery, IClientDataResults>;
        DataRendered: TableEvent<any, any>;
        Filtered: TableEvent<any[], any[]>;
        Ordered: TableEvent<any[], any[]>;
        Partitioned: TableEvent<any[], any[]>;
        /**
         * Registers new event for events manager.
         * This method is to be used by plugins to provide their
         * own events.
         *
         * Events being added should be described in plugin's .d.ts file
         * as extensions to Events manager
         * @param eventName Event name
         * @returns {}
         */
        registerEvent<TEventArgs>(eventName: string): void;
        SelectionChanged: TableEvent<{
            [primaryKey: string]: number[];
        }, {
            [primaryKey: string]: number[];
        }>;
        Adjustment: TableEvent<Reinforced.Lattice.ITableAdjustment, IAdjustmentResult>;
        AdjustmentRender: TableEvent<IAdjustmentResult, IAdjustmentResult>;
        PartitionChanged: TableEvent<IPartitionChangeEventArgs, IPartitionChangeEventArgs>;
        /**
         * Event that occurs when editing entry.
         * Event parameter is object that is being edited
         */
        Edit: TableEvent<any, any>;
        /**
         * Event that occurs when edit validation failed
         */
        EditValidationFailed: TableEvent<IEditValidationEvent, IEditValidationEvent>;
    }
}
declare module Reinforced.Lattice.Services {
    /**
     * This entity is responsible for integration of data between storage and rendere.
     * Also it provides functionality for table events subscription and
     * elements location
     */
    class Controller implements IAdditionalDataReceiver {
        /**
         * @internal
         */
        constructor(masterTable: IMasterTable);
        private _masterTable;
        private _additionalRowsProviders;
        registerAdditionalRowsProvider(provider: IAdditionalRowsProvider): void;
        /**
         * Initializes full reloading cycle
         * @returns {}
         */
        reload(forceServer?: boolean): void;
        /**
         * Redraws row containing currently visible data object
         *
         * @param dataObject Data object
         * @returns {}
         */
        redrawVisibleDataObject(dataObject: any): HTMLElement;
        /**
         * Redraws locally visible data
         */
        redrawVisibleData(): void;
        /**
         * Redraws locally visible data
         */
        replaceVisibleData(rows: IRow[]): void;
        redrawVisibleCells(dataObject: any, columns: IColumn[]): void;
        redrawColumns(columns: IColumn[]): void;
        /**
         * @internal
         */
        drawAdjustmentResult(adjustmentResult: IAdjustmentResult): void;
        /**
         * Converts data object,row and column to cell
         *
         * @param dataObject Data object
         * @param idx Object's displaying index
         * @param column Column that this cell belongs to
         * @param row Row that this cell belongs to
         * @returns {ICell} Cell representing data
         */
        produceCell(dataObject: any, column: IColumn, row: IRow): ICell;
        /**
         * Converts data object to display row
         *
         * @param dataObject Data object
         * @param idx Object's displaying index
         * @param columns Optional displaying columns set
         * @returns {IRow} Row representing displayed object
         */
        produceRow(dataObject: any, columns?: IColumn[]): IRow;
        /**
         * @internal
         */
        produceRowsFromData(data: any[]): IRow[];
        /**
         * @internal
         */
        produceRows(): IRow[];
        handleAdditionalData(additionalData: Reinforced.Lattice.Adjustments.IReloadAdditionalData): void;
    }
}
declare module Reinforced.Lattice.Services {
    /**
     * Class that is responsible for holding and managing data loaded from server
     */
    class DataHolderService {
        constructor(masterTable: IMasterTable);
        private _configuration;
        private _hasPrimaryKey;
        private _rawColumnNames;
        private _comparators;
        private _filters;
        private _anyClientFiltration;
        private _events;
        private _instances;
        private _masterTable;
        private _clientValueFunction;
        /**
         * Data that actually is currently displayed in table.
         * If target user uses partition correctly - usually it is small collection.
         * And let's keep it small
         */
        DisplayedData: any[];
        /**
         * Data that was recently loaded from server
         */
        StoredData: any[];
        /**
 * Registers client filter
 *
 * @param filter Client filter
 */
        registerClientFilter(filter: IClientFilter): void;
        getClientFilters(): IClientFilter[];
        clearClientFilters(): void;
        compileKeyFunction(keyFields: string[]): (x: any) => string;
        private compileComparisonFunction();
        PrimaryKeyFunction: (x: any) => string;
        /**
         * Local objects comparison function based on key fields
         *
         * @param x Local data object 1
         * @param y Local data object 2
         * @returns {Boolean} True if objects are equal with primary key
         */
        DataObjectComparisonFunction: (x: any, y: any) => boolean;
        /**
         * Registers new client ordering comparer function
         *
         * @param dataField Field for which this comparator is applicable
         * @param comparator Comparator fn that should return 0 if entries are equal, -1 if a<b, +1 if a>b
         * @returns {}
         */
        registerClientOrdering(dataField: string, comparator: (a: any, b: any) => number, mandatory?: boolean): void;
        private _manadatoryOrderings;
        private isClientFiltrationPending();
        deserializeData(source: any[]): any[];
        private getNextNonSpecialColumn(currentColIndex);
        /**
        * Parses response from server and turns it to objects array
        */
        StoredCache: {
            [_: number]: any;
        };
        storeResponse(response: ILatticeResponse, clientQuery: IQuery): void;
        private _pkDataCache;
        /**
         * Client query that was used to obtain recent local data set
         */
        RecentClientQuery: IQuery;
        /**
         * Filters supplied data set using client query
         *
         * @param objects Data set
         * @param query Client query
         * @returns {Array} Array of filtered items
         */
        filterSet(objects: any[], query: IQuery): any[];
        satisfyCurrentFilters(obj: any): boolean;
        satisfyFilters(obj: any, query: IQuery): boolean;
        orderWithCurrentOrderings(set: any[]): any[];
        /**
        * Orders supplied data set using client query
        *
        * @param objects Data set
        * @param query Client query
        * @returns {Array} Array of ordered items
        */
        orderSet(objects: any[], query: IQuery): any[];
        /**
         * Part of data currently displayed without ordering and paging
         */
        Filtered: any[];
        /**
         * Part of data currently displayed without paging
         */
        Ordered: any[];
        /**
         * Filter recent data and store it to currently displaying data
         *
         * @param query Table query
         * @returns {}
         */
        filterStoredData(query: IQuery, serverCount: number): void;
        /**
         * Filter recent data and store it to currently displaying data
         * using query that was previously applied to local data
         */
        filterStoredDataWithPreviousQuery(): void;
        /**
         * Finds data matching predicate among locally stored data
         *
         * @param predicate Filtering predicate returning true for required objects
         * @returns Array of ILocalLookupResults
         */
        localLookup(predicate: (object: any) => boolean, setToLookup?: any[]): ILocalLookupResult[];
        /**
         * Finds data object among currently displayed and returns ILocalLookupResult
         * containing also Loaded-set index of this data object
         *
         * @param index Index of desired data object among locally displaying data
         * @returns ILocalLookupResult
         */
        localLookupDisplayedDataObject(dataObject: any): ILocalLookupResult;
        /**
         * Finds data object among currently displayed and returns ILocalLookupResult
         * containing also Loaded-set index of this data object
         *
         * @param index Index of desired data object among locally displaying data
         * @returns ILocalLookupResult
         */
        localLookupStoredDataObject(dataObject: any): ILocalLookupResult;
        /**
         * Finds data object among recently loaded and returns ILocalLookupResult
         * containing also Loaded-set index of this data object
         *
         * @param index Index of desired data object among locally displaying data
         * @returns ILocalLookupResult
         */
        localLookupStoredData(index: number): ILocalLookupResult;
        getByPrimaryKeyObject(primaryKeyPart: any): any;
        getByPrimaryKey(primaryKey: string): any;
        detachByKey(key: string): void;
        detach(dataObject: any): void;
        /**
         * Finds data object among recently loaded by primary key and returns ILocalLookupResult
         * containing also Loaded-set index of this data object
         *
         * @param dataObject Object to match
         * @returns ILocalLookupResult
         */
        localLookupPrimaryKey(dataObject: any, setToLookup?: any[]): ILocalLookupResult;
        private copyData(source, target);
        defaultObject(): any;
        proceedAdjustments(adjustments: Reinforced.Lattice.ITableAdjustment): IAdjustmentResult;
    }
}
declare module Reinforced.Lattice.Services {
    /**
    * This thing is used to manage instances of columns, plugins etc.
    * It consumes PT configuration as source and provides caller with
    * plugins instances, variable ways to query them and accessing their properties
    */
    class InstanceManagerService {
        constructor(configuration: ITableConfiguration, masterTable: IMasterTable, events: Reinforced.Lattice.Services.EventsService);
        /**
         * Dictionary containing current table columns configurations.
         * Key - raw column name. Value - IColumn instance
         */
        Columns: {
            [key: string]: IColumn;
        };
        /**
         * Dictionary containing all instances of table plugins.
         * Key - full plugin ID (incl. placement). Value - plugin itself
         */
        Plugins: {
            [key: string]: IPlugin;
        };
        private _events;
        private _configuration;
        private _rawColumnNames;
        private _masterTable;
        private _isHandlingSpecialPlacementCase;
        private _specialCasePlaceholder;
        private static _datetimeTypes;
        private static _stringTypes;
        private static _floatTypes;
        private static _integerTypes;
        private static _booleanTypes;
        static classifyType(fieldType: string): IClassifiedType;
        private initColumns();
        static createColumn(cnf: IColumnConfiguration, masterTable: IMasterTable, order?: number): IColumn;
        initPlugins(): void;
        private static startsWith(s1, prefix);
        private static endsWith(s1, postfix);
        _subscribeConfiguredEvents(): void;
        /**
        * Reteives plugin at specified placement
        * @param pluginId Plugin ID
        * @param placement Pluign placement
        */
        getPlugin<TPlugin>(pluginId: string, placement?: string): TPlugin;
        /**
         * Retrieves plugins list at specific placement
         *
         * @param placement Plugins placement
         * @returns {}
         */
        getPlugins(placement: string): IPlugin[];
        /**
         * Reteives plugin at specified placement
         * @param pluginId Plugin ID
         * @param placement Pluign placement
         * @returns {}
         */
        getColumnFilter<TPlugin>(columnName: string): TPlugin;
        /**
         * Retrieves sequential columns names in corresponding order
         * @returns {}
         */
        getColumnNames(): string[];
        /**
         * Retrieves sequential columns names in corresponding order
         * @returns {}
         */
        getUiColumnNames(): string[];
        /**
         * Retreives columns suitable for UI rendering in corresponding order
         *
         * @returns {}
         */
        getUiColumns(): IColumn[];
        /**
         * Retrieves column by its raw name
         *
         * @param columnName Raw column name
         * @returns {}
         */
        getColumn(columnName: string): IColumn;
        getColumnByOrder(columnOrder: number): IColumn;
    }
    interface IClassifiedType {
        IsDateTime: boolean;
        IsString: boolean;
        IsFloat: boolean;
        IsInteger: boolean;
        IsBoolean: boolean;
        IsNullable: boolean;
    }
}
declare module Reinforced.Lattice.Services {
    /**
     * Component that is responsible for querying server
     */
    class LoaderService {
        constructor(staticData: any, operationalAjaxUrl: string, masterTable: IMasterTable);
        private _queryPartProviders;
        private _additionalDataReceivers;
        private _staticData;
        private _operationalAjaxUrl;
        private _events;
        private _dataHolder;
        private _isFirstTimeLoading;
        private _masterTable;
        /**
         * Registers new query part provider to be used while collecting
         * query data before sending it to server.
         *
         * @param provider instance implementing IQueryPartProvider interface
         * @returns {}
         */
        registerQueryPartProvider(provider: IQueryPartProvider): void;
        /**
         * Registers new object that can handle additional data object from server (if any)
         *
         * @param dataKey Key of additional data object appearing in additional data dictionary
         * @param receiver Receiver object
         * @returns {}
         */
        registerAdditionalDataReceiver(dataKey: string, receiver: IAdditionalDataReceiver): void;
        prefetchData(data: any[]): void;
        gatherQuery(queryScope: QueryScope): IQuery;
        private _previousRequest;
        createXmlHttp(): any;
        private _runningBackgroundRequests;
        private cancelBackground();
        private getXmlHttp(backgroupd);
        private _previousQueryString;
        private checkError(json, data);
        private checkMessage(json);
        private checkAdditionalData(json);
        private checkAdjustment(json, data);
        private handleRegularJsonResponse(responseText, data, clientQuery, callback, errorCallback);
        private handleDeferredResponse(responseText, data, callback);
        isLoading(): boolean;
        private doServerQuery(data, clientQuery, callback, errorCallback?);
        private _isLoading;
        query(callback: (data: any) => void, queryModifier?: (a: IQuery) => IQuery, errorCallback?: (data: any) => void, force?: boolean): void;
        private doClientQuery(clientQuery, callback);
        /**
         * Sends specified request to server and lets table handle it.
         * Always use this method to invoke table's server functionality because this method
         * correctly rises all events, handles errors etc
         *
         * @param command Query command
         * @param callback Callback that will be invoked after data received
         * @param queryModifier Inline query modifier for in-place query modification
         * @param errorCallback Will be called if error occures
         */
        command(command: string, callback: (data: any) => void, queryModifier?: (a: IQuery) => IQuery, errorCallback?: (data: any) => void, force?: boolean): void;
    }
}
declare module Reinforced.Lattice.Services {
    class CommandsService {
        constructor(masterTable: IMasterTable);
        private _masterTable;
        private _commandsCache;
        canExecute(commandName: string, subject?: any): boolean;
        triggerCommandOnRow(commandName: string, rowIndex: number, callback?: ((params: ICommandExecutionParameters) => void)): void;
        triggerCommand(commandName: string, subject: any, callback?: ((params: ICommandExecutionParameters) => void)): void;
        private redrawSubjectRow(subject);
        private restoreSubjectRow(subject);
        triggerCommandWithConfirmation(commandName: string, subject: any, confirmation: any, callback?: ((params: ICommandExecutionParameters) => void)): void;
    }
    class ConfirmationWindowViewModel implements Reinforced.Lattice.Editing.IEditHandler {
        constructor(masterTable: IMasterTable, commandDescription: Reinforced.Lattice.Commands.ICommandDescription, subject: any, originalCallback: ((params: ICommandExecutionParameters) => void));
        RootElement: HTMLElement;
        ContentPlaceholder: HTMLElement;
        DetailsPlaceholder: HTMLElement;
        TemplatePieces: {
            [_: string]: string;
        };
        VisualStates: Reinforced.Lattice.Rendering.VisualState;
        Subject: any;
        Selection: any[];
        RecentDetails: {
            Data: any;
        };
        private _detailsLoaded;
        private _commandDescription;
        private _config;
        private _embedBound;
        private _editorObjectModified;
        private _editorColumn;
        private _originalCallback;
        private _autoformFields;
        rendered(): void;
        private stripNotRenderedEditors();
        private loadContent();
        private contentLoaded();
        private loadContentByUrl(url, method);
        private _loadDetailsTimeout;
        private loadDetails();
        private loadDetailsInternal();
        private detailsLoaded(detailsResult);
        private embedConfirmation(q);
        private collectCommandParameters();
        private _isloadingContent;
        private getConfirmation();
        private initFormWatchDatepickers(parent);
        confirm(): void;
        dismiss(): void;
        EditorsSet: {
            [key: string]: Reinforced.Lattice.Editing.IEditor;
        };
        ActiveEditors: Reinforced.Lattice.Editing.IEditor[];
        Editors(p: Reinforced.Lattice.Templating.TemplateProcess): void;
        private editor(p, editor);
        Editor(p: Reinforced.Lattice.Templating.TemplateProcess, fieldName: string): void;
        private createEditor(fieldName, column);
        defaultValue(col: IColumn): any;
        private produceAutoformColumns(autoform);
        private initAutoform(autoform);
        DataObject: any;
        Index: number;
        MasterTable: IMasterTable;
        Cells: {
            [index: string]: ICell;
        };
        ValidationMessages: Reinforced.Lattice.Editing.IValidationMessage[];
        notifyChanged(editor: Reinforced.Lattice.Editing.IEditor): void;
        reject(editor: Reinforced.Lattice.Editing.IEditor): void;
        commit(editor: Reinforced.Lattice.Editing.IEditor): void;
        private retrieveEditorData(editor, errors?);
        protected setEditorValue(editor: Reinforced.Lattice.Editing.IEditor): void;
        private collectAutoForm();
    }
}
declare module Reinforced.Lattice.Services {
    class SelectionService implements IQueryPartProvider, IAdditionalDataReceiver {
        constructor(masterTable: IMasterTable);
        private _configuration;
        private _masterTable;
        private _selectionData;
        isSelected(dataObject: any): boolean;
        isAllSelected(): boolean;
        canSelect(dataObject: any): boolean;
        canSelectAll(): boolean;
        resetSelection(): void;
        toggleAll(selected?: boolean): void;
        isCellSelected(dataObject: any, column: IColumn): boolean;
        hasSelectedCells(dataObject: any): boolean;
        getSelectedCells(dataObject: any): number[];
        getSelectedCellsByPrimaryKey(dataObject: any): boolean;
        isSelectedPrimaryKey(primaryKey: string): boolean;
        toggleRow(primaryKey: string, select?: boolean): void;
        toggleDisplayingRow(rowIndex: number, selected?: boolean): void;
        toggleObjectSelected(dataObject: any, selected?: boolean): void;
        handleAdjustments(added: any[], removeKeys: string[]): void;
        modifyQuery(query: IQuery, scope: QueryScope): void;
        getSelectedKeys(): string[];
        getSelectedObjects(): any[];
        getSelectedColumns(primaryKey: string): IColumn[];
        getSelectedColumnsByObject(dataObject: any): IColumn[];
        toggleCellsByDisplayIndex(displayIndex: number, columnNames: string[], select?: boolean): void;
        toggleCellsByObject(dataObject: any, columnNames: string[], select?: boolean): void;
        toggleCells(primaryKey: string, columnNames: string[], select?: boolean): void;
        setCellsByDisplayIndex(displayIndex: number, columnNames: string[]): void;
        setCellsByObject(dataObject: any, columnNames: string[]): void;
        setCells(primaryKey: string, columnNames: string[]): void;
        handleAdditionalData(additionalData: any): void;
    }
}
declare module Reinforced.Lattice.Rendering {
    /**
     * Internal component that is not supposed to be used directly.
     */
    class BackBinder {
        private _dateService;
        Delegator: Reinforced.Lattice.Services.EventsDelegatorService;
        /**
        * @internal
        */
        constructor(dateService: Reinforced.Lattice.Services.DateService);
        /**
         * Applies binding of events left in events queue
         *
         * @param parentElement Parent element to lookup for event binding attributes
         * @returns {}
         */
        backBind(parentElement: HTMLElement, info: Reinforced.Lattice.Templating.IBackbindInfo): void;
        private traverseBackbind<T>(elements, parentElement, backbindCollection, attribute, fn);
        private getMatchingElements(parent, attr);
        private backbindDatepickers(parentElement, info);
        private backbindMark(parentElement, info);
        private backbindCallbacks(parentElement, info);
        private backbindEvents(parentElement, info);
        private evalCallback(calbackString);
        static traverseWindowPath(path: string): {
            target: any;
            parent: any;
        };
        private backbindVisualStates(parentElement, info);
        private resolveNormalStates(targets);
        private addNormalState(states, target);
        private mixinToNormal(normal, custom);
    }
}
declare module Reinforced.Lattice.Rendering {
    /**
     * Class that is responsible for particular HTML elements redrawing/addition/removal
     */
    class DOMModifier {
        constructor(executor: Reinforced.Lattice.Templating.TemplatesExecutor, locator: DOMLocator, backBinder: BackBinder, instances: Reinforced.Lattice.Services.InstanceManagerService, ed: Reinforced.Lattice.Services.EventsDelegatorService, bodyElement: HTMLElement);
        private _tpl;
        private _ed;
        private _locator;
        private _backBinder;
        private _instances;
        private _bodyElement;
        destroyPartitionRow(): void;
        private getRealDisplay(elem);
        private displayCache;
        hideElement(el: Element): void;
        showElement(el: Element): void;
        cleanSelector(targetSelector: string): void;
        destroyElement(element: Element): void;
        private destroyElements(elements);
        hideElements(element: NodeList): void;
        showElements(element: NodeList): void;
        /**
         * Redraws specified plugin refreshing all its graphical state
         *
         * @param plugin Plugin to redraw
         * @returns {}
         */
        redrawPlugin(plugin: IPlugin): HTMLElement;
        renderPlugin(plugin: IPlugin): HTMLElement;
        /**
         * Redraws specified plugins refreshing all them graphical state (by position)
         *
         * @param position Plugin position
         * @returns {}
         */
        redrawPluginsByPosition(position: string): void;
        hidePlugin(plugin: IPlugin): void;
        showPlugin(plugin: IPlugin): void;
        destroyPlugin(plugin: IPlugin): void;
        hidePluginsByPosition(position: string): void;
        showPluginsByPosition(position: string): void;
        destroyPluginsByPosition(position: string): void;
        /**
         * Redraws specified row refreshing all its graphical state
         *
         * @param row
         * @returns {}
         */
        redrawRow(row: IRow): HTMLElement;
        destroyRowByObject(dataObject: any): void;
        destroyRow(row: IRow): void;
        hideRow(row: IRow): void;
        showRow(row: IRow): void;
        /**
         * Redraws specified row refreshing all its graphical state
         *
         * @param row
         * @returns {}
         */
        appendRow(row: IRow, beforeRowAtIndex?: number): HTMLElement;
        /**
         * Redraws specified row refreshing all its graphical state
         *
         * @param row
         * @returns {}
         */
        prependRow(row: IRow): HTMLElement;
        /**
         * Removes referenced row by its index
         *
         * @param rowDisplayIndex
         * @returns {}
         */
        destroyRowByIndex(rowDisplayIndex: number): void;
        destroyRowByNumber(rowNumber: number): void;
        hideRowByIndex(rowDisplayIndex: number): void;
        showRowByIndex(rowDisplayIndex: number): void;
        redrawCell(cell: ICell): HTMLElement;
        destroyCell(cell: ICell): void;
        hideCell(cell: ICell): void;
        showCell(cell: ICell): void;
        destroyCellsByColumn(column: IColumn): void;
        hideCellsByColumn(column: IColumn): void;
        showCellsByColumn(column: IColumn): void;
        destroyColumnCellsElementsByColumnIndex(columnIndex: number): void;
        hideColumnCellsElementsByColumnIndex(columnIndex: number): void;
        showColumnCellsElementsByColumnIndex(columnIndex: number): void;
        /**
         * Redraws header for specified column
         *
         * @param column Column which header is to be redrawn
         */
        redrawHeader(column: IColumn): HTMLElement;
        destroyHeader(column: IColumn): void;
        hideHeader(column: IColumn): void;
        showHeader(column: IColumn): void;
        createElement(html: string): HTMLElement;
        createElementFromTemplate(templateId: string, viewModelBehind: any): HTMLElement;
        private replaceElement(element, html);
    }
}
declare module Reinforced.Lattice.Rendering.Html2Dom {
    class HtmlParserDefinitions {
        static startTag: RegExp;
        static endTag: RegExp;
        static attr: RegExp;
        static empty: {
            [index: string]: boolean;
        };
        static block: {
            [index: string]: boolean;
        };
        static inline: {
            [index: string]: boolean;
        };
        static closeSelf: {
            [index: string]: boolean;
        };
        static fillAttrs: {
            [index: string]: boolean;
        };
        static special: {
            [index: string]: boolean;
        };
        private static makeMap(str);
    }
    /**
     * Small HTML parser to turn user's HTMl to DOM
     * Thanks to John Resig, co-author of jQuery
     * http://ejohn.org/blog/pure-javascript-html-parser/
     */
    class HtmlParser {
        constructor();
        private _parseStartBound;
        private _parseEndBound;
        private _stack;
        private parse(html);
        private parseStartTag(tag, tagName, rest, unary);
        private parseEndTag(tag?, tagName?);
        private _curParentNode;
        private _elems;
        private _topNodes;
        private start(tagName, attrs, unary);
        private end(tag);
        private chars(text);
        /**
         * Parses supplied HTML string and promotes it to HTML element.
         * This implementation also supports <script/> tags inside of supplied HTML. Scripts will be executed
         * immediately after HTML element creation.
         *
         * @param html HTML string to convert to HTML element
         */
        html2Dom(html: string): HTMLElement;
        /**
        * Parses supplied HTML string and promotes it to set of HTML elements.
        * This implementation also supports <script/> tags inside of supplied HTML. Scripts will be executed
        * immediately after all of HTML elements creation.
        *
        * @param html HTML string to convert to HTML element
        */
        html2DomElements(html: string): Node[];
    }
}
declare module Reinforced.Lattice.Rendering {
    /**
     * This module allows you to locate particular elements in table's DOM
     */
    class DOMLocator {
        constructor(bodyElement: HTMLElement, rootElement: HTMLElement, rootId: string);
        private _bodyElement;
        private _rootElement;
        private _rootIdPrefix;
        /**
         * Retrieves cell element by cell object
         *
         * @param cell Cell element
         * @returns {HTMLElement} Element containing cell (with wrapper)
         */
        getCellElement(cell: ICell): Element;
        /**
         * Retrieves cell element using supplied coordinates
         *
         * @param cell Cell element
         * @returns {HTMLElement} Element containing cell (with wrapper)
         */
        getCellElementByIndex(rowDisplayIndex: number, columnIndex: number): Element;
        /**
         * Retrieves row element (including wrapper)
         *
         * @param row Row
         * @returns HTML element
         */
        getRowElement(row: IRow): Element;
        /**
         * Retrieves row element (including wrapper)
         *
         * @param row Row
         * @returns HTML element
         */
        getRowElementByObject(dataObject: any): Element;
        getPartitionRowElement(): Element;
        /**
         * Retrieves row element (including wrapper)
         *
         * @param row Row
         * @returns HTML element
         */
        getRowElements(): NodeList;
        /**
        * Retrieves row element (including wrapper) by specified row index
        *
        * @param row Row
        * @returns HTML element
        */
        getRowElementByIndex(rowDisplayingIndex: number): Element;
        /**
         * Retrieves data cells for specified column (including wrappers)
         *
         * @param column Column desired data cells belongs to
         * @returns HTML NodeList containing results
         */
        getColumnCellsElements(column: IColumn): NodeList;
        /**
         * Retrieves data cells for specified column (including wrappers) by column index
         *
         * @param column Column desired data cells belongs to
         * @returns HTML NodeList containing results
         */
        getColumnCellsElementsByColumnIndex(columnIndex: number): NodeList;
        /**
         * Retrieves data cells for whole row (including wrapper)
         *
         * @param row Row with data cells
         * @returns NodeList containing results
         */
        getRowCellsElements(row: IRow): NodeList;
        /**
         * Retrieves data cells for whole row (including wrapper)
         *
         * @param row Row with data cells
         * @returns NodeList containing results
         */
        getRowCellsElementsByIndex(rowDisplayingIndex: number): NodeList;
        /**
         * Retrieves HTML element for column header (including wrapper)
         *
         * @param header Column header
         * @returns HTML element
         */
        getHeaderElement(header: IColumnHeader): Element;
        /**
         * Retrieves HTML element for plugin (including wrapper)
         *
         * @param plugin Plugin
         * @returns HTML element
         */
        getPluginElement(plugin: IPlugin): Element;
        /**
         * Retrieves HTML element for plugin (including wrapper)
         *
         * @param plugin Plugin
         * @returns HTML element
         */
        getPluginElementsByPositionPart(placement: string): NodeList;
        /**
         * Determines if supplied element is table row
         *
         * @param e Testing element
         * @returns {boolean} True when supplied element is row, false otherwise
         */
        isRow(e: Element): boolean;
        /**
         * Determines if supplied element is table row with "IsSpecial" flag
         *
         * @param e Testing element
         * @returns {boolean} True when supplied element is row, false otherwise
         */
        isSpecialRow(e: Element): boolean;
        /**
         * Determines if supplied element is table cell
         *
         * @param e Testing element
         * @returns {boolean} True when supplied element is cell, false otherwise
         */
        isCell(e: Element): boolean;
    }
}
declare module Reinforced.Lattice.Rendering {
    /**
     * Enity responsible for displaying table
     */
    class Renderer implements ITemplatesProvider {
        constructor(rootId: string, prefix: string, masterTable: IMasterTable);
        private _columnsRenderFunctions;
        Executor: Reinforced.Lattice.Templating.TemplatesExecutor;
        /**
         * Parent element for whole table
         */
        RootElement: HTMLElement;
        /**
         * Parent element for table entries
         */
        BodyElement: HTMLElement;
        /**
         * Locator of particular table parts in DOM
         */
        Locator: DOMLocator;
        /**
         * BackBinder instance
         */
        BackBinder: BackBinder;
        /**
         * Entity that is responsible for existing DOM modifications
         */
        Modifier: DOMModifier;
        /**
         * API that is responsible for UI events delegation
         */
        Delegator: Reinforced.Lattice.Services.EventsDelegatorService;
        private _masterTable;
        private _instances;
        private _rootId;
        private _events;
        private _prefix;
        /**
         * Perform table layout inside specified root element
         */
        layout(): void;
        /**
         * Clear dynamically loaded table content and replace it with new one
         *
         * @param rows Set of table rows
         */
        body(rows: IRow[]): void;
        renderObjectContent(renderable: IRenderable): string;
        renderToString(templateId: string, viewModelBehind: any): string;
        renderObject(templateId: string, viewModelBehind: any, targetSelector: string): HTMLElement;
        renderObjectTo(templateId: string, viewModelBehind: any, target: HTMLElement): HTMLElement;
        /**
         * Removes all dynamically loaded content in table
         *
         * @returns {}
         */
        clearBody(): void;
    }
}
declare module Reinforced.Lattice.Templating {
    /**
     * Rendering stack class. Provives common helper
     * infrastructure for context-oriented rendering
     * @internal
     */
    class RenderingStack {
        private _contextStack;
        /**
         * Clears rendering stack
         * @returns {}
         */
        clear(): void;
        /**
         * Current rendering context
         */
        Current: IRenderingContext;
        /**
         * Pushes rendering context into stack
         * @param ctx
         * @returns {}
         */
        pushContext(ctx: IRenderingContext): void;
        /**
         * Pushes rendering context into stack
         * @param elementType What is being rendered
         * @param element Reference to object is being rendered
         * @param columnName Optional column name - for column-contexted rendering objects
         * @returns {}
         */
        push(elementType: RenderedObject, element: IRenderable): void;
        private getTrack(elementType, element);
        /**
         * Pops rendering context from stack
         * @returns {}
         */
        popContext(): void;
    }
    /**
     * Denotes current rendering context
     */
    interface IRenderingContext {
        /**
         * What is being rendered (Object type)
         */
        Type: RenderedObject;
        /**
         * Reference to object is being rendered
         */
        Object?: IRenderable;
        /**
         * Rendering object track attribute
         */
        CurrentTrack: string;
        /**
         * Temporary buffer for setting track
         */
        TrackBuffer: string;
        /**
         * Is track element written
         */
        IsTrackWritten: boolean;
    }
}
declare module Reinforced.Lattice.Rendering {
    /**
     * Component for managing components visual states
     */
    class VisualState {
        /**
        * @internal
        */
        constructor();
        States: {
            [key: string]: Reinforced.Lattice.Templating.IState[];
        };
        /**
         * Current visual state
         */
        Current: string;
        private _subscribers;
        private _stopEvents;
        /**
         * Subscribes specified function to state change events
         *
         * @param fn Function that will be called when state changes
         */
        subscribeStateChange(fn: (evt: IStateChangedEvent) => void): void;
        private fireHandlers(e);
        /**
         * Applies settings for specified state
         *
         * @param state State id
         * @param states VisualStates collection
         */
        changeState(state: string): void;
        /**
         * Mixins settings for specified state
         *
         * @param state State id
         * @param states VisualStates collection
         */
        mixinState(state: string): void;
        /**
         * Unmixins state of current state
         *
         * @param state State to unmixin
         * @returns {}
         */
        unmixinState(state: string): void;
        /**
         * Reverts elements back to normal state
         *
         * @param states VisualStates collection
         */
        normalState(): void;
        private applyState(desired);
        private getContent(receiver, contentLocation);
        private setNormal();
    }
    /**
    * @internal
    */
    interface IStateChangedEvent {
        State: string;
        CurrentState: string;
        StateWasMixedIn: boolean;
    }
}
declare module Reinforced.Lattice {
    /**
     * Main entry point for all tables functionality
     */
    class Master implements IMasterTable {
        /**
         * Constructs new instance of Reinforced.Lattice master object.
         * Usually this method is being called automatically by .InitializationCode or .InitializationScript method,
         * but you also could combine call of Configurator<>.JsonConfig and call of Lattice constructor
         *
         * @param configuration JSON configuration of whole table
         */
        constructor(configuration: ITableConfiguration);
        private _isReady;
        private bindReady();
        private initialize();
        /**
         * API for working with dates
         */
        Date: Reinforced.Lattice.Services.DateService;
        /**
         * Reloads table content.
         * This method is left for backward compatibility
         *
         * @returns {}
         */
        reload(force: boolean): void;
        /**
         * API for raising and handling various table events
         */
        Events: Reinforced.Lattice.Services.EventsService;
        /**
         * API for managing local data
         */
        DataHolder: Reinforced.Lattice.Services.DataHolderService;
        /**
         * API for data loading
         */
        Loader: Reinforced.Lattice.Services.LoaderService;
        /**
         * API for rendering functionality
         */
        Renderer: Rendering.Renderer;
        /**
         * API for locating instances of different components
         */
        InstanceManager: Reinforced.Lattice.Services.InstanceManagerService;
        /**
         * API for overall workflow controlling
         */
        Controller: Reinforced.Lattice.Services.Controller;
        /**
         * API for table messages
         */
        MessageService: Reinforced.Lattice.Services.MessagesService;
        /**
         * API for table messages
         */
        Commands: Reinforced.Lattice.Services.CommandsService;
        Partition: Reinforced.Lattice.Services.Partition.IPartitionService;
        /**
         * Fires specified DOM event on specified element
         *
         * @param eventName DOM event id
         * @param element Element is about to dispatch event
         */
        static fireDomEvent(eventName: string, element: HTMLElement): void;
        proceedAdjustments(adjustments: Reinforced.Lattice.ITableAdjustment): void;
        getStaticData(): any;
        setStaticData(obj: any): void;
        Selection: Reinforced.Lattice.Services.SelectionService;
        Configuration: ITableConfiguration;
        Stats: IStatsModel;
    }
}
declare module Reinforced.Lattice.Plugins {
    /**
     * Base class for plugins.
     * It contains necessary infrastructure for convinence of plugins creation
     */
    class PluginBase<TConfiguration> implements IPlugin {
        init(masterTable: IMasterTable): void;
        /**
         * Raw plugin configuration
         */
        RawConfig: IPluginConfiguration;
        /**
         * Plugin location ID
         */
        PluginLocation: string;
        /**
         * Plugin's visual states collection.
         * Usually it is not used, but always it is better to have one
         */
        VisualStates: Reinforced.Lattice.Rendering.VisualState;
        /**
         * Plugin configuration object
         */
        protected Configuration: TConfiguration;
        /**
         * Reference to master table this plugin belongs to
         */
        MasterTable: IMasterTable;
        /**
         * Events subscription method.
         * In derived class here should be subscription to various events
         *
         * @param e Events manager
         */
        protected subscribe(e: Reinforced.Lattice.Services.EventsService): void;
        /**
         * Function that is called after plugin is drawn
         *
         * @param e Event arguments
         */
        protected afterDrawn: (e: ITableEventArgs<any>) => void;
        /**
         * Plugin order among particular placement
         */
        Order: number;
        /**
         * Default render function using TemplateId from plugin configuration
         * @param e Templates provider
         * @returns content string
         */
        defaultRender(p: Reinforced.Lattice.Templating.TemplateProcess): void;
    }
}
declare module Reinforced.Lattice.Filters {
    /**
     * Base class for creating filters
     */
    class FilterBase<T> extends Reinforced.Lattice.Plugins.PluginBase<T> implements IQueryPartProvider, IClientFilter {
        modifyQuery(query: IQuery, scope: QueryScope): void;
        init(masterTable: IMasterTable): void;
        /**
         * Call this method inside init and override filterPredicate method to make this filter
         * participate in client-side filtering
         */
        protected itIsClientFilter(): void;
        filterPredicate(rowObject: any, query: IQuery): boolean;
    }
}
declare module Reinforced.Lattice.Plugins.Ordering {
    class OrderingPlugin extends Reinforced.Lattice.Filters.FilterBase<IOrderingConfiguration> {
        private _clientOrderings;
        private _serverOrderings;
        private _boundHandler;
        subscribe(e: Reinforced.Lattice.Services.EventsService): void;
        private overrideHeadersTemplates(columns);
        private updateOrdering(columnName, ordering);
        private specifyOrdering(object, ordering);
        private isClient(columnName);
        switchOrderingForColumn(columnName: string): void;
        setOrderingForColumn(columnName: string, ordering: Reinforced.Lattice.Ordering): void;
        protected nextOrdering(currentOrdering: Reinforced.Lattice.Ordering): Reinforced.Lattice.Ordering;
        private makeDefaultOrderingFunction(fieldName);
        init(masterTable: IMasterTable): void;
        private mixinOrderings(orderingsCollection, query);
        modifyQuery(query: IQuery, scope: QueryScope): void;
    }
}
declare module Reinforced.Lattice.Plugins.Limit {
    class LimitPlugin extends Reinforced.Lattice.Plugins.PluginBase<Plugins.Limit.ILimitClientConfiguration> {
        SelectedValue: ILimitSize;
        private _limitSize;
        Sizes: ILimitSize[];
        renderContent(p: Reinforced.Lattice.Templating.TemplateProcess): void;
        changeLimitHandler(e: Reinforced.Lattice.ITemplateBoundEvent): void;
        changeLimit(take: number): void;
        private onPartitionChange(e);
        init(masterTable: IMasterTable): void;
        subscribe(e: Reinforced.Lattice.Services.EventsService): void;
    }
    /**
     * Size entry for limit plugin
     */
    interface ILimitSize {
        IsSeparator: boolean;
        Value: number;
        Label: string;
    }
}
declare module Reinforced.Lattice.Plugins.Paging {
    class PagingPlugin extends Reinforced.Lattice.Plugins.PluginBase<Plugins.Paging.IPagingClientConfiguration> {
        Pages: IPagesElement[];
        Shown: boolean;
        NextArrow: boolean;
        PrevArrow: boolean;
        CurrentPage(): number;
        TotalPages(): number;
        PageSize(): number;
        GotoInput: HTMLInputElement;
        goToPage(page: string): void;
        gotoPageClick(e: Reinforced.Lattice.ITemplateBoundEvent): void;
        navigateToPage(e: Reinforced.Lattice.ITemplateBoundEvent): void;
        nextClick(e: Reinforced.Lattice.ITemplateBoundEvent): void;
        previousClick(e: Reinforced.Lattice.ITemplateBoundEvent): void;
        private constructPagesElements();
        renderContent(p: Reinforced.Lattice.Templating.TemplateProcess): void;
        validateGotopage(): void;
        init(masterTable: IMasterTable): void;
        private onPartitionChanged(e);
        private onClientDataProcessing(e);
        subscribe(e: Reinforced.Lattice.Services.EventsService): void;
    }
    interface IPagesElement {
        Prev?: boolean;
        Period?: boolean;
        ActivePage?: boolean;
        Page: number;
        First?: boolean;
        Last?: boolean;
        Next?: boolean;
        InActivePage?: boolean;
        DisPage?: () => string;
    }
}
declare module Reinforced.Lattice.Filters.Value {
    /**
     * Client-side part of value filter
     */
    class ValueFilterPlugin extends Reinforced.Lattice.Filters.FilterBase<Filters.Value.IValueFilterUiConfig> {
        private _filteringIsBeingExecuted;
        private _inpTimeout;
        private _previousValue;
        AssociatedColumn: IColumn;
        private _isInitializing;
        /**
         * HTML element corresponding to <input/> tag this filter will retrieve value from
         */
        FilterValueProvider: HTMLInputElement;
        /**
         * Retrieves entered value. Could be either string or Date object depending on
         * column associated within filter
         */
        getValue(): any;
        /**
        * @internal
        */
        handleValueChanged(): void;
        /**
        * @internal
        */
        renderContent(p: Reinforced.Lattice.Templating.TemplateProcess): void;
        /**
        * @internal
        */
        init(masterTable: IMasterTable): void;
        /**
        * @internal
        */
        filterPredicate(rowObject: any, query: IQuery): boolean;
        /**
        * @internal
        */
        modifyQuery(query: IQuery, scope: QueryScope): void;
        /**
        * @internal
        */
        afterDrawn: (e: any) => void;
    }
}
declare module Reinforced.Lattice.Filters.Range {
    class RangeFilterPlugin extends Reinforced.Lattice.Filters.FilterBase<Filters.Range.IRangeFilterUiConfig> {
        private _filteringIsBeingExecuted;
        private _inpTimeout;
        private _fromPreviousValue;
        private _toPreviousValue;
        AssociatedColumn: IColumn;
        private _isInitializing;
        FromValueProvider: HTMLInputElement;
        ToValueProvider: HTMLInputElement;
        private getFromValue();
        private getToValue();
        handleValueChanged(): void;
        getFilterArgument(): string;
        modifyQuery(query: IQuery, scope: QueryScope): void;
        init(masterTable: IMasterTable): void;
        renderContent(p: Reinforced.Lattice.Templating.TemplateProcess): void;
        filterPredicate(rowObject: any, query: IQuery): boolean;
        afterDrawn: (e: any) => void;
    }
}
declare module Reinforced.Lattice.Filters.Select {
    /**
     * Client-side implementation of Select filter
     */
    class SelectFilterPlugin extends Reinforced.Lattice.Filters.FilterBase<Filters.Select.ISelectFilterUiConfig> {
        /**
         * HTML element of select list supplying values for select filter.
         */
        FilterValueProvider: HTMLSelectElement;
        AssociatedColumn: IColumn;
        /**
         * Retrieves selected values serialized with |-delimiter
         */
        getSerializedValue(): string;
        /**
         * Retrieves array of stringified selected values
         */
        getArrayValue(): string[];
        /**
         * @internal
         */
        modifyQuery(query: IQuery, scope: QueryScope): void;
        /**
         * @internal
         */
        renderContent(p: Reinforced.Lattice.Templating.TemplateProcess): void;
        /**
         * @internal
         */
        handleValueChanged(): void;
        /**
         * @internal
         */
        init(masterTable: IMasterTable): void;
        /**
         * @internal
         */
        filterPredicate(rowObject: any, query: IQuery): boolean;
    }
}
declare module Reinforced.Lattice.Plugins.Hideout {
    interface IColumnState {
        Visible: boolean;
        RawName: string;
        Name: string;
        DoesNotExists: boolean;
    }
    class HideoutPlugin extends PluginBase<Reinforced.Lattice.Plugins.Hideout.IHideoutPluginConfiguration> implements IQueryPartProvider {
        ColumnStates: IColumnState[];
        private _columnStates;
        private _isInitializing;
        isColumnVisible(columnName: string): boolean;
        isColumnInstanceVisible(col: IColumn): boolean;
        hideColumnByName(rawColname: string): void;
        showColumnByName(rawColname: string): void;
        toggleColumn(e: Reinforced.Lattice.ITemplateBoundEvent): void;
        showColumn(e: Reinforced.Lattice.ITemplateBoundEvent): void;
        hideColumn(e: Reinforced.Lattice.ITemplateBoundEvent): void;
        toggleColumnByName(columnName: string): boolean;
        modifyQuery(query: IQuery, scope: QueryScope): void;
        hideColumnInstance(c: IColumn): void;
        showColumnInstance(c: IColumn): void;
        private onBeforeDataRendered();
        private onDataRendered();
        private onLayourRendered();
        init(masterTable: IMasterTable): void;
        renderContent(p: Reinforced.Lattice.Templating.TemplateProcess): void;
        subscribe(e: Reinforced.Lattice.Services.EventsService): void;
        isColVisible(columnName: string): boolean;
    }
}
declare module Reinforced.Lattice.Plugins.ResponseInfo {
    class ResponseInfoPlugin extends PluginBase<Plugins.ResponseInfo.IResponseInfoClientConfiguration> implements Reinforced.Lattice.IAdditionalDataReceiver {
        private _recentData;
        private _recentServerData;
        private _recentTemplate;
        private _pagingEnabled;
        private _pagingPlugin;
        private _isServerRequest;
        private _isReadyForRendering;
        onResponse(e: ITableEventArgs<IDataEventArgs>): void;
        private addClientData(e);
        onClientDataProcessed(e: ITableEventArgs<IClientDataResults>): void;
        renderContent(p: Reinforced.Lattice.Templating.TemplateProcess): void;
        init(masterTable: IMasterTable): void;
        handleAdditionalData(additionalData: any): void;
    }
}
declare module Reinforced.Lattice.Plugins.Total {
    /**
     * Client-side implementation of totals plugin
     */
    class TotalsPlugin extends PluginBase<Plugins.Total.ITotalClientConfiguration> implements Reinforced.Lattice.IAdditionalDataReceiver, Reinforced.Lattice.IAdditionalRowsProvider {
        private _totalsForColumns;
        private makeTotalsRow();
        /**
        * @internal
        */
        private onAdjustments(e);
        /**
        * @internal
        */
        onClientDataProcessed(e: ITableEventArgs<IClientDataResults>): void;
        /**
        * @internal
        */
        subscribe(e: Reinforced.Lattice.Services.EventsService): void;
        handleAdditionalData(additionalData: any): void;
        init(masterTable: IMasterTable): void;
        provide(rows: IRow[]): void;
    }
}
declare module Reinforced.Lattice.Plugins.Checkboxify {
    class CheckboxifyPlugin extends Reinforced.Lattice.Plugins.PluginBase<Reinforced.Lattice.Plugins.Checkboxify.ICheckboxifyUiConfig> {
        private _ourColumn;
        private redrawHeader();
        init(masterTable: IMasterTable): void;
        subscribe(e: Reinforced.Lattice.Services.EventsService): void;
    }
}
declare module Reinforced.Lattice.Plugins.Toolbar {
    /**
     * Client-side supply for Toolbar plugin
     */
    class ToolbarPlugin extends PluginBase<Plugins.Toolbar.IToolbarButtonsClientConfiguration> {
        /**
         * HTML elements of all buttons that are registered for usage within toolbar plugin. Key= internal button id, Value = HTML element corresponding to button
         */
        AllButtons: {
            [id: number]: HTMLElement;
        };
        private _buttonsConfig;
        /**
         * Simulates event happened on particular button. Internal button id must be supplied as first member of @memberref Reinforced.Lattice.ITemplateBoundEvent.EventArguments
         *
         * @param e Template bound event for triggering button action
         */
        buttonHandleEvent(e: Reinforced.Lattice.ITemplateBoundEvent): void;
        private redrawMe();
        private handleButtonAction(btn);
        renderContent(p: Reinforced.Lattice.Templating.TemplateProcess): void;
        private traverseButtons(arr);
        private onSelectionChanged(e);
        init(masterTable: IMasterTable): void;
    }
}
declare module Reinforced.Lattice.Plugins.Scrollbar {
    class ScrollbarPlugin extends Reinforced.Lattice.Plugins.PluginBase<Reinforced.Lattice.Plugins.Scrollbar.IScrollbarPluginUiConfig> {
        IsVertical: boolean;
        UpArrow: HTMLElement;
        DownArrow: HTMLElement;
        Scroller: HTMLElement;
        ScrollerActiveArea: HTMLElement;
        private _stickElement;
        private _scrollWidth;
        private _scrollHeight;
        private _scollbar;
        private _availableSpace;
        private _scrollerPos;
        private _scrollerSize;
        private _kbListener;
        private _wheelListener;
        private _boundScrollerMove;
        private _boundScrollerEnd;
        init(masterTable: IMasterTable): void;
        private _needUpdateCoords;
        updatePosition(): void;
        private adjustScrollerPosition(skip);
        private _availableSpaceRaw;
        private _availableSpaceRawCorrection;
        private _previousAmout;
        private adjustScrollerHeight();
        private calculateAvailableSpace();
        private getCoords();
        private getElement(configSelect);
        private onLayoutRendered(e);
        private subscribeUiEvents();
        private trackKbListenerClick(e);
        private isKbListenerHidden();
        private _kbActive;
        private enableKb();
        private disableKb();
        private static _forbiddenNodes;
        private keydownHook(e);
        private handleKey(keyCode);
        activeAreaClick(e: MouseEvent): void;
        activeAreaMouseDown(e: MouseEvent): void;
        private _mouseStartPos;
        private _startSkip;
        private scrollerStart(e);
        private _skipOnUp;
        private scrollerMove(e);
        private scrollerEnd(e);
        private handleWheel(e);
        private _upArrowActive;
        private _upArrowInterval;
        private upArrowStart(e);
        private upArrow();
        private upArrowEnd(e);
        private _downArrowActive;
        private _downArrowInterval;
        private downArrowStart(e);
        private downArrow();
        private downArrowEnd(e);
        private _moveCheckInterval;
        private startDeferring();
        private deferScroll(skip);
        private _needMoveTo;
        private _movedTo;
        private moveCheck();
        private endDeferring();
        private _prevCount;
        private _isHidden;
        private hideScroll();
        private showScroll();
        private onPartitionChange(e);
        private onClientDataProcessing(e);
        subscribe(e: Reinforced.Lattice.Services.EventsService): void;
        private _sensor;
    }
}
declare module Reinforced.Lattice.Plugins.Formwatch {
    class FormwatchPlugin extends PluginBase<Reinforced.Lattice.Plugins.Formwatch.IFormwatchClientConfiguration> implements IQueryPartProvider {
        private _existingValues;
        private _filteringExecuted;
        private _timeouts;
        private static extractValueFromMultiSelect(o);
        private static extractInputValue(element, fieldConf, dateService);
        private static extractData(elements, fieldConf, dateService);
        static extractFormData(configuration: Reinforced.Lattice.Plugins.Formwatch.IFormwatchFieldData[], rootElement: any, dateService: Reinforced.Lattice.Services.DateService): {};
        modifyQuery(query: IQuery, scope: QueryScope): void;
        subscribe(e: Reinforced.Lattice.Services.EventsService): void;
        fieldChange(fieldSelector: string, delay: number, element: HTMLInputElement, e: Event): void;
        init(masterTable: IMasterTable): void;
    }
}
declare module Reinforced.Lattice.Services.Partition {
    class BackgroundDataLoader {
        constructor(masterTable: IMasterTable, conf: Reinforced.Lattice.IServerPartitionConfiguration);
        private _masterTable;
        private _dataAppendError;
        Indicator: PartitionIndicatorRow;
        LoadAhead: number;
        AppendLoadingRow: boolean;
        FinishReached: boolean;
        IsLoadingNextPart: boolean;
        UseLoadMore: boolean;
        Skip: number;
        Take: number;
        skipTake(skip: number, take: number): void;
        provideIndicator(rows: IRow[]): void;
        private _afterFn;
        loadNextDataPart(pages?: number, after?: any): void;
        private loadNextCore(pages?, show?);
        private dataAppendError(data);
        private modifyDataAppendQuery(q, pages);
        private static any(o);
        private dataAppendLoaded(data, pagesRequested, show);
        ClientSearchParameters: boolean;
        private _indicationShown;
        showIndication(): void;
        destroyIndication(): void;
        loadMore(show: boolean, page?: number): void;
    }
}
declare module Reinforced.Lattice.Services.Partition {
    class PartitionIndicatorRow implements IRow {
        private _dataLoader;
        constructor(masterTable: IMasterTable, dataLoader: Reinforced.Lattice.Services.Partition.BackgroundDataLoader, conf: Reinforced.Lattice.IServerPartitionConfiguration);
        TemplateIdOverride: string;
        IsSpecial: boolean;
        DataObject: any;
        Index: number;
        MasterTable: IMasterTable;
        Cells: {
            [index: string]: ICell;
        };
        Show: boolean;
        PagesInput: HTMLInputElement;
        VisualState: Reinforced.Lattice.Rendering.VisualState;
        loadMore(): void;
    }
    class PartitionIndicator implements Reinforced.Lattice.IPartitionRowData {
        constructor(masterTable: IMasterTable, partitionService: Reinforced.Lattice.Services.Partition.BackgroundDataLoader);
        private _masterTable;
        private _dataLoader;
        UiColumnsCount(): number;
        IsLoading(): boolean;
        Stats(): IStatsModel;
        IsClientSearchPending(): boolean;
        CanLoadMore(): boolean;
        LoadAhead(): number;
    }
}
declare module Reinforced.Lattice.Services.Partition {
    class ClientPartitionService implements IPartitionService {
        constructor(masterTable: IMasterTable);
        protected _masterTable: IMasterTable;
        setSkip(skip: number, preserveTake?: boolean): void;
        private firstNonSpecialIndex(rows);
        private lastNonSpecialIndex(rows);
        protected displayedIndexes(): number[];
        setTake(take: number): void;
        protected restoreSpecialRows(rows: IRow[]): void;
        protected destroySpecialRows(rows: IRow[]): void;
        partitionBeforeQuery(serverQuery: IQuery, clientQuery: IQuery, isServerQuery: boolean): boolean;
        partitionBeforeCommand(serverQuery: IQuery): void;
        partitionAfterQuery(initialSet: any[], query: IQuery, serverCount: number): any[];
        protected skipTakeSet(ordered: any[], query: IQuery): any[];
        protected cut(ordered: any[], skip: number, take: number): any[];
        protected cutDisplayed(skip: number, take: number): void;
        Skip: number;
        Take: number;
        amount(): number;
        isAmountFinite(): boolean;
        totalAmount(): number;
        initial(skip: number, take: number): any;
        isClient(): boolean;
        isServer(): boolean;
        hasEnoughDataToSkip(skip: number): boolean;
        protected any(o: any): boolean;
        Type: PartitionType;
    }
}
declare module Reinforced.Lattice.Services.Partition {
    interface IPartitionService {
        Skip: number;
        Take: number;
        setSkip(skip: number, preserveTake?: boolean): void;
        setTake(take?: number): void;
        partitionBeforeQuery(serverQuery: IQuery, clientQuery: IQuery, isServerQuery: boolean): boolean;
        partitionBeforeCommand(serverQuery: IQuery): void;
        partitionAfterQuery(initialSet: any[], query: IQuery, serverCount: number): any[];
        amount(): number;
        isAmountFinite(): boolean;
        totalAmount(): number;
        initial(skip: number, take: number): any;
        isClient(): boolean;
        isServer(): boolean;
        hasEnoughDataToSkip(skip: number): boolean;
        Type: Reinforced.Lattice.PartitionType;
    }
}
declare module Reinforced.Lattice.Services.Partition {
    class ServerPartitionService extends ClientPartitionService {
        constructor(masterTable: IMasterTable);
        private _seq;
        private _conf;
        private _serverSkip;
        private _indicator;
        private _dataLoader;
        setSkip(skip: number, preserveTake?: boolean): void;
        protected cut(ordered: any[], skip: number, take: number): any;
        setTake(take: number): void;
        partitionBeforeQuery(serverQuery: IQuery, clientQuery: IQuery, isServerQuery: boolean): boolean;
        private resetSkip();
        private switchToSequential();
        switchBack(serverQuery: IQuery, clientQuery: IQuery, isServerQuery: boolean): void;
        private _provideIndication;
        partitionAfterQuery(initialSet: any[], query: IQuery, serverCount: number): any[];
        private _serverTotalCount;
        isAmountFinite(): boolean;
        totalAmount(): number;
        amount(): number;
        isClient(): boolean;
        isServer(): boolean;
        hasEnoughDataToSkip(skip: number): boolean;
    }
}
declare module Reinforced.Lattice.Services.Partition {
    class SequentialPartitionService extends ClientPartitionService {
        constructor(masterTable: IMasterTable);
        Owner: ServerPartitionService;
        DataLoader: BackgroundDataLoader;
        private _conf;
        setSkip(skip: number, preserveTake?: boolean): void;
        private _takeDiff;
        setTake(take: number): void;
        isAmountFinite(): boolean;
        amount(): number;
        private resetSkip();
        partitionBeforeQuery(serverQuery: IQuery, clientQuery: IQuery, isServerQuery: boolean): boolean;
        partitionAfterQuery(initialSet: any[], query: IQuery, serverCount: number): any[];
        private _provideIndication;
        private _backgroundLoad;
        provide(rows: IRow[]): void;
        hasEnoughDataToSkip(skip: number): boolean;
        isClient(): boolean;
        isServer(): boolean;
    }
}
declare module Reinforced.Lattice.Plugins.LoadingOverlap {
    class LoadingOverlapPlugin extends PluginBase<Reinforced.Lattice.Plugins.LoadingOverlap.ILoadingOverlapUiConfig> {
        private _overlappingElement;
        private _overlapLayer;
        private _isOverlapped;
        private overlapAll();
        private createOverlap(efor, templateId);
        private updateCoords(overlapLayer, overlapElement);
        private updateCoordsAll();
        private deoverlap();
        private onBeforeLoading(e);
        afterDrawn: (e: ITableEventArgs<any>) => void;
    }
}
declare module Reinforced.Lattice.Plugins.RegularSelect {
    class RegularSelectPlugin extends Reinforced.Lattice.Plugins.PluginBase<Reinforced.Lattice.Plugins.RegularSelect.IRegularSelectUiConfig> {
        init(masterTable: IMasterTable): void;
        private _isSelecting;
        private _reset;
        private _startRow;
        private _startColumn;
        private _endRow;
        private _endColumn;
        private _prevUiCols;
        startSelection(e: ICellEventArgs): void;
        endSelection(e: ICellEventArgs): void;
        private diff(row, column);
        move(e: ICellEventArgs): void;
    }
}
declare module Reinforced.Lattice.Services {
    /**
     * Class responsible for handling of table messages. It handles internally thrown messages as well as
     * user's ones
     */
    class MessagesService implements IAdditionalRowsProvider {
        constructor(usersMessageFn: (msg: ILatticeMessage) => void, instances: Reinforced.Lattice.Services.InstanceManagerService, controller: Controller, templatesProvider: ITemplatesProvider);
        private _usersMessageFn;
        private _instances;
        private _controller;
        private _templatesProvider;
        /**
         * Shows table message according to its settings
         * @param message Message of type ILatticeMessage
         * @returns {}
         */
        showMessage(message: ILatticeMessage): void;
        private showTableMessage(tableMessage);
        private _noresultsOverrideRow;
        overrideNoresults(row: IRow): void;
        provide(rows: IRow[]): void;
    }
}
declare module Reinforced.Lattice.Plugins.Reload {
    class ReloadPlugin extends Reinforced.Lattice.Plugins.PluginBase<Reinforced.Lattice.Plugins.Reload.IReloadUiConfiguration> {
        private _renderedExternally;
        private _externalReloadBtn;
        private _ready;
        triggerReload(): void;
        renderContent(p: Reinforced.Lattice.Templating.TemplateProcess): void;
        startLoading(): void;
        stopLoading(): void;
        subscribe(e: Reinforced.Lattice.Services.EventsService): void;
        init(masterTable: IMasterTable): void;
        afterDrawn: (e: ITableEventArgs<any>) => void;
    }
}
declare module Reinforced.Lattice.Plugins.Loading {
    class LoadingPlugin extends PluginBase<any> implements ILoadingPlugin {
        BlinkElement: HTMLElement;
        subscribe(e: Reinforced.Lattice.Services.EventsService): void;
        showLoadingIndicator(): void;
        hideLoadingIndicator(): void;
        static Id: string;
        renderContent(p: Reinforced.Lattice.Templating.TemplateProcess): void;
    }
    /**
     * Loading indicator plugin.
     * Plugin Id: Loading
     */
    interface ILoadingPlugin {
        /**
         * Shows loading indicator
         */
        showLoadingIndicator(): void;
        /**
         * Hides loading indicator
         */
        hideLoadingIndicator(): void;
    }
}
declare module Reinforced.Lattice.Plugins.Hierarchy {
    class HierarchyPlugin extends PluginBase<IHierarchyUiConfiguration> implements IClientFilter {
        private _parentKeyFunction;
        private _globalHierarchy;
        private _currentHierarchy;
        private _notInHierarchy;
        init(masterTable: IMasterTable): void;
        expandRow(args: IRowEventArgs): void;
        expandLoadRow(args: IRowEventArgs): void;
        toggleLoadRow(args: IRowEventArgs): void;
        collapseRow(args: IRowEventArgs): void;
        toggleRow(args: IRowEventArgs): void;
        toggleSubtreeOrLoad(dataObject: any, turnOpen?: boolean): void;
        toggleSubtreeByObject(dataObject: any, turnOpen?: boolean): void;
        private loadRow(dataObject);
        private isParentExpanded(dataObject);
        private expand(dataObject);
        private appendNodes(newNodes, tail);
        private firePartitionChange(tk?, sk?);
        private removeNLastRows(n);
        private toggleVisibleChildren(dataObject, visible, hierarchy?);
        private toggleVisible(dataObject, visible, hierarchy?);
        private collapse(dataObject, redraw);
        private onFiltered_after();
        private expandParents(src);
        private restoreHierarchyData(d);
        private buildCurrentHierarchy(d);
        private addParents(o, existing);
        private onOrdered_after();
        private orderHierarchy(src, minDeepness);
        private appendChildren(target, index, hierarchy);
        private buildHierarchy(d, minDeepness);
        private isParentNull(dataObject);
        private deepness(obj);
        private visible(obj);
        private onDataReceived_after(e);
        private setServerChildrenCount(dataObject);
        private setLocalChildrenCount(dataObject);
        private setChildrenCount(dataObject, count);
        private proceedAddedData(added);
        private proceedUpdatedData(d);
        moveItems(items: any[], newParent: any): void;
        private moveItem(dataObject, newParentKey);
        private moveFromNotInHierarchy(key, newParentKey);
        private cleanupNotInHierarchy();
        private onAdjustment_after(e);
        private onAdjustment_before(e);
        private moveToNotInHierarchy(parent);
        private removeFromHierarchySubtrees(toRemove, hierarchy);
        subscribe(e: Reinforced.Lattice.Services.EventsService): void;
        filterPredicate(rowObject: any, query: IQuery): boolean;
    }
}
declare module Reinforced.Lattice.Editing {
    class EditorBase<T extends Reinforced.Lattice.Editing.IEditFieldUiConfigBase> extends Reinforced.Lattice.Plugins.PluginBase<T> implements Reinforced.Lattice.Editing.IEditor {
        /**
         * Is current editor valid (flag set by master editor)
         */
        IsValid: boolean;
        /**
         * True when field is single, false when multiple (e.g. row edit, form edit)
         */
        CanComplete: boolean;
        /**
         * True when cell editor is part of row edit, otherwise false
         */
        IsRowEdit: boolean;
        /**
         * True when cell editor is part of form edit, otherwise false
         */
        IsFormEdit: boolean;
        /**
        * True when cell editor is editing cell
        */
        IsCellEdit: boolean;
        /**
         * Original, locally displayed data object
         */
        DataObject: any;
        /**
         * Value for particular editor column
         */
        Data: any;
        /**
         * Collection with editor's recent validation messages
         */
        ValidationMessages: IValidationMessage[];
        renderedValidationMessages(): string;
        /**
         * Retrieves original value for this particular cell editor
         *
         * @returns {Any} Original, unchanged value
         */
        protected getThisOriginalValue(): any;
        /**
         * Resets editor value to initial settings
         */
        reset(): void;
        /**
         * Data object that is modified within editing process
         */
        ModifiedDataObject: any;
        /**
         * Reference to parent editor
         */
        Row: IEditHandler;
        /**
         * Corresponding column
         */
        Column: IColumn;
        /**
         * Flag when initial value setting occures
         */
        IsInitialValueSetting: boolean;
        /**
         * Returns entered editor value
         *
         * @returns {}
         */
        getValue(errors: IValidationMessage[]): any;
        /**
         * Sets editor value from the outside
         */
        setValue(value: any): void;
        /**
         * Template-bound event raising on changing this editor's value
         */
        changedHandler(e: Reinforced.Lattice.ITemplateBoundEvent): void;
        /**
         * Event handler for commit (save edited, ok, submit etc) event raised from inside of CellEditor
         * Commit leads to validation. Cell editor should be notified
         */
        commitHandler(e: Reinforced.Lattice.ITemplateBoundEvent): void;
        /**
         * Event handler for reject (cancel editing) event raised from inside of CellEditor
         * Cell editor should be notified
         */
        rejectHandler(e: Reinforced.Lattice.ITemplateBoundEvent): void;
        /**
         * Called when cell editor has been drawn
         *
         * @param e HTML element where editor is rendered
         * @returns {}
         */
        onAfterRender(e: HTMLElement): void;
        /**
         * Needed by editor in some cases
         *
         * @returns {}
         */
        focus(): void;
        OriginalContent(p: Reinforced.Lattice.Templating.TemplateProcess): void;
        FieldName: string;
        notifyObjectChanged(): void;
        private _errorMessages;
        protected defineMessages(): {
            [key: string]: string;
        };
        getErrorMessage(key: string): string;
        init(masterTable: IMasterTable): void;
    }
    interface IEditor extends IPlugin, ICell {
        /**
         * Plugin's visual states collection.
         * Usually it is not used, but always it is better to have one
         */
        VisualStates: Reinforced.Lattice.Rendering.VisualState;
        /**
         * Original, locally displayed data object
         */
        DataObject: any;
        /**
         * Data object that is modified within editing process
         */
        ModifiedDataObject: any;
        /**
         * Returns entered editor value
         *
         * @param errors Validation errors collection
         * @returns {}
         */
        getValue(errors: IValidationMessage[]): any;
        /**
         * Sets editor value from the outside
         */
        setValue(value: any): void;
        /**
         * Corresponding column
         */
        Column: IColumn;
        FieldName: string;
        /**
         * Resets editor value to initial settings
         */
        reset(): void;
        /**
         * True when field is single, false when multiple (e.g. row edit, form edit)
         */
        CanComplete: boolean;
        /**
         * True when cell editor is part of row edit, otherwise false
         */
        IsRowEdit: boolean;
        /**
         * True when cell editor is part of form edit, otherwise false
         */
        IsFormEdit: boolean;
        /**
        * True when cell editor is editing cell
        */
        IsCellEdit: boolean;
        /**
         * Flag when initial value setting occures
         */
        IsInitialValueSetting: boolean;
        /**
        * Called when cell editor has been drawn
        *
        * @param e HTML element where editor is rendered
        * @returns {}
        */
        onAfterRender(e: HTMLElement): void;
        /**
         * Is current editor valid (flag set by master editor)
         */
        IsValid: boolean;
        /**
         * Needed by editor in some cases
         *
         * @returns {}
         */
        focus(): void;
        /**
         * Collection with editor's recent validation messages
         */
        ValidationMessages: IValidationMessage[];
        notifyObjectChanged(): void;
        getErrorMessage(key: string): string;
    }
    interface IValidationMessage {
        Message?: string;
        Code: string;
    }
}
declare module Reinforced.Lattice.Editing {
    class EditHandlerBase<TConfiguration extends Reinforced.Lattice.Editing.IEditFormUiConfigBase> extends Reinforced.Lattice.Plugins.PluginBase<TConfiguration> implements IEditHandler {
        Cells: {
            [key: string]: ICell;
        };
        DataObject: any;
        IsSpecial: boolean;
        Index: number;
        protected CurrentDataObjectModified: any;
        protected ValidationMessages: IValidationMessage[];
        protected EditorConfigurations: {
            [key: string]: IEditFieldUiConfigBase;
        };
        commit(editor: Reinforced.Lattice.Editing.IEditor): void;
        notifyChanged(editor: Reinforced.Lattice.Editing.IEditor): void;
        reject(editor: Reinforced.Lattice.Editing.IEditor): void;
        protected dispatchEditResponse(editResponse: Reinforced.Lattice.ITableAdjustment, then: () => void): void;
        protected isEditable(column: IColumn): boolean;
        protected sendDataObjectToServer(then: () => void): void;
        protected hasChanges(): boolean;
        protected setEditorValue(editor: Reinforced.Lattice.Editing.IEditor): void;
        protected createEditor(fieldName: string, column: IColumn, canComplete: boolean, editorType: EditorMode): Reinforced.Lattice.Editing.IEditor;
        protected retrieveEditorData(editor: Reinforced.Lattice.Editing.IEditor, errors?: IValidationMessage[]): void;
        init(masterTable: IMasterTable): void;
    }
    interface IEditHandler extends IRow {
        commit(editor: Reinforced.Lattice.Editing.IEditor): void;
        notifyChanged(editor: Reinforced.Lattice.Editing.IEditor): void;
        reject(editor: Reinforced.Lattice.Editing.IEditor): void;
    }
    enum EditorMode {
        Cell = 0,
        Row = 1,
        Form = 2,
    }
}
declare module Reinforced.Lattice.Editing.Editors.Cells {
    class CellsEditHandler extends EditHandlerBase<Reinforced.Lattice.Editing.Cells.ICellsEditUiConfig> implements IAdditionalRowsProvider {
        private _isEditing;
        private _activeEditor;
        private ensureEditing(loadIndex);
        private beginCellEdit(column, rowIndex);
        beginCellEditHandle(e: ICellEventArgs): void;
        onAfterRender(e: any): void;
        afterDrawn: (e: ITableEventArgs<any>) => void;
        commit(editor: Reinforced.Lattice.Editing.IEditor): void;
        private finishEditing(editor, redraw);
        private cleanupAfterEdit();
        notifyChanged(editor: Reinforced.Lattice.Editing.IEditor): void;
        reject(editor: Reinforced.Lattice.Editing.IEditor): void;
        provide(rows: IRow[]): void;
        init(masterTable: IMasterTable): void;
    }
}
declare module Reinforced.Lattice.Editing.Editors.Cells {
    class RowsEditHandler extends EditHandlerBase<Reinforced.Lattice.Editing.Rows.IRowsEditUiConfig> implements IAdditionalRowsProvider {
        private _isEditing;
        private _activeEditors;
        private _isAddingNewRow;
        onAfterRender(e: any): void;
        private ensureEditing(rowIndex);
        private beginRowEdit(rowIndex);
        afterDrawn: (e: ITableEventArgs<any>) => void;
        commitAll(): void;
        commit(editor: Reinforced.Lattice.Editing.IEditor): void;
        notifyChanged(editor: Reinforced.Lattice.Editing.IEditor): void;
        rejectAll(): void;
        reject(editor: Reinforced.Lattice.Editing.IEditor): void;
        add(): void;
        beginRowEditHandle(e: IRowEventArgs): void;
        commitRowEditHandle(e: IRowEventArgs): void;
        rejectRowEditHandle(e: IRowEventArgs): void;
        provide(rows: IRow[]): void;
        init(masterTable: IMasterTable): void;
    }
}
declare module Reinforced.Lattice.Editing.Form {
    class FormEditHandler extends Reinforced.Lattice.Editing.EditHandlerBase<Reinforced.Lattice.Editing.Form.IFormEditUiConfig> {
        private _currentForm;
        private _currentFormElement;
        private _activeEditors;
        private _isEditing;
        private ensureEditing(rowDisplayIndex);
        private ensureEditingObject(dataObject);
        add(): void;
        beginEdit(dataObject: any): void;
        beginFormEditHandler(e: IRowEventArgs): void;
        private startupForm();
        private stripNotRenderedEditors();
        commitAll(): void;
        rejectAll(): void;
        notifyChanged(editor: Reinforced.Lattice.Editing.IEditor): void;
        commit(editor: Reinforced.Lattice.Editing.IEditor): void;
        reject(editor: Reinforced.Lattice.Editing.IEditor): void;
    }
    class FormEditFormModel {
        EditorsSet: {
            [key: string]: IEditor;
        };
        ActiveEditors: IEditor[];
        Handler: FormEditHandler;
        RootElement: HTMLElement;
        DataObject: any;
        Editors(p: Reinforced.Lattice.Templating.TemplateProcess): void;
        private editor(p, editor);
        Editor(p: Reinforced.Lattice.Templating.TemplateProcess, fieldName: string): void;
        commit(): void;
        reject(): void;
    }
}
declare module Reinforced.Lattice.Editing.Editors.PlainText {
    class PlainTextEditor extends Reinforced.Lattice.Editing.EditorBase<Reinforced.Lattice.Editing.Editors.PlainText.IPlainTextEditorUiConfig> {
        Input: HTMLInputElement;
        ValidationRegex: RegExp;
        private _removeSeparators;
        private _dotSeparators;
        private _floatRegex;
        private _formatFunction;
        private _parseFunction;
        getValue(errors: Reinforced.Lattice.Editing.IValidationMessage[]): any;
        setValue(value: any): void;
        init(masterTable: IMasterTable): void;
        private defaultParse(value, column, errors);
        private defaultFormat(value, column);
        changedHandler(e: Reinforced.Lattice.ITemplateBoundEvent): void;
        renderContent(p: Reinforced.Lattice.Templating.TemplateProcess): void;
        focus(): void;
        defineMessages(): {
            [key: string]: string;
        };
    }
}
declare module Reinforced.Lattice.Editing.Editors.SelectList {
    class SelectListEditor extends Reinforced.Lattice.Editing.EditorBase<Reinforced.Lattice.Editing.Editors.SelectList.ISelectListEditorUiConfig> {
        List: HTMLSelectElement;
        Items: Reinforced.Lattice.IUiListItem[];
        SelectedItem: Reinforced.Lattice.IUiListItem;
        getValue(errors: Reinforced.Lattice.Editing.IValidationMessage[]): any;
        setValue(value: any): void;
        onStateChange(e: Reinforced.Lattice.Rendering.IStateChangedEvent): void;
        init(masterTable: IMasterTable): void;
        renderContent(p: Reinforced.Lattice.Templating.TemplateProcess): void;
        onAfterRender(e: HTMLElement): void;
        changedHandler(e: Reinforced.Lattice.ITemplateBoundEvent): void;
        focus(): void;
        defineMessages(): {
            [key: string]: string;
        };
    }
}
declare module Reinforced.Lattice.Editing.Editors.Check {
    class CheckEditor extends Reinforced.Lattice.Editing.EditorBase<Reinforced.Lattice.Editing.Editors.Check.ICheckEditorUiConfig> {
        FocusElement: HTMLElement;
        private _value;
        renderContent(p: Reinforced.Lattice.Templating.TemplateProcess): void;
        changedHandler(e: Reinforced.Lattice.ITemplateBoundEvent): void;
        private updateState();
        getValue(errors: Reinforced.Lattice.Editing.IValidationMessage[]): any;
        setValue(value: any): void;
        focus(): void;
        defineMessages(): {
            [key: string]: string;
        };
    }
}
declare module Reinforced.Lattice.Editing.Editors.Memo {
    class MemoEditor extends Reinforced.Lattice.Editing.EditorBase<Reinforced.Lattice.Editing.Editors.Memo.IMemoEditorUiConfig> {
        TextArea: HTMLInputElement;
        MaxChars: number;
        CurrentChars: number;
        Rows: number;
        WarningChars: number;
        Columns: number;
        init(masterTable: IMasterTable): void;
        changedHandler(e: Reinforced.Lattice.ITemplateBoundEvent): void;
        setValue(value: any): void;
        getValue(errors: Reinforced.Lattice.Editing.IValidationMessage[]): any;
        renderContent(p: Reinforced.Lattice.Templating.TemplateProcess): void;
        focus(): void;
        defineMessages(): {
            [key: string]: string;
        };
    }
}
declare module Reinforced.Lattice.Editing.Editors.Display {
    class DisplayEditor extends Reinforced.Lattice.Editing.EditorBase<Reinforced.Lattice.Editing.Editors.Display.IDisplayingEditorUiConfig> {
        ContentElement: HTMLElement;
        private _previousContent;
        renderContent(p: Reinforced.Lattice.Templating.TemplateProcess): void;
        Render(p: Reinforced.Lattice.Templating.TemplateProcess): void;
        notifyObjectChanged(): void;
        getValue(errors: Reinforced.Lattice.Editing.IValidationMessage[]): any;
        setValue(value: any): void;
        init(masterTable: IMasterTable): void;
    }
}
declare module Reinforced.Lattice.Plugins.MouseSelect {
    class MouseSelectPlugin extends Reinforced.Lattice.Plugins.PluginBase<Reinforced.Lattice.Plugins.MouseSelect.IMouseSelectUiConfig> {
        init(masterTable: IMasterTable): void;
        private originalX;
        private originalY;
        private selectPane;
        private _isSelecting;
        private selectStart(x, y);
        private move(x, y);
        private selectEnd();
        private _isAwaitingSelection;
        afterDrawn: (e: ITableEventArgs<any>) => void;
    }
}
