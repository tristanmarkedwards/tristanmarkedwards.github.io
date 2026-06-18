imageViewer = {
    create: function (parent, images, id, perRow) {
        var imageThumbnails = ``;
        var imageThumbnailsFinal = ``;
        var imageThumbnailRows = [];
        var imagePreviews = ``;
        var imageButtons = ``;

        for (var i = 0; i < images.length; i++){
            imageThumbnails += `<div class="column"><img index="${i}" identifier="${id}" description="${images[i].description}" descriptionid="${images[i].descriptionid}" class="image-thumbnail hover-shadow"src="${images[i].image}"></div>`;
            
            if (perRow != null){
                if (((i+1)%perRow) == 0){
                    imageThumbnailRows.push(imageThumbnails);
                    imageThumbnails = ``;
                }
            }

            imagePreviews += `<div class="slide"><div class="numbertext"></div><img src="${images[i].image}" style="width:100%"></div>`;
            imageButtons += `<div class="column"><img class="demo" identifier="${id}" index="${i}" description="${images[i].description}" descriptionid="${images[i].descriptionid}" src="${images[i].image}"></div>`;
        }

        // Arrange the images into rows
        if (imageThumbnailRows.length > 0){
            for (var i = 0; i < imageThumbnailRows.length; i++) {
                imageThumbnailsFinal += `<div class="image-thumbnail-container">${imageThumbnailRows[i]}</div>`;
            }
        }
        imageThumbnailsFinal += `<div class="image-thumbnail-container">${imageThumbnails}</div>`;

        $(parent).append(`
            ${imageThumbnailsFinal}
            <div id="myModal${id}" class="modal">
                <span class="close cursor" identifier="${id}">&times;</span>
                <div class="modal-content">
                    <div class="slideCounter" style="color: white; height: 40px"></div>
                    <div class="mySlides ${id}">${imagePreviews}</div>
                    <a class="prev" identifier="${id}">&#10094;</a>
                    <a class="next" identifier="${id}">&#10095;</a>
                    <div class="caption-container"><div id="caption${id}"></div></div>
                    ${imageButtons}
                </div>
            </div>
        `);
    },
    setupEvents: function () {
        $(`.image-thumbnail`).off();
        $(`.demo`).off();
        $(`.close`).off();
        $(`.prev`).off();
        $(`.next`).off();

        $(`.slide`).click(function (e){
            window.open($(e.currentTarget).find(`img`).attr(`src`), '_blank');
        });

        $(`.image-thumbnail`).click(function (e){
            imageViewer.events.open($(e.currentTarget).attr(`identifier`));
            imageViewer.events.slides.show($(e.currentTarget).attr(`index`), $(e.currentTarget).attr(`identifier`));
        });

        $(`.demo`).click(function (e){
            imageViewer.events.slides.show($(e.currentTarget).attr(`index`), $(e.currentTarget).attr(`identifier`));
        });

        $(`.close`).click(function (e){
            imageViewer.events.close($(e.currentTarget).attr(`identifier`));
        });

        $(`.prev`).click(function (e){
            imageViewer.events.slides.update(-1, $(e.currentTarget).attr(`identifier`));
        });

        $(`.next`).click(function (e){
            imageViewer.events.slides.update(1, $(e.currentTarget).attr(`identifier`));
        });
    },
    events: {
        open: function (id) {
            $(`#myModal${id}`).css(`display`, `block`);
        },
        close: function (id) {
            $(`#myModal${id}`).css(`display`, `none`);
        },
        slides: {
            update: function (index, id) {
                var currentIndex = $(`.mySlides.${id}`).attr(`index`);
                var newIndex = parseInt(currentIndex) + parseInt(index);
                var slides = $(`.mySlides.${id}`).children();
                if (newIndex >= 0 && newIndex < slides.length) imageViewer.events.slides.show(newIndex, id);
            },
            show: function (n, id) {
                var slides = $(`.mySlides.${id}`).children();

                for (var i = 0; i < slides.length; i++){
                    if (i == n) $(slides[i]).show();
                    else $(slides[i]).hide();
                }

                var index = parseInt(n);
                $(`.mySlides.${id}`).attr(`index`, index);
                $(`.slideCounter`).text(`${index+1} / ${$(`#myModal${id} .demo`).length}`);

                var thumbnails = $(`.demo`);
                var thumbnailText = ``;

                for (var i = 0; i < thumbnails.length; i++){
                    if ($(thumbnails[i]).attr(`index`) == index && $(thumbnails[i]).attr(`identifier`) == id) {
                        thumbnailText = imageViewer.get($(thumbnails[i]).attr(`description`), $(thumbnails[i]).attr(`descriptionid`));
                    }
                }

                $(`#caption${id}`).html(thumbnailText);
            }
        }
    },
    get: function(workexample, id) {
        switch(workexample){
            case `fugro`:
                return fugro.get.text(id);
            case `roames`:
                return roames.get.text(id);
            case `vertiko`:
                return vertiko.get.text(id);
            case `wakeupdata`:
                return wakeupdata.get.text(id);
            case `wisemetrics`:
                return wisemetrics.get.text(id);
            default: 
                return ``;
        }
    }
}