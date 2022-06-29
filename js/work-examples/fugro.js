fugro = {
    create: function () {
        var path = `../assets/examples/fugro/gaiainsight`;

        var images = [
            { image: `${path}01.jpg`, description: `fugro`, descriptionid: `1` },
            { image: `${path}02.jpg`, description: `fugro`, descriptionid: `2` },
            { image: `${path}03.jpg`, description: `fugro`, descriptionid: `3` },
            { image: `${path}04.jpg`, description: `fugro`, descriptionid: `4` }
        ];

        var images2 = [
            { image: `${path}05.jpg`, description: `fugro`, descriptionid: `5`  },
            { image: `${path}06.jpg`, description: `fugro`, descriptionid: `6`  },
            { image: `${path}07.jpg`, description: `fugro`, descriptionid: `7`  },
            { image: `${path}08.jpg`, description: `fugro`, descriptionid: `8`  }
        ];

        $(`.content`).append(`<div id="fugro"><div class="container"></div></div>`);

        $(`#fugro .container`).append(`
            <h4>GAIA INSIGHT - CONVERSION TOOL</h4>
            <div class="line-break"></div>
        `);

        imageViewer.create(`#fugro .container`, images, `gaiaconversion`);

        $(`#fugro .container`).append(`
            <br>
            <br>
            <h4>GAIA INSIGHT</h4>
            <div class="line-break"></div>
        `);

        imageViewer.create(`#fugro .container`, images2, `gaiainsight`);
        imageViewer.setupEvents();
    },
    get: {
        text: function (image) {
            switch (image){
                // GAIA INSIGHT - CONVERSION TOOL
                case '1':
                    return `
                        A basic format conversion tool available for public consumption. I worked on both the UI design of the application as well as the workflow.
                    `;
                case '2':
                    return ``;
                case '3':
                    return ``;
                case '4':
                    return ``;
                // GAIA INSIGHT
                case '5':
                    return `
                        A GIS viewer application demonstrated to the public at Markets Day in 2018. I completely redesigned the user interface, with the main goals being the removal of a permanent side bar fixture, consolidation of similar UI components for generic re-usability, and an action bar (bottom of the screen) to help lead users as to what actions they are able to perform.
                    `;
                case '6':
                    return ``;
                case '7':
                    return `
                        A major component of the Unity redevelopment of Gaia Insight in 2019 was to add 3D capabilities for representing data points with label information and eventually 3d point cloud of the subsurface. I programmed and designed the prototype version of this software, which was based on the 'ROAMES World Core' (A repurposable 3D core developped in-house at Fugro ROAMES) in collaboration with my colleagues in Brisbane.                  
                    `;
                case '8':
                    return ``;
            }
        }
    }
}