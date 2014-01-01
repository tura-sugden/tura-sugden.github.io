function turasGallery()
{
	function setupGallery()
	{
		var elements = document.getElementsByClassName("image-list");
		var galleryElements = document.getElementsByClassName("project gallery-project");
		if(!elements.length || !galleryElements.length)
		{
			return;
		}

		
		var div = document.createElement("div");
		div.setAttribute("id", "testingT");
		galleryElements[0].appendChild(div);
		
		var element = elements[0];
		element.style.display = "block";
	}

	function hasGallery()
	{
	    if(document.readyState != "complete")
	    {
	      return false;
	    }
		var elements = document.getElementsByClassName("image-list");
		if(elements.length)
		{
			return true;
		}
		return false;
	}

	function checkReady()
	{
		if(!hasGallery())
		{
			setTimeout(checkReady, 100);
		}
		else
		{
			setupGallery();
		}
	}

	checkReady();
};
window.___TG = new turasGallery();