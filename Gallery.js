function turasGallery()
{
	function setupGallery()
	{
		var elements = document.getElementsByClassName("image-list");
		var galleryElements = document.getElementsByClassName("project gallery-project");
		if(!elements.length || !galleryElements.length)
		{
			// Not a gallery page.
			return;
		}

		var div = document.createElement("div");
		div.setAttribute("id", "tgalllery");
		
		var element = elements[0];
		//element.style.display = "block";
		for(var i = 0; i < element.children.length; i++)
		{
			var img = element.children[i].children[0];

			var a = document.createElement("a");
			a.setAttribute("href", img.dataset.src);
			var im = document.createElement("img");
			im.setAttribute("src", img.dataset.src + "?format=100w");
			a.appendChild(im);
			div.appendChild(a);
		}

		galleryElements[0].appendChild(div);
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