wakeupdata = {
    create: function () {
        var path = `../assets/examples/wakeupdata/wakeupdata`;

        var images = [
            { image: `${path}05.jpg`, description: `wakeupdata`, descriptionid: `1` },
            { image: `${path}06.jpg`, description: `wakeupdata`, descriptionid: `2` },
            { image: `${path}07.jpg`, description: `wakeupdata`, descriptionid: `3` },
            { image: `${path}08.jpg`, description: `wakeupdata`, descriptionid: `4` }
        ];

        var images2 = [
            { image: `${path}01.jpg`, description: `wakeupdata`, descriptionid: `5` },
            { image: `${path}02.jpg`, description: `wakeupdata`, descriptionid: `6` },
            { image: `${path}03.jpg`, description: `wakeupdata`, descriptionid: `7` },
            { image: `${path}04.jpg`, description: `wakeupdata`, descriptionid: `8` }
        ];

        $(`.content`).append(`<div id="wakeupdata"><div class="container"></div></div>`);

        $(`#wakeupdata .container`).append(`
            <h4>WAKEUPDATA HUB</h4>
            <div class="line-break"></div>
        `);

        imageViewer.create(`#wakeupdata .container`, images, `wakeupdatahub`);

        $(`#wakeupdata .container`).append(`
            <br>
            <br>
            <h4>WAKEUPDATA CONNECT & ACTIONS</h4>
            <div class="line-break"></div>
        `);

        imageViewer.create(`#wakeupdata .container`, images2, `wakeupdataconnect`);

        imageViewer.setupEvents();
    },
    get: {
        text: function (image) {
            switch (image){
                 // WAKEUPDATA - Import Workflow
                 case '1':
                    return `
                        High fidelity workflow mockup / redesign of the Project Import process for first time users - our user's first interaction once they sign up for the service. The main goals were to improve the visual fidelity and alignment of colours with the organisations marketing material, whilst also providing the user with better information on how long the import process is via a dynamic 'hop skotch' feature, as well as giving them heightened awareness of their methods of direct contact with us in case they run into issues. The intention was to improve first time user retention when we identified that 96% of our users required assistance on their first project upload. 
                    `;
                case '2':
                    return ``;
                case '3':
                    return ``;
                case '4':
                    return ``;
                 // WAKEUPDATA - Connect & Actions
                 case '5':
                    return `
                        High fidelity workup for our first implementation of user configurable settings in the WakeupData Connect platform. The user can drag and rearrange and enable/disable side menu options. I programmatically implemented the pictured design, including all UI components and the json format for the settings data.
                    `;
                case '6':
                    return ``;
                case '7':
                    return `
                        One of my self imposed mandates in 2021 was to align our two products 'WakeupData Hub' and 'WiseMetrics' under one banner. Our users would commonly refer to 'Hub' as 'WakeupData', the company name, and they were even more confused about what WiseMetrics was - a product? A different entity. On top of that, the names gave no indication of their functional purpose. My concept was to approach it the same way Google or Adobe would with their products. Company name followed by product name, with a particular identifyable product colour. I wanted us to redesign the applications to be user interface consistent with each other, which would also reduce development overhead with our limited programmer resources.  

                        The first public release of the now retitled 'WakeupData Connect' and 'WakeupData Actions' came in July 2021.
                    `;
                case '8':
                    return ``;    
            }
        }
    }
}