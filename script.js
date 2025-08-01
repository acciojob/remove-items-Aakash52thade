

	const button = document.querySelector('input[type="button"][value="Select and Remove"]');

	button.addEventListener('click', function(){
		const select = document.getElementById("colorSelect");
		const selectIdx = select.SelectIndex;

		if(selectIdx  !== -1){
			select.remove(selectIdx);
		}
	})

