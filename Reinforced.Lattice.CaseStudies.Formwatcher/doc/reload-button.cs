// This will render refresh button to element with ID "searchPlaceholder"
conf.ReloadButton(ui => ui.RenderTo("#searchPlaceholder").ForceReload());

// This button will trigger reload even if Query does not contain
// any criterias to be applied on server (so-called force reload)