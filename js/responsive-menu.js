menu = {
    create: function () {
        var append = ``;
    
        var options = [
            { title: `home`, id: `home`, url: `` },
            { title: `resume`, id: `resume`, url: `assets/resume-tristan.pdf` },
            { title: `case study: wisemetrics`, id: `cs1`, url: `uxcase1.html` },
            { title: `case study: roames review`, id: `cs2`, url: `` },
            { title: `case study: roames world`, id: `cs2`, url: `` },
            { title: `about`, id: `about`, url: `about.html` },
            { title: `contact`, id: `contact`, url: `contact.html` }
        ];

        for (var i = 0; i < options.length; i++){
            var title = options[i].title;
            append +=  `<a id="responsive-menu-${options[i].id}" href="${options[i].url}"><div class="panel-body"><div class="header-option">${title.toUpperCase()}</div></div></a>`;
        }

        var panelHeader = `
            <div data-toggle="collapse" href="#collapseMenu" class="panel-heading collapsed">
                <div class="menu-title-container"><div class="menu-title">MENU</div>
                <img class="menu-title-arrow" src="assets/menu-title-arrow.png"></div>
            </div>
        `;

        $(`.responsiveMenu`).append(`
            <div class="panel-group">
                <div class="panel panel-default">
                    ${panelHeader}
                    <div id="collapseMenu" class="panel-collapse collapse">${append}</div>
                </div>
            </div>
        `);
    },
    setupEvents: function () {

        $(`.header-option`).click(function (e){
            var newTab = $(e.currentTarget).attr(`data`);
            window.location.hash = newTab;
            routing.update();
        });
    }
}