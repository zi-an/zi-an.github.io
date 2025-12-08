function FindProxyForURL(url, host) {
    if (dnsDomainIs(host, "google.com") || dnsDomainIs(host, "googlevideo.com") || dnsDomainIs(host, "googleapis.com") ) {
        return "PROXY 14.103.224.46:20172";
    }
	if (dnsDomainIs(host, "wikipedia.org") || dnsDomainIs(host, "wikimedia.org")) {
        return "PROXY 14.103.224.46:20172";
    }
	if (dnsDomainIs(host, "imagetwist.com") || dnsDomainIs(host, "wikimedia.org")) {
        return "PROXY 14.103.224.46:20172";
    }
    return "DIRECT";
}