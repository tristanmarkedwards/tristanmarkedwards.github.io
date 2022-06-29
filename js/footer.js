footer = {
    create: function () {
        //console.log("adding footer");
        var append = ``;
    
        var options = [
            { icon: `linkedin`, url: `linkedin.com/in/tristanmarkedwards/` },
            { icon: `dribbble`, url: `dribbble.com/BulksonBigT` },
            { icon: `youtube`, url: `` }
        ];
    
        for (var i = 0; i < options.length; i++){
            append += 
                `<div class="icon"><a href="https://${options[i].url}" target="_blank">
                    <div class="svgHack" style="background-image: url(assets/icons/${options[i].icon}.svg);"></div>
                </a></div>`;
        }
    
        $(`footer`).append(`
            <div class="pageDivider"></div>
            <div class="text-field"><p style="margin: 0px">LAYOUT DESIGN by <strong>TRISTAN EDWARDS</strong> © 2022</p></div>
            <div class="iconsField">${append}</div>
        `);
    }
}