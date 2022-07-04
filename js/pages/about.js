about = {
    create: function () {
        var intro = `
            <h4>Hello there!</h4>
            <h2 style="padding-bottom: 15px; margin-top: 0px">I'm Tristan Edwards</h2>
            ${about.get.intro()}
            <br>
            <div class="actions-container">
                <input class="resume-button" style="width: 180px" type="submit" value="DOWNLOAD RESUME">
            </div>`;

        var whydesign = `
            <div> 
                <h2 style="padding-bottom: 15px;">Why do I design?</h2>
                ${about.get.whyDesign()}
            </div>`;

        $(`.content2`).append(`
            <div id="about"> 
               <div class="container">
                    <div class="photo-container"> <div class="photo"><img src="../../assets/portrait.jpg"></div></div> 
                    <div class="about-description-container"> 
                        ${intro}
                        <div class="line-break"></div>
                        ${about.get.skillSummary()}
                        <div class="line-break"></div>
                        ${whydesign}
                        <br>
                        <div class="line-break"></div>
                        ${about.get.experience()}
                    </div>
               </div>
            </div>
        `);
    
        about.setupEvents();
    },
    get: {
        intro: function () {
            return `
                <p>
                    I'm a 30 year old designer from Brisbane, Australia. 
                    After learning my craft and gaining experience back home, I've spent the past 3 1/2 years living and working as a designer in the Netherlands and now Denmark. 
                    I'm always up for a new adventure, always keen to learn new things, and obviously not afraid of change or new challenges!
                </p>
                <p>
                    I have 6 years industry experience in professional desktop and WebGL application development across Unity and web-based platforms.
                    I've been fortunate enough to have worked in several different fields on a variety of applications, ranging from quality assurance, risk assessment, price comparison, feed optimisation and 3D geospatial visualisations.
                </p>`;
        },
        whyDesign: function() {
            return `
                <p>
                    Design to me is a passion as much as a career or hobby. It's an opportunity to work with other people who share that same passion. 
                    Coming up with solutions to problems, with brand new ideas and the prospect of making something completely brand new, or that makes people's lives easier. It's invigorating. 
                </p>`;
        },
        skillSummary: function () {
            return `
                <h5 style="font-weight: bold;">SKILL SUMMARY</h5>
                <p> User Research, Wireframes, User Flows, High Fidelity Mockups, Front End Development, Responsive Design, Interaction Design, Guerilla Usability Testing</p>
                <h5 style="font-weight: bold;">INTERESTS</h5>
                <p>Experience Strategy, User-Centred Design, UI/UX Design, Concept Art, Video Game Design, Information Architecture</p>`;
        },
        experience: function () {
            return `
                <h5 style="font-weight: bold;">EXPERIENCE</h5>
                <p>UX Lead & Game Designer @ Spillehallen (Denmark) | Nov 2021 - Current</p>
                <p>Senior UI / UX Designer & Front End Developer @ WakeupData (Denmark) | Jan 2020 - Nov 2021</p>
                <p>Lead Unity Developer @ Fugro (Netherlands) | Aug 2019 - Jan 2020</p>
                <p>UI / UX Designer & Front End Developer @ Fugro (Netherlands) | Sept 2018 - Jan 2020</p>
                <p>UI / UX Designer & Unity Developer @ Fugro ROAMES (Australia) | Jan 2017 - Sept 2018</p>
                <p>Junior Software Engineer @ Fugro ROAMES (Australia) | Apr 2016 - Jan 2017</p>`;
        }
    },
    setupEvents: function () {
        $(`.resume-button`).click(function (){
            window.open('../../assets/resume-tristan.pdf');
        });
    }
}