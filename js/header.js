header = {
    create: function () {
        var append = ``;
    
        var options = [
            { title: `work examples`, data: `workexamples` },
            { title: `about`, data: `about` },
            { title: `contact`, data: `contact` }
        ];

        var workexamples = [
            { title: `wakeupdata`, data: `wakeupdata` },
            { title: `wisemetrics`, data: `wisemetrics` },
            { title: `fugro`, data: `fugro` },
            { title: `roames`, data: `roames` },
            { title: `vertiko`, data: `vertiko` }
        ];

        for (var i = 0; i < options.length; i++){
            var title = options[i].title;
            var dropdown = ``;
            var identifier = ``;

            if (options[i].data == `workexamples`) {
                var suboptions = ``;

                for (var j = 0; j < workexamples.length; j++){
                    var suboptionTitle = workexamples[j].title;
                    suboptions += `<div class="examples-dropdown-option" data="${workexamples[j].data}">${suboptionTitle.toUpperCase()}</div>`;
                }

                dropdown = `<div class="examples-dropdown" style="display: none">${suboptions}</div>`;
                identifier = `id="workexamples-dropdown"`;
            }

            append +=  `<div ${identifier} class="header-option-container"><div class="header-option" data="${options[i].data}">${title.toUpperCase()}</div>${dropdown}</div>`;
        }

        $(`header`).append(`
            <div class="bodyContainer container">
                <a href="https://tristanmarkedwards.bitbucket.io/" id="logofade" class="logoContainer"> 
                    <img class="logo1" src="assets/titleLogo1.png">
                    <img class="logo2" src="assets/titleLogo2.png">
                </a>
                <div class="navigation" style="flex-grow: 1"><div class="nav-regular" style="float: right">
                    ${append}
                </div></div>
            </div>
            <div class="header-triangles"></div>
        `);

        header.setupEvents();
    },
    setupEvents: function () {
        $(`.header-option`).click(function (e){
            var newTab = $(e.currentTarget).attr(`data`);
            window.location.hash = newTab;
            routing.update();
        });

        $(`.examples-dropdown-option`).click(function (e){
            var newTab = $(e.currentTarget).attr(`data`);
            window.location.hash = newTab;
            routing.update();
        });

        $(`#workexamples-dropdown`).mouseover(function() {
           $(`.examples-dropdown`).show();
        });

        $(`#workexamples-dropdown`).mouseleave(function() {
            $(`.examples-dropdown`).hide();
         });

        $(`.examples-dropdown`).mouseover(function() {
            $(`.examples-dropdown`).show();
        });

        $(`.examples-dropdown`).mouseleave(function() {
            $(`.examples-dropdown`).hide();
        });
    }
}