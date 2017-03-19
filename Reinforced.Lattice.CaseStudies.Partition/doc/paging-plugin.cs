// Displays quite simple page selector consisting of long pages list
// and "go to first"/"go to last" button
// at the right-bottom corner
paging.Paging(ui => ui.PagingSimple(useFirstLasPage:true), where: "rb");

// Displays pages selector displaying current page +/- 1 page
// and hiding redundant pages with periods
// with textual input box for navigation to random page
paging.Paging(ui => ui.PagingWithPeriods(useFirstLasPage: true).UseGotoPage(), where: "rb");

// Minimal pager allowing navigation to next/previous page
paging.Paging(ui => ui.PagingWithArrows(), where: "rb");

