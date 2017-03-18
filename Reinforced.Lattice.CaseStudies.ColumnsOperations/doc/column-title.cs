conf.Column(c => c.IsActive).Title("Active?");
conf.Column(c => c.Email)
    .Title("<span style='color:red;text-decoration:underline;'>E-mail</span>") // HTML supported
    .Description("User's email") // provides optional column description
;
