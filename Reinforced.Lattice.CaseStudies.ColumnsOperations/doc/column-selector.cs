Configurator<User,UserRow> conf = ...;
conf.Column(c => c.Id). /* here IntelliSence will show all the column configuration methods */
//          ^
//          | -- type of "c" is UserRow