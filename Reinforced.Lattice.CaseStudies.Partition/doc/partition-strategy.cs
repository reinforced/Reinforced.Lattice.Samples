Configurator<,> conf;

// Enable client partition, set initial take to 10
conf.Partition(x => x.Client().InitialSkipTake(take: 10));

//    OR

// Enable server partition, set initial take to 10
conf.Partition(x => x.Server().InitialSkipTake(take: 10));

//    OR

// Enable sequential partition, set initial take to 10, load 3 pages by each request
conf.Partition(x => x.Sequential(loadPagesAhead: 3).InitialSkipTake(take: 10));
