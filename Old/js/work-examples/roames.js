roames = {
    create: function () {
        var path = `../assets/examples/roames/`;

        var images = [
            { image: `${path}roamesworld01.jpg`, description: `roames`, descriptionid: `1` },
            { image: `${path}roamesworld02.jpg`, description: `roames`, descriptionid: `2` },
            { image: `${path}roamesworld03.jpg`, description: `roames`, descriptionid: `3` },
            { image: `${path}roamesworld04.jpg`, description: `roames`, descriptionid: `4` }
        ];

        var images2 = [
            { image: `${path}roamesreview01.jpg`, description: `roames`, descriptionid: `5` },
            { image: `${path}roamesreview02.jpg`, description: `roames`, descriptionid: `6` },
            { image: `${path}roamesreview03.jpg`, description: `roames`, descriptionid: `7` },
            { image: `${path}roamesreview04.jpg`, description: `roames`, descriptionid: `8` },
            { image: `${path}roamesreview05.jpg`, description: `roames`, descriptionid: `9` },
            { image: `${path}roamesreview06.jpg`, description: `roames`, descriptionid: `10` },
            { image: `${path}roamesreview07.jpg`, description: `roames`, descriptionid: `11` },
            { image: `${path}roamesreview08.jpg`, description: `roames`, descriptionid: `12` }
        ];

        $(`.content`).append(`<div id="roames"><div class="container"></div></div>`);

        $(`#roames .container`).append(`
            <h4>ROAMES WORLD</h4>
            <div class="line-break"></div>
        `);

        imageViewer.create(`#roames .container`, images, `roamesworld`);

        $(`#roames .container`).append(`
            <br>
            <br>
            <h4>ROAMES REVIEW</h4>
            <div class="line-break"></div>
        `);

        imageViewer.create(`#roames .container`, images2, `roamesreview`, 4);
        imageViewer.setupEvents();
    },
    get: {
        text: function (image) {
            switch (image){
                // ROAMES WORLD
                case `1`:
                    return `
                        I created and implemented a Colour Select and Height Map Colour UI tool for RoamesWorld’s front end in collaboration with shaders developed by our Core software team (as seen in our presentation at <a href="https://www.youtube.com/watch?v=F6vtgGY-aLs" target="_blank">Unite Amsterdam 2017</a>).

                        The tools were intended to allow users to expose minute terrain details, and as such, required a number of components such as an expandable gradient bar (exploiting Unity’s RectTransform anchors), the ability to add or remove gradient nodes for more colour detail, a gradient node lock, to allow for very sharp colour transitions and the ability to assign custom min and max height values to determine the range that the gradient height map is relevant to.
                    `;
                case `2`:
                    return `
                        The <a href="https://www.youtube.com/watch?v=JfGcCupiBHk" target="_blank">Nifty Disc</a> was conceived as an alternative control method that would allow users to easily navigate RoameWorld’s 3D landscape. I was directly involved in the concept design and also implemented a complete programmatic refactor of the component to fix a number of outstanding issues.
                    `;
                case `3`:
                    return `
                        The Nifty Disc utilises Unity’s Canvas UI tools in conjunction with a world space camera in order to give a perceived depth to a compass-like disc when the RoamesWorld camera is pitched. In addition to having complete mechanisms for 3D movement, the Nifty Disc has 20 outer slots, which can have different application controls applied to them as a means of ‘quick select’, allowing users to have a fully customisable and quicker method of using the application.
                    `;
                case `4`:
                    return `
                        I worked with one of our programmers on coming up with a fresh design for our UI ‘accordion’ system, used to menu contents in order to prevent users from being exposed to irrelevant information in their moment to moment experience while using RoamesWorld. The previous system used an overly complicated method of indicating to the user at which levels of the hierarchy had layers turned on, with different shapes and colour codes. We simplified this down to an easily readable consistent number display, in which a parent element would show the total number of child elements that were active. We also modified the background colour system to be a series of ‘colour tinting’, as we believed this was a superior solution in accommodating colour blind users.
                    `;
                // ROAMES REVIEW
                case `5`:
                    return `
                        While working for Fugro ROAMES, I was tasked with designing work flows and user interfaces for 8 different Unity-based webGL applications, centred around providing quality assurance of the integrity of physical marine and power industry assets.

                        The complexity of these applications and the technical capabilities of the user-base varied, but I established very early in the development process a number of broad common design principles: Make workflows as small and transparent as possible; Toolsets should be streamlined to complete actions quickly and accurately; Interface designs should be flexible and reusable.

                        This is an example of a workflow I created for Review, used for explaining to project stake holders how users could interact with tasks by generic means. In line with with company’s slogan ‘One Fugro’, the concept was that the workflow could be shared commonly across all internal software development divisions.
                    `;
                case `6`:
                    return `
                        These applications in many cases were being developed concurrently and in discussions with the other engineers, we established that applications would have a common delivery method for units of work to be undertaken by users, which required a common customer facing interface.

                        I designed a ‘Lobby’ that would house a searchable form for different QA application types, with work units broken into selectable tasks. Users would be restricted to only seeing listings for jobs they were qualified to undertake based on account permissions, which would avoid visual clutter and over complication by providing the user with too much irrelevant on screen information.
                    `;
                case `7`:
                    return `
                        <a href="https://youtu.be/t7gY6gaCbkc" target="_blank">Workflow Example</a>
                    `;
                case `8`:
                    return `
                        I designed window menu interfaces to be highly customisable via a well defined API that made use of function chaining for setting Unity interface component properties, including programmable animation prefabs.
                    `;
                case `9`:
                    return ``;
                case `10`:
                    return `
                        By utilising a generic UI base for these components, it made it simpler to do design revisions at the discretion of the product owner and user feedback.
                    `;
            }
        }
    }
}