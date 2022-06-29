workexamples = {
    create: function () {
        //console.log("adding work examples");
        var append = ``;
    
        var options = [
            //{ title: `spillehallen`, subtitle: `viby, denmark`, image: `spillehallen-logo`, data: `spillehallen`, period: `November 2021 - Present` },
            { title: `wakeupdata`, subtitle: `aarhus, denmark`, image: `wakeupdata-logo`, data: `wakeupdata`, period: `January 2020 - November 2021` },
            { title: `wisemetrics`, subtitle: `aarhus, denmark`, image: `wisemetrics-logo`, data: `wisemetrics`, period: `January 2020 - November 2021` },
            { title: `fugro`, subtitle: `den haag, netherlands`, image: `fugro-logo`, data: `fugro`, period: `September 2018 - December 2019` },
            { title: `roames`, subtitle: `brisbane, australia`, image: `roames-logo`, data: `roames`, period: `April 2016 - September 2018` },
            { title: `vertiko`, image: `vertiko-logo`, data: `vertiko`, period: `` }
        ];

        for (var i = 0; i < options.length; i++){
            var title = options[i].title;
            var subtitle = options[i].subtitle;
            append += `
                <div class="image-text-container" data=${options[i].data}>
                    <div class="image-container">
                        <div class="work-period">${options[i].period}</div>
                        <img src="assets/examples/${options[i].image}.png">
                    </div>
                    <div class="text-field">
                        <div style="font-weight: bold; font-size: 14px">${title.toUpperCase()}</div> 
                        ${subtitle != null ? `<div style="font-size: 11px">${subtitle.toUpperCase()}</div>` : ``}
                    </div>
                </div>`;
        }

        // UNCOMMENT THIS IF YOU WANT THE 'DOT DOT DOT' EMPTY SECTION IN THE WORK EXAMPLES LISTING 

        // var appendDots = `
        //     <div class="image-text-container inactive">
        //         <div class="image-container" style="background: none">
        //             <img src="assets/examples/dotdotdot.png">
        //         </div>
        //     </div>
        // `;

        //$(`.content`).append(`<div id="work-examples"><div class="container">${append += appendDots}</div></div>`);
        $(`.content`).append(`<div id="work-examples"><div class="container">${append}</div></div>`);
        workexamples.setupEvents();
    },
    setupEvents: function () {
        $(`.image-text-container`).click(function (e){
            var newTab = $(e.currentTarget).attr(`data`);
            window.location.hash = newTab;
            routing.update();
        });
    }
}