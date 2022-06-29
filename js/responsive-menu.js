menu = {
    create: function () {
        //console.log("adding responsive menu");
        var append = ``;
    
        var options = [
            { title: `work examples`, data: `work-examples` },
            { title: `about`, data: `about` },
            { title: `contact`, data: `contact` }
        ];

        for (var i = 0; i < options.length; i++){
            var title = options[i].title;
            append +=  `<div class="panel-body"><div class="header-option" data="${options[i].data}">${title.toUpperCase()}</div></div>`;
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