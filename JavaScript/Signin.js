function checkEmail(e)
{
	var xhr = new XMLHttpRequest();
		     	xhr.open("GET","checkUser.php?email="+e.value,true);
		     	xhr.onreadystatechange = function()
		     	{
		     		if (this.readyState == 4 && this.status == 200) 
		     		{
		     			if(this.responseText.trim() == "Invalid")
		     			{
		     				get("err_email").innerHTML = "Invalid Email !!";
		     			}

		     			else
		     			{
		     				get("err_email").innerHTML = "";
		     			}
		     		}
		     	};

		     	xhr.send();
}

function get(id)
		     {
		     	return document.getElementById(id);
		     }

		     