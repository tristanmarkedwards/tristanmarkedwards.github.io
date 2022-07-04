menu = {
    create: function () {
        //console.log("adding responsive menu");
        var append = ``;
    
        var options = [
            { title: `home`, url: `` },
            // { title: `work examples`, url: `work-examples` },
            { title: `about`, url: `about.html` },
            { title: `contact`, url: `contact.html` }
        ];

        for (var i = 0; i < options.length; i++){
            var title = options[i].title;
            append +=  `<a id="responsive-menu-${options[i].title}" href="${options[i].url}"><div class="panel-body"><div class="header-option">${title.toUpperCase()}</div></div></a>`;
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