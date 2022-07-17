footer = {
    create: function () {
        var append = ``;
    
        var options = [
            { icon: `email`, url: `tristan.edwards.portfolio@gmail.com` },
            { icon: `linkedin`, url: `https://linkedin.com/in/tristanmarkedwards/` }            
            // { icon: `dribbble`, url: `https://dribbble.com/BulksonBigT` },
            // { icon: `youtube`, url: `` }
        ];
    
        for (var i = 0; i < options.length; i++){
            append += 
                `<div class="icon"><a href="${options[i].url}" target="_blank">
                    <div class="svgHack" style="background-image: url(assets/icons/${options[i].icon}.svg);"></div>
                </a></div>`;
        }
    
        $(`footer`).append(`
            <div class="footer-triangles"></div>
            <div class="text-field"><p style="margin: 0px">DESIGNED & PROGRAMMED by <strong>TRISTAN EDWARDS</strong> © 2022</p></div>
            <div class="iconsField">${append}</div>
        `);
    }
}