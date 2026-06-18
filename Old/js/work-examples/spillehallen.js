spillehallen = {
    create: function () {
        var path = `../assets/examples/spillehallen/spillehallen`;

        var images = [
            { image: `${path}01.jpg`, description: `spillehallen`, descriptionid: `1` },
        ];

        $(`.content`).append(`<div id="spillehallen"><div class="container"></div></div>`);

        $(`#spillehallen .container`).append(`
            <h4>SPILLEHALLEN</h4>
            <div class="line-break"></div>
        `);

        imageViewer.create(`#spillehallen .container`, images, `spillehallen`);
        imageViewer.setupEvents();
    },
    get: {
        text: function (image) {
            switch (image){
                // SPILLEHALLEN
                case '1':
                    return `
                        abc 123 
                    `;
                case '2':
                    return ``;
            }
        }
    }
}