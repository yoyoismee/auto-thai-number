walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;
	
	var tagName = node.tagName ? node.tagName.toLowerCase() : "";
	if (tagName == 'input' || tagName == 'textarea') {
		return;
	}
	if (node.classList && node.classList.contains('ace_editor')) {
		return;
	}

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace("1", "๑");
	v = v.replace("2", "๒");
	v = v.replace("3", "๓");
	v = v.replace("4", "๔");
	v = v.replace("5", "๕");
	v = v.replace("6", "๖");
	v = v.replace("7", "๗");
	v = v.replace("8", "๘");
	v = v.replace("9", "๙");
	v = v.replace("0", "๐");

	textNode.nodeValue = v;
}


