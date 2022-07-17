header = {
    create: function () {
        var append = ``;
    
        var options = [
            { title: `home`, id: `home`, url: `#` },
            { title: `resume`, id: `resume`, url: `assets/resume-tristan.pdf` },
            { title: `case studies`, id: `cs`, data: `workexamples` },
            { title: `about`, id: `about`, url: `about.html` },
            { title: `contact`, id: `contact`, url: `contact.html` }
        ];

        var workexamples = [
            { title: `WiseMetrics`, url: `uxcase1.html` },
            { title: `Roames Review`, url: `` },
            { title: `Roames World`, url: `` }
        ];

        for (var i = 0; i < options.length; i++){
            var title = options[i].title;
            var dropdown = ``;
            var identifier = `id="header-${options[i].title}"`;

            if (options[i].data == `workexamples`) {
                var suboptions = ``;

                for (var j = 0; j < workexamples.length; j++){
                    var suboptionTitle = workexamples[j].title;
                    suboptions += `<a href="${workexamples[j].url}"><div class="examples-dropdown-option">${suboptionTitle.toUpperCase()}</div></a>`;
                }

                dropdown = `<div class="examples-dropdown" style="display: none">${suboptions}</div>`;
                identifier = `id="workexamples-dropdown"`;
            }

            if (options[i].url){
                append += `<div ${identifier} class="header-option-container"><a href="${options[i].url}"><div class="header-option">${title.toUpperCase()}</div></a>${dropdown}</div>`;
            }
            else {
                append += `<div ${identifier} class="header-option-container"><div class="header-option">${title.toUpperCase()}</div>${dropdown}</div>`;
            }
        }

        $(`header`).append(`
            <div class="bodyContainer container">
                <a href="#" id="logofade" class="logoContainer"> 
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