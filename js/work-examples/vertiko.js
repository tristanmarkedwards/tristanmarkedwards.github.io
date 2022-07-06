vertiko = {
    create: function () {
        var path = `../assets/examples/vertiko/vertiko`;

        var images = [
            { image: `${path}01.jpg`, description: `vertiko`, descriptionid: `1` },
            { image: `${path}02.jpg`, description: `vertiko`, descriptionid: `2` },
            { image: `${path}03.jpg`, description: `vertiko`, descriptionid: `3` },
            { image: `${path}04.jpg`, description: `vertiko`, descriptionid: `4` }
        ];

        $(`.content2`).append(`<div id="vertiko"><div class="container"></div></div>`);

        $(`#vertiko .container`).append(`
            <h4>VERTIKO</h4>
            <div class="line-break"></div>
        `);

        imageViewer.create(`#vertiko .container`, images, `vertiko`);
        imageViewer.setupEvents();
    },
    get: {
        text: function (image) {
            switch (image){
                // VERTIKO
                case '1':
                    return `
                        Vertiko is a pixel art indie game I work on in my free time, developped in Unity. Menu graphics are designed at a 1:1 pixel ratio with 16:9 & 16:10 1080p resolutions, while in game graphics are 4:1. This is my <a href="https://www.youtube.com/watch?v=AB-CcGbXzCs" target="_blank">design for the title screen menu</a>, demonstrating PlayStation control UI, which is also dynamically interchangable with XBOX controllers and keyboard input. 
                    `;
                case '2':
                    return `
                        Inventory menu design. Item rarity borders have been colour blindness tested.
                    `;
                case '3':
                    return `
                        Text fonts build for the project and an example town area title. The UI portrait interacts via character expressions such as blinking, smiling, and gritting when taking damage. 
                        The menu itself <a href="https://carbon-media.accelerator.net/0000000eaMw/3haAAGwcIhubVMqctTQvKH;original.gif" target="_blank">opens and closes</a> based on the interactions available to the character to ensure the size of the UI is not over-crowding.      
                    `;
                case '4':
                    return ``;
            }
        }
    }
}