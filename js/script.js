var tableHeader = '<tr><th>Код учителя</th><th>ФИО</th><th>Дата подачи заявления</th><th>Должность</th><th>Учебное заведение</th><th>Тип</th><th>Округ</th><th>Населенный пункт</th><th>Вид</th><th>Год открытия</th><th>Назначение</th><th>Примечания</th><th>Статус</th></tr>'

function addFullList(searchItem){
	var table = document.querySelector('#list'),
		rowCount = teachers.length;
	table.innerHTML = '';
	table.innerHTML = tableHeader;
	for(i = 0; i < rowCount; i++){
		var tr = document.createElement('tr'),
			flag = false;
		for(var k in teachers[i]){	
			var td = document.createElement('td');
			td.innerHTML = teachers[i][k];
			if(searchItem){
				searchItem = searchItem.toLowerCase();
				if(td.innerHTML.toLowerCase().includes(searchItem))
					flag = true;
				tr.appendChild(td);
			}
			else
				tr.appendChild(td);
		}
		if(searchItem){
			if(flag)
				table.appendChild(tr);
			else
				tr = '';
		}
		else
			table.appendChild(tr);
	}
}