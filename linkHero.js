(function() {
	$.get("/Sitewide/HeroAndMapStatistics", function(data) { 
		var site = jQuery.parseHTML(data); 
		var heroLinkDict = {};
		$(site).find("tr:regex(id,__[0-9]+)").each(function() { heroLinkDict[$(this).find("img")[0].src] = $(this).find("a")[0].href; });
		$(".ImageGradientBorder").contents().filter(function() { return this.localName === "img"; }).wrap(function() { return '<a href="' + heroLinkDict[this.src] + '">'; })
	});
})();