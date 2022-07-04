particle = {
    controller: {
        start: function () {
            var numberOfParticles = 0;
    
            setInterval(function () {
                if (numberOfParticles < 12) {
                    particle.controller.create(numberOfParticles);
                    particle.controller.move(numberOfParticles);
                    numberOfParticles += 1;
                }
            }, 500);
        },
        create: function(id) {
            var xMin = 50;
            var xMax = ($(window).width() / 2);

            var right = Math.floor(Math.random() * (xMax - xMin + 1) + xMin);
            var bottom = 20;

            var size = Math.floor(Math.random() * (25 - 15 + 1) + 15);

            var particle = `
                <div id="particle-${id}" class="particle" style="width: ${size}px; height: ${size}px; bottom: ${bottom}px; right: ${right}px;">
                    <img src="assets/icons/triangle.svg" class="triangle" style="width: 100%; height: 100%;"/>
                </div>
            `;
    
            $(`.content`).append(particle);
        },
        move: function(id) {
            $(`#particle-${id}`).data(`lifetime`, 0);
            $(`#particle-${id}`).data(`fadein`, false);
            $(`#particle-${id}`).data(`maxOpacity`, Math.floor(Math.random() * (0.8 - 0.4 + 1) + 0.4));
            $(`#particle-${id}`).data(`lastXMovement`, 0);
            $(`#particle-${id}`).data(`lastYMovement`, 0);

            setInterval(function () {
                particle.update.position(id);
            }, 10);
            setInterval(function () {
                particle.update.opacity(id);
            }, 50);
        }
    },
    update: {
        position: function(id) {
            var bottom = $(`#particle-${id}`).css(`bottom`);
            var right = $(`#particle-${id}`).css(`right`);
    
            // Remove 'px' from the suffix
            var bottomNormalised = parseInt(bottom, 10);
            var rightNormalised = parseInt(right, 10);
    
            // Randomise xAxis movement direction
            var xDirMin = 0; // Left
            var xDirMax = 2; // Right
            var xDirection = Math.floor(Math.random() * (xDirMax - xDirMin + 1) + xDirMin);
    
            // OVERRIDE JITTER
            var xDirection = 5;

            // Randomise the size of the x movement 
            var xMin = 0;
            var xMax = 100;
            var xMovementAmount = (Math.floor(Math.random() * (xMax - xMin + 1) + xMin) / 100);

            // If the new x movement is greatly in a different direction to the last, there should be a movement cap on it
            var lastXMovement = parseFloat($(`#particle-${id}`).data(`lastXMovement`));
            var allowedXMovementBuffer = 0.15;

            if (xMovementAmount > lastXMovement){
                if (xMovementAmount - lastXMovement > allowedXMovementBuffer){
                    xMovementAmount = lastXMovement + allowedXMovementBuffer;
                }
            }
            else if (xMovementAmount < lastXMovement){
                if (lastXMovement - xMovementAmount > allowedXMovementBuffer){
                    xMovementAmount = lastXMovement - allowedXMovementBuffer;
                }
            }

            $(`#particle-${id}`).data(`lastXMovement`, xMovementAmount);

            if (xDirection == 0) rightNormalised += xMovementAmount; // Go left
            else if (xDirection == 1) rightNormalised = rightNormalised; // Float on the xAxis
            else rightNormalised -= xMovementAmount; // Otherwise, go right

            // Randomise yAxis movement direction
            var yDirMin = 0; // Down
            var yDirMax = 5; // Up
            var yDirection = Math.floor(Math.random() * (yDirMax - yDirMin + 1) + yDirMin);

            // OVERRIDE JITTER
            var yDirection = 5;

            // Randomise the size of the movement 
            var yMin = 0;
            var yMax = 100;
            var yMovementAmount = (Math.floor(Math.random() * (yMax - yMin + 1) + yMin) / 150);

            // If the new y movement is greatly in a different direction to the last, there should be a movement cap on it
            var lastYMovement = parseFloat($(`#particle-${id}`).data(`lastYMovement`));
            var allowedYMovementBuffer = 0.2;

            if (yMovementAmount > lastYMovement){
                if (yMovementAmount - lastYMovement > allowedYMovementBuffer){
                    yMovementAmount = lastYMovement + allowedYMovementBuffer;
                }
            }
            else if (yMovementAmount < lastYMovement){
                if (lastXMovement - yMovementAmount > allowedYMovementBuffer){
                    yMovementAmount = lastYMovement - allowedYMovementBuffer;
                }
            }

            $(`#particle-${id}`).data(`lastYMovement`, yMovementAmount);

            if (yDirection == 0) bottomNormalised -= yMovementAmount; // Go down
            else if (yDirection == 1) bottomNormalised = bottomNormalised; // Float on the yAxis
            else bottomNormalised += (yMovementAmount*1.5); // Otherwise, go up

            //Check if it is or is close to hitting the edge of the screen
            if (rightNormalised <= 5 || bottomNormalised <= 5)
            {
                particle.update.reset(id);
            }
            else {
                $(`#particle-${id}`).css(`right`, `${rightNormalised}px`);
                $(`#particle-${id}`).css(`bottom`, `${bottomNormalised + 1}px`);
            }


        },
        opacity: function(id) {
            var opacity = parseFloat($(`#particle-${id}`).css(`opacity`));
            var currentLifetime = parseInt($(`#particle-${id}`).data(`lifetime`));
            var fadespeed = 0.05;
            var maxOpacity = $(`#particle-${id}`).data(`maxOpacity`);

            // Randomise the lifetime length
            var lifetimeMin = 60;
            var lifetimeMax = 180;
            var lifetimeAmount = Math.floor(Math.random() * (lifetimeMax - lifetimeMin + 1) + lifetimeMin);

            // Initial fade in - particle creation
            if ($(`#particle-${id}`).data(`fadein`) == false){
                if (opacity < maxOpacity){
                    $(`#particle-${id}`).css(`opacity`, `${opacity + fadespeed}`);
                }
                else {
                    $(`#particle-${id}`).data(`fadein`, true);
                }
            }
            // Liftime is up. Time to fade out.
            else if (currentLifetime >= lifetimeAmount){
                if (opacity > 0){
                    $(`#particle-${id}`).css(`opacity`, `${opacity - fadespeed}`);
                }
                else {
                    particle.update.reset(id);
                }
            }

            $(`#particle-${id}`).data(`lifetime`, currentLifetime += 1);
        },
        reset: function(id){
            var xMin = 50;
            var xMax = ($(window).width() / 2);

            // Time tracker
            $(`#particle-${id}`).data(`lifetime`, 0);

            // Size
            var size = Math.floor(Math.random() * (25 - 15 + 1) + 15);
            $(`#particle-${id}`).css(`height`, size + `px`);
            $(`#particle-${id}`).css(`width`, size + `px`);

            // Positional
            $(`#particle-${id}`).css(`right`, `${Math.floor(Math.random() * (xMax - xMin + 1) + xMin)}px`);
            $(`#particle-${id}`).css(`bottom`, `20px`);
            $(`#particle-${id}`).data(`lastXMovement`, 0);
            $(`#particle-${id}`).data(`lastYMovement`, 0);

            //Opacity
            $(`#particle-${id}`).data(`fadein`, false);
            $(`#particle-${id}`).data(`maxOpacity`, Math.floor(Math.random() * (0.8 - 0.4 + 1) + 0.4));
            $(`#particle-${id}`).css(`opacity`, `0`);
        }
    }
}