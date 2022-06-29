routing = {
    initialise: function() {
        workexamples.create();
        about.create();
        contact.create();
        routing.update();
    },
    disableAll: function() {
        // Pages
        $(`#work-examples`).hide();
        $(`#about`).hide();
        $(`#contact`).hide();

        // Work Examples
        $(`#spillehallen`).hide();
        $(`#wakeupdata`).hide();
        $(`#wisemetrics`).hide();
        $(`#fugro`).hide();
        $(`#roames`).hide();
        $(`#vertiko`).hide();

        $(window).scrollTop(0);
    },
    update: function() {
        var url = window.location.toString();

        // Pages
        if (url.includes(`work-examples`)){
            routing.disableAll();
            $(`#work-examples`).show();
        }
        else if (url.includes(`about`)){
            routing.disableAll();
            $(`#about`).show();
        }
        else if (url.includes(`contact`)){
            routing.disableAll();
            $(`#contact`).show();
        }

        // Work Examples
        else if (url.includes(`spillehallen`)) { 
            routing.disableAll();
            if ($(`#spillehallen`).length == 0) spillehallen.create();
            else $(`#spillehallen`).show();
        }
        else if (url.includes(`wakeupdata`)) { 
            routing.disableAll();
            if ($(`#wakeupdata`).length == 0) wakeupdata.create();
            else $(`#wakeupdata`).show();
        }
        else if (url.includes(`wisemetrics`)) {
            routing.disableAll();
            if ($(`#wisemetrics`).length == 0) wisemetrics.create();
            else $(`#wisemetrics`).show();
        }
        else if (url.includes(`fugro`)) {
            routing.disableAll();
            if ($(`#fugro`).length == 0) fugro.create();
            else $(`#fugro`).show();
        }
        else if (url.includes(`roames`)) {
            routing.disableAll();
            if ($(`#roames`).length == 0) roames.create();
            else $(`#roames`).show();
        }
        else if (url.includes(`vertiko`)) {
            routing.disableAll();
            if ($(`#vertiko`).length == 0) vertiko.create();
            else $(`#vertiko`).show();
        }

        // Default - Show Work Examples Main Page
        else { 
            routing.disableAll();
            $(`#work-examples`).show();
        }
    }
}