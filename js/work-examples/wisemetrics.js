wisemetrics = {
    create: function () {
        var path = `../assets/examples/wisemetrics/wisemetrics`;

        var images = [
            { image: `${path}01.jpg`, description: `wisemetrics`, descriptionid: `1` },
            { image: `${path}02.jpg`, description: `wisemetrics`, descriptionid: `2` },
            { image: `${path}03.jpg`, description: `wisemetrics`, descriptionid: `3` },
            { image: `${path}04.jpg`, description: `wisemetrics`, descriptionid: `4` },
            { image: `${path}05.jpg`, description: `wisemetrics`, descriptionid: `5` },
            { image: `${path}06.jpg`, description: `wisemetrics`, descriptionid: `6` },
            { image: `${path}07.jpg`, description: `wisemetrics`, descriptionid: `7` },
            { image: `${path}08.jpg`, description: `wisemetrics`, descriptionid: `8` }
        ];

        $(`.content`).append(`<div id="wisemetrics"><div class="container"></div></div>`);

        $(`#wisemetrics .container`).append(`
            <h4>WISEMETRICS</h4>
            <div class="line-break"></div>
        `);

        imageViewer.create(`#wisemetrics .container`, images, `wisemetrics`, 4);
        imageViewer.setupEvents();
    },
    get: {
        text: function (image) {
            switch (image){
                 case '1':
                    return `
                        Early prototype of the base user interface of our spinout company/application 'WiseMetrics'. The original concept was to try and avoid using either a fixed top and side navigation and to use hard edges on UI elements to visually diversify from WakeupData Hub. 
                    `;
                case '2':
                    return `
                        An example of my design ideas around how we would display to users the severity of issues with their data feeds. A combination of stars and field colour are used as to not rely on colour, to provide accessibility for colour blind users. 
                    `;
                case '3':
                    return ``;
                case '4':
                    return `
                        Wireframes of the revised plan of the visual differentiation between WakeupData Hub and WiseMetrics
                    `;
                case '5':
                    return `
                        Wireframes of the revised plan of the visual differentiation between WakeupData Hub and WiseMetrics
                    `;
                case '6':
                    return `
                        Revised design mockup of the WiseMetrics application, with an icon logo rather than the full spelled out product name, a fixed side bar rather than top bar, and bolder colour choices on the issue severity levels that were colour proofed for colour blind users. Rather than a star level, a literal wording of the severity importance was revised, along with collapsible parent containers.
                        
                        I programmatically implemented this design and it became accessible in December 2021. 
                    `;
                case '7':
                    return `
                        A high fidelity mockup workflow of the process for a user to address changes required to a product in their data feed. 
                    `;
                case '8':
                    return `
                        A high fidelity mockup workflow of the process for a user to address changes required to a product in their data feed. 
                    `;
            }
        }
    }
}