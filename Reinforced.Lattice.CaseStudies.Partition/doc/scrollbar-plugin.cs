// Display vertical scrollbar
// by default - sticks to right edge of table from inside
scroll.Scrollbar(c => c.Vertical());

// Display vertical scrollbar 
// sticked to the left table edge outside of table
scroll.Scrollbar(c => c.Vertical(stick: VerticalStick.Left, hollow: StickHollow.External));

// Appends scrollbar element to table root element instead of 
// page body
scroll.Scrollbar(c => c.Vertical().AppendTo(TableElement.Body));
