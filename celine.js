				function init() {
		        $("#criteria").keyup(queryViaEnter);
		        $("#btnSearch").click(query);
		        loadData();
				}
        
        function queryViaEnter() {
						var e = window.event;
						if (e.keyCode == "13") {		
							var myCriteria = $.trim($("#criteria").val());
							query(myCriteria);
						}
					}

        function search(paramCriteria) {
          clearTable();
          var count = 0;
          for(var i = 0; i < items.length; i++) {
            var item = items[i];
            if (paramCriteria != undefined) {
                if (item.toLowerCase().indexOf(paramCriteria.toLowerCase()) == -1) {
                    continue;
                }
						}
						
						count++;
            insertTable(item, count == 1);
          }

          return count;
        }

        function clearTable(name, location) {
					$("#detail tbody tr").remove();
				}

				function insertTable(name, toplay) {
					//var repo = "D:/Gitpro/OSChina/bible/celine/";
					var repo = "https://gitee.com/thewire/bible/raw/master/celine/";
					var location = repo + name;
					console.log(100, toplay);
					var holder = "";
					if(toplay) {
							holder = 'autoplay="autoplay"';
					}
					$("<tr></tr>").append("<td align='center'>" + name + "</td>").appendTo("#detail tbody");
		      $("<tr></tr>").append("<td align='center'><video controls width='240' " + holder + "><source src='" + location + "' type='audio/mp4'></td>").appendTo("#detail tbody");
				}

				function loadData() {
		    		for(var i = 0; i < items.length; i++) {
		        		var item = items[i];
		            insertTable(item, i == 0);
		        }
					$("#btnSearch").text(items.length);
				}

				function query(myCriteria) {
						var count = search(myCriteria);
						$("#btnSearch").text(count);
				}