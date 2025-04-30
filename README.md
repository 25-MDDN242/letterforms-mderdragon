[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/m3rrFl41)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=18867790&assignment_repo_type=AssignmentRepo)
## MDDN 242 2025 Assignment 2

My letters are resembled by a dancing woman. This was my very first idea for the project, inspired by cheerleading movements. The design is a simplistic, faceless figure somewhat based off of the 'dancing lady' emoji, e.g. the red dress. It sits in between readable and abstract as she is meant to move as a human would, and the human body cannot precisely replicate a font so her movement at least somewhat resembles the character.

Her arms, legs, and toes are controlled by parameters that rotate and move. These parameters are duplicated and reversed for left and right limbs (marked by either an L or R). Both sides of her skirt can be 'lifted' via parameters as well for more dynamism.

I decided to remove the parameters that controlled the pointing of the feet as it was not a very noticable detail and I wanted to make room for more parameters such as joints and colour changes. Now the feet point/rotate in the same fashion as the legs.

After designing the initial alphabet with just one ellipse for each limb, I decided she needed some joints to allow for more movement and variation between letters. I opted against designing knees as I figured they would be mostly obstructed by the dress and ultimately not used much. On the other hand, designing elbows was worthwhile. I did struggle with fixing the ellipses together at an elbow point and there is still a few letters where the elbows stick out slightly.

I edited some of my parameter values to fix some interpolation as sometimes the limbs would spin awkwardly or in the wrong direction. This still occurs sometimes but for the most part her movement is natural.

I wanted the default character to pay homage to the original inspiring emoji, so I positioned her limbs in the same way. I also had a go at turning her skin yellow but felt this somewhat clashed with the aesthetic of the font, and I could not figure out how to smoothly transition between the colours.
