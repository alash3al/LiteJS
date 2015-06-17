/*
 * Lite - a simple & light javascript template engine
 * 
 * @version		2.0
 * @author		Mohammed Al Ashaal <github.com/alash3al>
 * @copyright	(c) 2015, lite.js
 * @License		MIT License
 */
function lite(str, args)
{
	// convert anything between ?><text><? to <?='<text>'?>
	// convert anything between <?= <text> ?> to "o += <text>;"
	// convert anything before "<text><?" from the start to "o += <text>;"
	// convert anything after "?><text>" from the end to "o += <text>;"
	str =  "var o = ''; " + str
			.replace(/\?>([^<\?]+)<\?/g, "?> <?= '" + "$1" + "' ?> <?")
			.replace(/<\?=([^<\?=]+)\?>/g, "o += $1;")
			.replace(/^([^<\?]+)<\?/g, "o += '$1'; <?")
			.replace(/([^\?>\s]+)\?>$/g, "o += '$1'; ?>")
			.replace(/<\?|\?>/g, '') + " return o;"

	for ( var k in args ) {
		str = "var " + k + " = '" + args[k] + "'; " + str
	}

	return new Function(str)().trim();
}
