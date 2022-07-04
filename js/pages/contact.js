contact = {
    create: function () {
        $(`.content2`).append(`
        <div id="contact"> 
            <div class="text-container">
                <h3>I'd love to hear from you!</h3>
                <br>
                <p style="font-size: 1.3rem;">I love hearing from interesting people and  I'm always open to discussing opportunities and projects.</p>
            </div>
            <form action="https://formspree.io/tristan.edwards.portfolio@gmail.com" method="POST">
                <p>Name: *</p>
                <div style="display: flex;">
                    <div style="width: 100%; padding-right: 5px">  
                        <input type="text" style="width: 100%" name="FirstName" value="">
                        <br>
                    <p style="font-size: 1.1rem;">First Name</p>
                    </div>
                    <div style="width: 100%; padding-left: 5px">  
                    <input type="text" style="width: 100%" name="LastName" value="">
                    <br>
                    <p style="font-size: 1.1rem;">Last Name</p>
                    </div>
                </div>
                <br> 
                <p>Email: *</p>
                <div style="width: 100%"><input type="text" style="width: 100%" name="FirstName" value=""></div>
                <br> 
                <p>Subject: *</p>
                <div style="width: 100%"><input type="text" style="width: 100%" name="Subject" value=""></div>
                <br> 
                <p>Message: *</p>
                <div style="width: 100%"><textarea style="width: 100%; height: 150px;" name="Message" value=""></textarea></div>
                <br> 
                <div class="submitButton" style="float: right">
                    <input type="submit" value="SEND">
                </div>
            </form>
        </div>
        `);
    }
}