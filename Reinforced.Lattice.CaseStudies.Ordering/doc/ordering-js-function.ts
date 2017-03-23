function orderByEmailDomain(x, y) {
    var domainX = x.Email.substring(x.Email.indexOf('@'));
    var domainY = y.Email.substring(y.Email.indexOf('@'));
    return domainX.localeCompare(domainY);
}
