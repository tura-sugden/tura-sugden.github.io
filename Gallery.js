function turasGallery()
{
	var isSetup = false;
	function trySetupGallery()
	{
		var elements = document.getElementsByClassName("image-list");
		var galleryElements = document.getElementsByClassName("project gallery-project");
		if(!elements.length || !galleryElements.length)
		{
			// Not a gallery page.
			return false;
		}

		var div = document.createElement("div");
		div.setAttribute("id", "tgalllery");
		div.style.textAlign = "center";
		
		var element = elements[0];
		//element.style.display = "block";

		var galleryImages = [];
		for(var i = 0; i < element.children.length; i++)
		{
			var current = element.children[i].children;
			var img = current[0];
			var meta = current.length > 1 && current[1];
			console.log(meta);
			var title = "";
			try
			{
				title = meta.children[0].children[0].innerText;
				if(meta.children.length > 1)
				{
					var description = meta.children[1].children[0].innerText;
					if(description)
					{
						title = title + "\n" + description;
					}
				}
			}
			catch(e)
			{
				console.log("ERROR", e);
			}

			var a = document.createElement("a");
			a.setAttribute("href", img.dataset.src);
			a.setAttribute("rel", "gallery");
			if(title)
			{
				a.setAttribute("title", title);
			}
			var innerImage = document.createElement("img");
			innerImage.setAttribute("src", img.dataset.src + "?format=200w");
			a.appendChild(innerImage);
			div.appendChild(a);

			galleryImages.push(a);
		}

		$(galleryImages).fancybox(
			{
				"titlePosition":"inside",
				"showCloseButton":false
			});

		galleryElements[0].appendChild(div);

		return true;
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
		if(!isSetup)
		{
			if(!trySetupGallery())
			{
				if(document.readyState != "complete")
				{
					setTimeout(checkReady, 100);
				}
			}
			else
			{
				isSetup = true;
			}
		}
		return;

		if(!hasGallery())
		{
			
		}
		else
		{
			setupGallery();
		}
	}

	checkReady();
};
window.___TG = new turasGallery();