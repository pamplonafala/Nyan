/*

x=x/s;y=y/s;

position according to scale 

*/

var frames = 0;
var score = 0;
var speed = 2;




var original = {
    nyan0: function(x,y,s) {
        x=x/s;y=y/s;
        var earL = function(x, y) {
            stroke(0);
            point(x+1, y+4);
            point(x+1, y+3);
            point(x+1, y+2);
            point(x+1, y+1);
            point(x+2, y+0);
            point(x+3, y+0);
            point(x+4, y+1);
            point(x+5, y+2);
            
            stroke(150);
            point(x+2, y+4);
            point(x+2, y+3);
            point(x+2, y+2);
            point(x+2, y+1);
            point(x+3, y+1);
            point(x+3, y+2);
            point(x+3, y+3);
            point(x+3, y+4);
            point(x+4, y+2);
            point(x+4, y+3);
            point(x+4, y+4);
            point(x+5, y+3);
            point(x+5, y+4);
            point(x+6, y+4);
            point(x+7, y+4);
            
            stroke(0);
            point(x+6, y+3);
            point(x+7, y+3);
        };
        var earR = function(x, y) {
            stroke(0);
            point(x+10, y+2);
            point(x+11, y+1);
            point(x+12, y+0);
            point(x+13, y+0);
            point(x+14, y+1);
            point(x+14, y+2);
            point(x+14, y+3);
            point(x+14, y+4);
            
            stroke(150);
            point(x+8, y+4);
            point(x+9, y+4);
            point(x+10, y+3);
            point(x+10, y+4);
            point(x+11, y+2);
            point(x+11, y+3);
            point(x+11, y+4);
            point(x+12, y+1);
            point(x+12, y+2);
            point(x+12, y+3);
            point(x+12, y+4);
            point(x+13, y+1);
            point(x+13, y+2);
            point(x+13, y+3);
            point(x+13, y+4);
    
            stroke(0);
            point(x+8, y+3);
            point(x+9, y+3);
        };
        var neck = function(x, y) {
            stroke(0);
            point(x+0, y+5);
            point(x+0, y+6);
            point(x+0, y+7);
            point(x+0, y+8);
            point(x+0, y+9);
            
            point(x+1, y+10);
            point(x+2, y+11);
            
            point(x+3, y+12);
            point(x+4, y+12);
            point(x+5, y+12);
            point(x+6, y+12);
            point(x+7, y+12);
            point(x+8, y+12);
            point(x+9, y+12);
            point(x+10, y+12);
            point(x+11, y+12);
            point(x+12, y+12);
            
            point(x+13, y+11);
            point(x+14, y+10);
            
            point(x+15, y+5);
            point(x+15, y+6);
            point(x+15, y+7);
            point(x+15, y+8);
            point(x+15, y+9);
            
            stroke(150);
            point(x+1, y+5);
            point(x+1, y+6);
            point(x+1, y+7);
            point(x+1, y+8);
            point(x+1, y+9);
            point(x+2, y+5);
            point(x+3, y+5);
            point(x+4, y+5);
            point(x+5, y+5);
            point(x+6, y+5);
            point(x+7, y+5);
            point(x+8, y+5);
            point(x+9, y+5);
            point(x+10, y+5);
            point(x+11, y+5);
            point(x+12, y+5);
            point(x+13, y+5);
            point(x+14, y+5);
            point(x+3, y+11);
            point(x+4, y+11);
            point(x+5, y+11);
            point(x+6, y+11);
            point(x+7, y+11);
            point(x+8, y+11);
            point(x+9, y+11);
            point(x+10, y+11);
            point(x+11, y+11);
            point(x+12, y+11);
            
            point(x+2, y+6);
            point(x+2, y+7);
            point(x+2, y+8);
            point(x+2, y+9);
            point(x+2, y+10);
            point(x+3, y+6);
            point(x+3, y+7);
            point(x+3, y+8);
            point(x+3, y+9);
            point(x+3, y+10);
            point(x+4, y+6);
            point(x+4, y+7);
            point(x+4, y+8);
            point(x+4, y+9);
            point(x+4, y+10);
            point(x+5, y+6);
            point(x+5, y+7);
            point(x+5, y+8);
            point(x+5, y+9);
            point(x+5, y+10);
            point(x+6, y+6);
            point(x+6, y+7);
            point(x+6, y+8);
            point(x+6, y+9);
            point(x+6, y+10);
            point(x+7, y+6);
            point(x+7, y+7);
            point(x+7, y+8);
            point(x+7, y+9);
            point(x+7, y+10);
            point(x+8, y+6);
            point(x+8, y+7);
            point(x+8, y+8);
            point(x+8, y+9);
            point(x+8, y+10);
            point(x+9, y+6);
            point(x+9, y+7);
            point(x+9, y+8);
            point(x+9, y+9);
            point(x+9, y+10);
            point(x+10, y+6);
            point(x+10, y+7);
            point(x+10, y+8);
            point(x+10, y+9);
            point(x+10, y+10);
            point(x+11, y+6);
            point(x+11, y+7);
            point(x+11, y+8);
            point(x+11, y+9);
            point(x+11, y+10);
            point(x+12, y+6);
            point(x+12, y+7);
            point(x+12, y+8);
            point(x+12, y+9);
            point(x+12, y+10);
            point(x+13, y+6);
            point(x+13, y+7);
            point(x+13, y+8);
            point(x+13, y+9);
            point(x+13, y+10);
            point(x+14, y+6);
            point(x+14, y+7);
            point(x+14, y+8);
            point(x+14, y+9);
    
        };
        var face = function(x, y) {
            //L eye
            stroke(255);
            point(x+4, y+6);
            stroke(0);
            point(x+4, y+7);
            point(x+5, y+6);
            point(x+5, y+7);
            
            //R eye
            stroke(255);
            point(x+11, y+6);
            stroke(0);
            point(x+11, y+7);
            point(x+12, y+6);
            point(x+12, y+7);
            
            //nose
            stroke(0);
            point(x+9, y+7);
            
            //mouth
            stroke(0);
            point(x+5, y+9);
            point(x+8, y+9);
            point(x+11, y+9);
            point(x+5, y+10);
            point(x+6, y+10);
            point(x+7, y+10);
            point(x+8, y+10);
            point(x+9, y+10);
            point(x+10, y+10);
            point(x+11, y+10);
            
            //cheek
            stroke(255, 200, 200);
            point(x+2, y+8);
            point(x+2, y+9);
            point(x+3, y+8);
            point(x+3, y+9);
            point(x+13, y+8);
            point(x+13, y+9);
            point(x+14, y+8);
            point(x+14, y+9);
        };
        var head = function(x, y) {
            earL(x, y);
            earR(x, y);
            neck(x, y);
            face(x, y);
        };
        
        var tart = function(x, y) {
            stroke(0);
            rect(x, y+2, 20, 13);
            rect(x+2, y, 16, 17);
            
            stroke(255, 200, 150);
            rect(x+1, y+1, 18, 15);
            rect(x+2, y+2, 16, 13);
            
            stroke(255, 200, 250);
            point(x+4, y+2);
            point(x+5, y+2);
            point(x+6, y+2);
            point(x+7, y+2);
            point(x+8, y+2);
            point(x+9, y+2);
            point(x+10, y+2);
            point(x+11, y+2);
            point(x+12, y+2);
            point(x+13, y+2);
            point(x+14, y+2);
            point(x+15, y+2);
            point(x+16, y+2);
            point(x+4, y+15);
            point(x+5, y+15);
            point(x+6, y+15);
            point(x+7, y+15);
            point(x+8, y+15);
            point(x+9, y+15);
            point(x+10, y+15);
            point(x+11, y+15);
            point(x+12, y+15);
            point(x+13, y+15);
            point(x+14, y+15);
            point(x+15, y+15);
            point(x+16, y+15);
            
            point(x+2, y+4);
            point(x+2, y+5);
            point(x+2, y+6);
            point(x+2, y+7);
            point(x+2, y+8);
            point(x+2, y+9);
            point(x+2, y+10);
            point(x+2, y+11);
            point(x+2, y+12);
            point(x+2, y+13);
            point(x+18, y+4);
            point(x+18, y+5);
            point(x+18, y+6);
            point(x+18, y+7);
            point(x+18, y+8);
            point(x+18, y+9);
            point(x+18, y+10);
            point(x+18, y+11);
            point(x+18, y+12);
            point(x+18, y+13);
            
            rect(x+3, y+3, 14, 11);
            rect(x+4, y+4, 12, 9);
            rect(x+5, y+5, 10, 7);
            rect(x+6, y+6, 8, 5);
            rect(x+7, y+7, 6, 3);
            rect(x+8, y+8, 4, 1);
            
            stroke(0);
            point(x+1, y+1);
            point(x+19, y+1);
            point(x+1, y+16);
            point(x+19, y+16);
            
            stroke(255, 10, 200);
            point(x+3, y+11);
            point(x+4, y+4);
            point(x+4, y+14);
            point(x+5, y+9);
            point(x+7, y+13);
            point(x+8, y+7);
            point(x+9, y+10);
            point(x+9, y+3);
            point(x+11, y+14);
            point(x+12, y+3);
            point(x+16, y+5);
        };
        var paws = function(x, y) {
            //front
            stroke(0);
            point(x+19 -1, y+18);
            point(x+20 -1, y+19);
            point(x+21 -1, y+19);
            point(x+22 -1, y+18);
    
            stroke(150);
            point(x+21 -1, y+18);
            point(x+20 -1, y+18);
            
            stroke(0);
            point(x+19 -1 -5, y+18);
            point(x+20 -1 -5, y+19);
            point(x+21 -1 -5, y+19);
            point(x+22 -1 -5, y+18);
            point(x+22 -1 -5, y+19);
            
            stroke(150);
            point(x+21 -1 -5, y+18);
            point(x+20 -1 -5, y+18);
            
            //back
            stroke(0);
            point(x+4 +1, y+18);
            point(x+5 +1, y+19);
            point(x+6 +1, y+19);
            point(x+7 +1, y+18);
            point(x+4 +1, y+19);
            
            stroke(150);
            point(x+6 +1, y+18);
            point(x+5 +1, y+18);
            
            stroke(0);
            point(x+4 -1 -5, y+18);
            point(x+5 -1 -5, y+19);
            point(x+6 -1 -5, y+19);
            point(x+0, y+16);
            point(x+7 -1 -5, y+18);
            point(x+8 -1 -5, y+18);
            point(x+7 -1 -8, y+19);
            point(x-1 -1, y+17);
            point(x+0 -1, y+16);
            
            stroke(150);
            point(x+5 -1 -5, y+17);
            point(x+5 -1 -5, y+18);
            point(x+6 -1 -5, y+17);
            point(x+6 -1 -5, y+18);
            point(x+7 -1 -5, y+17);
        };
        var tail = function(x, y) {
            stroke(0);
            point(x-1, y+9);
            point(x-1, y+10);
            point(x-2, y+8);
            point(x-2, y+9);
            point(x-3, y+7);
            point(x-3, y+8);
            point(x-4, y+7);
            point(x-5, y+7);
            point(x-6, y+7);
            point(x-6, y+8);
            point(x-6, y+9);
            point(x-5, y+9);
            point(x-5, y+10);
            point(x-4, y+10);
            point(x-4, y+11);
            point(x-3, y+11);
            point(x-3, y+12);
            point(x-2, y+12);
            point(x-1, y+12);
            point(x-1, y+13);
            
            stroke(150);
            point(x-1, y+11);
            point(x-2, y+10);
            point(x-2, y+11);
            point(x-3, y+9);
            point(x-3, y+10);
            point(x-4, y+8);
            point(x-4, y+9);
            point(x-5, y+8);
        };
        var body = function(x, y) {
            tart(x, y);
            paws(x, y);
            tail(x, y);
        };
        
        var full = function() {
            pushMatrix();
            scale(s);
            noFill();
            body(x-11, y-11);
            head(x-1, y-6);
            
            stroke(255, 0, 0);
            //point(x, y);
            popMatrix();
        }();
    },
    nyan1: function(x,y,s) {
        x=x/s;y=y/s;
        var earL = function(x, y) {
            stroke(0);
            point(x+1, y+4);
            point(x+1, y+3);
            point(x+1, y+2);
            point(x+1, y+1);
            point(x+2, y+0);
            point(x+3, y+0);
            point(x+4, y+1);
            point(x+5, y+2);
            
            stroke(150);
            point(x+2, y+4);
            point(x+2, y+3);
            point(x+2, y+2);
            point(x+2, y+1);
            point(x+3, y+1);
            point(x+3, y+2);
            point(x+3, y+3);
            point(x+3, y+4);
            point(x+4, y+2);
            point(x+4, y+3);
            point(x+4, y+4);
            point(x+5, y+3);
            point(x+5, y+4);
            point(x+6, y+4);
            point(x+7, y+4);
            
            stroke(0);
            point(x+6, y+3);
            point(x+7, y+3);
        };
        var earR = function(x, y) {
            stroke(0);
            point(x+10, y+2);
            point(x+11, y+1);
            point(x+12, y+0);
            point(x+13, y+0);
            point(x+14, y+1);
            point(x+14, y+2);
            point(x+14, y+3);
            point(x+14, y+4);
            
            stroke(150);
            point(x+8, y+4);
            point(x+9, y+4);
            point(x+10, y+3);
            point(x+10, y+4);
            point(x+11, y+2);
            point(x+11, y+3);
            point(x+11, y+4);
            point(x+12, y+1);
            point(x+12, y+2);
            point(x+12, y+3);
            point(x+12, y+4);
            point(x+13, y+1);
            point(x+13, y+2);
            point(x+13, y+3);
            point(x+13, y+4);
    
            stroke(0);
            point(x+8, y+3);
            point(x+9, y+3);
        };
        var neck = function(x, y) {
            stroke(0);
            point(x+0, y+5);
            point(x+0, y+6);
            point(x+0, y+7);
            point(x+0, y+8);
            point(x+0, y+9);
            
            point(x+1, y+10);
            point(x+2, y+11);
            
            point(x+3, y+12);
            point(x+4, y+12);
            point(x+5, y+12);
            point(x+6, y+12);
            point(x+7, y+12);
            point(x+8, y+12);
            point(x+9, y+12);
            point(x+10, y+12);
            point(x+11, y+12);
            point(x+12, y+12);
            
            point(x+13, y+11);
            point(x+14, y+10);
            
            point(x+15, y+5);
            point(x+15, y+6);
            point(x+15, y+7);
            point(x+15, y+8);
            point(x+15, y+9);
            
            stroke(150);
            point(x+1, y+5);
            point(x+1, y+6);
            point(x+1, y+7);
            point(x+1, y+8);
            point(x+1, y+9);
            point(x+2, y+5);
            point(x+3, y+5);
            point(x+4, y+5);
            point(x+5, y+5);
            point(x+6, y+5);
            point(x+7, y+5);
            point(x+8, y+5);
            point(x+9, y+5);
            point(x+10, y+5);
            point(x+11, y+5);
            point(x+12, y+5);
            point(x+13, y+5);
            point(x+14, y+5);
            point(x+3, y+11);
            point(x+4, y+11);
            point(x+5, y+11);
            point(x+6, y+11);
            point(x+7, y+11);
            point(x+8, y+11);
            point(x+9, y+11);
            point(x+10, y+11);
            point(x+11, y+11);
            point(x+12, y+11);
            
            point(x+2, y+6);
            point(x+2, y+7);
            point(x+2, y+8);
            point(x+2, y+9);
            point(x+2, y+10);
            point(x+3, y+6);
            point(x+3, y+7);
            point(x+3, y+8);
            point(x+3, y+9);
            point(x+3, y+10);
            point(x+4, y+6);
            point(x+4, y+7);
            point(x+4, y+8);
            point(x+4, y+9);
            point(x+4, y+10);
            point(x+5, y+6);
            point(x+5, y+7);
            point(x+5, y+8);
            point(x+5, y+9);
            point(x+5, y+10);
            point(x+6, y+6);
            point(x+6, y+7);
            point(x+6, y+8);
            point(x+6, y+9);
            point(x+6, y+10);
            point(x+7, y+6);
            point(x+7, y+7);
            point(x+7, y+8);
            point(x+7, y+9);
            point(x+7, y+10);
            point(x+8, y+6);
            point(x+8, y+7);
            point(x+8, y+8);
            point(x+8, y+9);
            point(x+8, y+10);
            point(x+9, y+6);
            point(x+9, y+7);
            point(x+9, y+8);
            point(x+9, y+9);
            point(x+9, y+10);
            point(x+10, y+6);
            point(x+10, y+7);
            point(x+10, y+8);
            point(x+10, y+9);
            point(x+10, y+10);
            point(x+11, y+6);
            point(x+11, y+7);
            point(x+11, y+8);
            point(x+11, y+9);
            point(x+11, y+10);
            point(x+12, y+6);
            point(x+12, y+7);
            point(x+12, y+8);
            point(x+12, y+9);
            point(x+12, y+10);
            point(x+13, y+6);
            point(x+13, y+7);
            point(x+13, y+8);
            point(x+13, y+9);
            point(x+13, y+10);
            point(x+14, y+6);
            point(x+14, y+7);
            point(x+14, y+8);
            point(x+14, y+9);
    
        };
        var face = function(x, y) {
            //L eye
            stroke(255);
            point(x+4, y+6);
            stroke(0);
            point(x+4, y+7);
            point(x+5, y+6);
            point(x+5, y+7);
            
            //R eye
            stroke(255);
            point(x+11, y+6);
            stroke(0);
            point(x+11, y+7);
            point(x+12, y+6);
            point(x+12, y+7);
            
            //nose
            stroke(0);
            point(x+9, y+7);
            
            //mouth
            stroke(0);
            point(x+5, y+9);
            point(x+8, y+9);
            point(x+11, y+9);
            point(x+5, y+10);
            point(x+6, y+10);
            point(x+7, y+10);
            point(x+8, y+10);
            point(x+9, y+10);
            point(x+10, y+10);
            point(x+11, y+10);
            
            //cheek
            stroke(255, 200, 200);
            point(x+2, y+8);
            point(x+2, y+9);
            point(x+3, y+8);
            point(x+3, y+9);
            point(x+13, y+8);
            point(x+13, y+9);
            point(x+14, y+8);
            point(x+14, y+9);
        };
        var head = function(x, y) {
            earL(x, y);
            earR(x, y);
            neck(x, y);
            face(x, y);
        };
        
        var tart = function(x, y) {
            stroke(0);
            rect(x, y+2, 20, 13);
            rect(x+2, y, 16, 17);
            
            stroke(255, 200, 150);
            rect(x+1, y+1, 18, 15);
            rect(x+2, y+2, 16, 13);
            
            stroke(255, 200, 250);
            point(x+4, y+2);
            point(x+5, y+2);
            point(x+6, y+2);
            point(x+7, y+2);
            point(x+8, y+2);
            point(x+9, y+2);
            point(x+10, y+2);
            point(x+11, y+2);
            point(x+12, y+2);
            point(x+13, y+2);
            point(x+14, y+2);
            point(x+15, y+2);
            point(x+16, y+2);
            point(x+4, y+15);
            point(x+5, y+15);
            point(x+6, y+15);
            point(x+7, y+15);
            point(x+8, y+15);
            point(x+9, y+15);
            point(x+10, y+15);
            point(x+11, y+15);
            point(x+12, y+15);
            point(x+13, y+15);
            point(x+14, y+15);
            point(x+15, y+15);
            point(x+16, y+15);
            
            point(x+2, y+4);
            point(x+2, y+5);
            point(x+2, y+6);
            point(x+2, y+7);
            point(x+2, y+8);
            point(x+2, y+9);
            point(x+2, y+10);
            point(x+2, y+11);
            point(x+2, y+12);
            point(x+2, y+13);
            point(x+18, y+4);
            point(x+18, y+5);
            point(x+18, y+6);
            point(x+18, y+7);
            point(x+18, y+8);
            point(x+18, y+9);
            point(x+18, y+10);
            point(x+18, y+11);
            point(x+18, y+12);
            point(x+18, y+13);
            
            rect(x+3, y+3, 14, 11);
            rect(x+4, y+4, 12, 9);
            rect(x+5, y+5, 10, 7);
            rect(x+6, y+6, 8, 5);
            rect(x+7, y+7, 6, 3);
            rect(x+8, y+8, 4, 1);
            
            stroke(0);
            point(x+1, y+1);
            point(x+19, y+1);
            point(x+1, y+16);
            point(x+19, y+16);
            
            stroke(255, 10, 200);
            point(x+3, y+11);
            point(x+4, y+4);
            point(x+4, y+14);
            point(x+5, y+9);
            point(x+7, y+13);
            point(x+8, y+7);
            point(x+9, y+10);
            point(x+9, y+3);
            point(x+11, y+14);
            point(x+12, y+3);
            point(x+16, y+5);
        };
        var paws = function(x, y) {
            //front
            stroke(0);
            point(x+19, y+18);
            point(x+20, y+19);
            point(x+21, y+19);
            point(x+22, y+18);
            point(x+22, y+19);
            
            stroke(150);
            point(x+21, y+18);
            point(x+20, y+18);
            
            stroke(0);
            point(x+19 -5, y+18);
            point(x+20 -5, y+19);
            point(x+21 -5, y+19);
            point(x+22 -5, y+18);
            point(x+22 -5, y+19);
            
            stroke(150);
            point(x+21 -5, y+18);
            point(x+20 -5, y+18);
            
            //back
            stroke(0);
            point(x+4, y+18);
            point(x+5, y+19);
            point(x+6, y+19);
            point(x+7, y+18);
            point(x+7, y+19);
            
            stroke(150);
            point(x+6, y+18);
            point(x+5, y+18);
            
            stroke(0);
            point(x+4 -5, y+18);
            point(x+5 -5, y+19);
            point(x+6 -5, y+19);
            point(x+0, y+16);
            point(x+7 -5, y+18);
            point(x+7 -8, y+19);
            point(x-1, y+17);
            
            stroke(150);
            point(x+6 -5, y+17);
            point(x+5 -5, y+17);
            point(x+6 -5, y+18);
            point(x+5 -5, y+18);
        };
        var tail = function(x, y) {
            stroke(0);
            point(x-1, y+10);
            point(x-2, y+10);
            point(x-3, y+10);
            point(x-3, y+9);
            point(x-4, y+8);
            point(x-5, y+8);
            point(x-6, y+9);
            point(x-6, y+10);
            point(x-5, y+11);
            point(x-4, y+12);
            point(x-3, y+12);
            point(x-2, y+13);
            point(x-1, y+13);
            
            stroke(150);
            point(x-5, y+9);
            point(x-5, y+10);
            point(x-4, y+9);
            point(x-4, y+10);
            point(x-4, y+11);
            point(x-2, y+11);
            point(x-2, y+12);
            point(x-3, y+11);
            point(x-1, y+11);
            point(x-1, y+12);
        };
        var body = function(x, y) {
            tart(x, y);
            paws(x, y);
            tail(x, y);
        };
        
        var full = function() {
            pushMatrix();
            scale(s);
            noFill();
            body(x-11, y-11);
            head(x, y-6);
            
            stroke(255, 0, 0);
            //point(x, y);
            popMatrix();
        }();
    },
    nyan2: function(x,y,s) {
        x=x/s;y=y/s;
        var earL = function(x, y) {
            stroke(0);
            point(x+1, y+4);
            point(x+1, y+3);
            point(x+1, y+2);
            point(x+1, y+1);
            point(x+2, y+0);
            point(x+3, y+0);
            point(x+4, y+1);
            point(x+5, y+2);
            
            stroke(150);
            point(x+2, y+4);
            point(x+2, y+3);
            point(x+2, y+2);
            point(x+2, y+1);
            point(x+3, y+1);
            point(x+3, y+2);
            point(x+3, y+3);
            point(x+3, y+4);
            point(x+4, y+2);
            point(x+4, y+3);
            point(x+4, y+4);
            point(x+5, y+3);
            point(x+5, y+4);
            point(x+6, y+4);
            point(x+7, y+4);
            
            stroke(0);
            point(x+6, y+3);
            point(x+7, y+3);
        };
        var earR = function(x, y) {
            stroke(0);
            point(x+10, y+2);
            point(x+11, y+1);
            point(x+12, y+0);
            point(x+13, y+0);
            point(x+14, y+1);
            point(x+14, y+2);
            point(x+14, y+3);
            point(x+14, y+4);
            
            stroke(150);
            point(x+8, y+4);
            point(x+9, y+4);
            point(x+10, y+3);
            point(x+10, y+4);
            point(x+11, y+2);
            point(x+11, y+3);
            point(x+11, y+4);
            point(x+12, y+1);
            point(x+12, y+2);
            point(x+12, y+3);
            point(x+12, y+4);
            point(x+13, y+1);
            point(x+13, y+2);
            point(x+13, y+3);
            point(x+13, y+4);
    
            stroke(0);
            point(x+8, y+3);
            point(x+9, y+3);
        };
        var neck = function(x, y) {
            stroke(0);
            point(x+0, y+5);
            point(x+0, y+6);
            point(x+0, y+7);
            point(x+0, y+8);
            point(x+0, y+9);
            
            point(x+1, y+10);
            point(x+2, y+11);
            
            point(x+3, y+12);
            point(x+4, y+12);
            point(x+5, y+12);
            point(x+6, y+12);
            point(x+7, y+12);
            point(x+8, y+12);
            point(x+9, y+12);
            point(x+10, y+12);
            point(x+11, y+12);
            point(x+12, y+12);
            
            point(x+13, y+11);
            point(x+14, y+10);
            
            point(x+15, y+5);
            point(x+15, y+6);
            point(x+15, y+7);
            point(x+15, y+8);
            point(x+15, y+9);
            
            stroke(150);
            point(x+1, y+5);
            point(x+1, y+6);
            point(x+1, y+7);
            point(x+1, y+8);
            point(x+1, y+9);
            point(x+2, y+5);
            point(x+3, y+5);
            point(x+4, y+5);
            point(x+5, y+5);
            point(x+6, y+5);
            point(x+7, y+5);
            point(x+8, y+5);
            point(x+9, y+5);
            point(x+10, y+5);
            point(x+11, y+5);
            point(x+12, y+5);
            point(x+13, y+5);
            point(x+14, y+5);
            point(x+3, y+11);
            point(x+4, y+11);
            point(x+5, y+11);
            point(x+6, y+11);
            point(x+7, y+11);
            point(x+8, y+11);
            point(x+9, y+11);
            point(x+10, y+11);
            point(x+11, y+11);
            point(x+12, y+11);
            
            point(x+2, y+6);
            point(x+2, y+7);
            point(x+2, y+8);
            point(x+2, y+9);
            point(x+2, y+10);
            point(x+3, y+6);
            point(x+3, y+7);
            point(x+3, y+8);
            point(x+3, y+9);
            point(x+3, y+10);
            point(x+4, y+6);
            point(x+4, y+7);
            point(x+4, y+8);
            point(x+4, y+9);
            point(x+4, y+10);
            point(x+5, y+6);
            point(x+5, y+7);
            point(x+5, y+8);
            point(x+5, y+9);
            point(x+5, y+10);
            point(x+6, y+6);
            point(x+6, y+7);
            point(x+6, y+8);
            point(x+6, y+9);
            point(x+6, y+10);
            point(x+7, y+6);
            point(x+7, y+7);
            point(x+7, y+8);
            point(x+7, y+9);
            point(x+7, y+10);
            point(x+8, y+6);
            point(x+8, y+7);
            point(x+8, y+8);
            point(x+8, y+9);
            point(x+8, y+10);
            point(x+9, y+6);
            point(x+9, y+7);
            point(x+9, y+8);
            point(x+9, y+9);
            point(x+9, y+10);
            point(x+10, y+6);
            point(x+10, y+7);
            point(x+10, y+8);
            point(x+10, y+9);
            point(x+10, y+10);
            point(x+11, y+6);
            point(x+11, y+7);
            point(x+11, y+8);
            point(x+11, y+9);
            point(x+11, y+10);
            point(x+12, y+6);
            point(x+12, y+7);
            point(x+12, y+8);
            point(x+12, y+9);
            point(x+12, y+10);
            point(x+13, y+6);
            point(x+13, y+7);
            point(x+13, y+8);
            point(x+13, y+9);
            point(x+13, y+10);
            point(x+14, y+6);
            point(x+14, y+7);
            point(x+14, y+8);
            point(x+14, y+9);
    
        };
        var face = function(x, y) {
            //L eye
            stroke(255);
            point(x+4, y+6);
            stroke(0);
            point(x+4, y+7);
            point(x+5, y+6);
            point(x+5, y+7);
            
            //R eye
            stroke(255);
            point(x+11, y+6);
            stroke(0);
            point(x+11, y+7);
            point(x+12, y+6);
            point(x+12, y+7);
            
            //nose
            stroke(0);
            point(x+9, y+7);
            
            //mouth
            stroke(0);
            point(x+5, y+9);
            point(x+8, y+9);
            point(x+11, y+9);
            point(x+5, y+10);
            point(x+6, y+10);
            point(x+7, y+10);
            point(x+8, y+10);
            point(x+9, y+10);
            point(x+10, y+10);
            point(x+11, y+10);
            
            //cheek
            stroke(255, 200, 200);
            point(x+2, y+8);
            point(x+2, y+9);
            point(x+3, y+8);
            point(x+3, y+9);
            point(x+13, y+8);
            point(x+13, y+9);
            point(x+14, y+8);
            point(x+14, y+9);
        };
        var head = function(x, y) {
            earL(x, y);
            earR(x, y);
            neck(x, y);
            face(x, y);
        };
        
        var tart = function(x, y) {
            stroke(0);
            rect(x, y+2, 20, 13);
            rect(x+2, y, 16, 17);
            
            stroke(255, 200, 150);
            rect(x+1, y+1, 18, 15);
            rect(x+2, y+2, 16, 13);
            
            stroke(255, 200, 250);
            point(x+4, y+2);
            point(x+5, y+2);
            point(x+6, y+2);
            point(x+7, y+2);
            point(x+8, y+2);
            point(x+9, y+2);
            point(x+10, y+2);
            point(x+11, y+2);
            point(x+12, y+2);
            point(x+13, y+2);
            point(x+14, y+2);
            point(x+15, y+2);
            point(x+16, y+2);
            point(x+4, y+15);
            point(x+5, y+15);
            point(x+6, y+15);
            point(x+7, y+15);
            point(x+8, y+15);
            point(x+9, y+15);
            point(x+10, y+15);
            point(x+11, y+15);
            point(x+12, y+15);
            point(x+13, y+15);
            point(x+14, y+15);
            point(x+15, y+15);
            point(x+16, y+15);
            
            point(x+2, y+4);
            point(x+2, y+5);
            point(x+2, y+6);
            point(x+2, y+7);
            point(x+2, y+8);
            point(x+2, y+9);
            point(x+2, y+10);
            point(x+2, y+11);
            point(x+2, y+12);
            point(x+2, y+13);
            point(x+18, y+4);
            point(x+18, y+5);
            point(x+18, y+6);
            point(x+18, y+7);
            point(x+18, y+8);
            point(x+18, y+9);
            point(x+18, y+10);
            point(x+18, y+11);
            point(x+18, y+12);
            point(x+18, y+13);
            
            rect(x+3, y+3, 14, 11);
            rect(x+4, y+4, 12, 9);
            rect(x+5, y+5, 10, 7);
            rect(x+6, y+6, 8, 5);
            rect(x+7, y+7, 6, 3);
            rect(x+8, y+8, 4, 1);
            
            stroke(0);
            point(x+1, y+1);
            point(x+19, y+1);
            point(x+1, y+16);
            point(x+19, y+16);
            
            stroke(255, 10, 200);
            point(x+3, y+11);
            point(x+4, y+4);
            point(x+4, y+14);
            point(x+5, y+9);
            point(x+7, y+13);
            point(x+8, y+7);
            point(x+9, y+10);
            point(x+9, y+3);
            point(x+11, y+14);
            point(x+12, y+3);
            point(x+16, y+5);
        };
        var paws = function(x, y) {
            //front
            stroke(0);
            point(x+19 +1, y+18);
            point(x+20 +1, y+19);
            point(x+21 +1, y+19);
            point(x+22 +1, y+18);
            point(x+22 +1, y+19);
            
            stroke(150);
            point(x+21 +1, y+18);
            point(x+20 +1, y+18);
            
            stroke(0);
            point(x+19 +1 -5, y+18);
            point(x+20 +1 -5, y+19);
            point(x+21 +1 -5, y+19);
            point(x+22 +1 -5, y+18);
            point(x+22 +1 -5, y+19);
            
            stroke(150);
            point(x+21 +1 -5, y+18);
            point(x+20 +1 -5, y+18);
            
            //back
            stroke(0);
            point(x+4 +1, y+18);
            point(x+5 +1, y+19);
            point(x+6 +1, y+19);
            point(x+7 +1, y+18);
            point(x+7 +1, y+19);
            
            stroke(150);
            point(x+6 +1, y+18);
            point(x+5 +1, y+18);
            
            stroke(0);
            point(x+4 +1 -5, y+18);
            point(x+5 +1 -5, y+19);
            point(x+6 +1 -5, y+19);
            point(x+0, y+16);
            point(x+7 +1 -5, y+18);
            point(x+7 +1 -8, y+19);
            point(x-1 +1, y+17);
            
            stroke(150);
            point(x+6 +1 -5, y+17);
            point(x+5 +1 -5, y+17);
            point(x+6 +1 -5, y+18);
            point(x+5 +1 -5, y+18);
        };
        var tail = function(x, y) {
            stroke(0);
            point(x-1, y+10);
            point(x-2, y+11);
            point(x-3, y+11);
            point(x-4, y+11);
            point(x-5, y+12);
            point(x-6, y+12);
            point(x-6, y+13);
            point(x-5, y+14);
            point(x-4, y+14);
            point(x-3, y+14);
            point(x-2, y+14);
            point(x-2, y+13);
            point(x-1, y+13);
            
            stroke(150);
            point(x-1, y+11);
            point(x-1, y+12);
            point(x-2, y+12);
            point(x-3, y+12);
            point(x-3, y+13);
            point(x-4, y+12);
            point(x-4, y+13);
            point(x-5, y+13);
        };
        var body = function(x, y) {
            tart(x, y);
            paws(x, y);
            tail(x, y);
        };
        
        var full = function() {
            pushMatrix();
            scale(s);
            noFill();
            body(x-11, y-11);
            head(x, y-6);
            
            stroke(255, 0, 0);
            //point(x, y);
            popMatrix();
        }();
    },
    nyan3: function(x,y,s) {
        x=x/s;y=y/s;
        var earL = function(x, y) {
            stroke(0);
            point(x+1, y+4);
            point(x+1, y+3);
            point(x+1, y+2);
            point(x+1, y+1);
            point(x+2, y+0);
            point(x+3, y+0);
            point(x+4, y+1);
            point(x+5, y+2);
            
            stroke(150);
            point(x+2, y+4);
            point(x+2, y+3);
            point(x+2, y+2);
            point(x+2, y+1);
            point(x+3, y+1);
            point(x+3, y+2);
            point(x+3, y+3);
            point(x+3, y+4);
            point(x+4, y+2);
            point(x+4, y+3);
            point(x+4, y+4);
            point(x+5, y+3);
            point(x+5, y+4);
            point(x+6, y+4);
            point(x+7, y+4);
            
            stroke(0);
            point(x+6, y+3);
            point(x+7, y+3);
        };
        var earR = function(x, y) {
            stroke(0);
            point(x+10, y+2);
            point(x+11, y+1);
            point(x+12, y+0);
            point(x+13, y+0);
            point(x+14, y+1);
            point(x+14, y+2);
            point(x+14, y+3);
            point(x+14, y+4);
            
            stroke(150);
            point(x+8, y+4);
            point(x+9, y+4);
            point(x+10, y+3);
            point(x+10, y+4);
            point(x+11, y+2);
            point(x+11, y+3);
            point(x+11, y+4);
            point(x+12, y+1);
            point(x+12, y+2);
            point(x+12, y+3);
            point(x+12, y+4);
            point(x+13, y+1);
            point(x+13, y+2);
            point(x+13, y+3);
            point(x+13, y+4);
    
            stroke(0);
            point(x+8, y+3);
            point(x+9, y+3);
        };
        var neck = function(x, y) {
            stroke(0);
            point(x+0, y+5);
            point(x+0, y+6);
            point(x+0, y+7);
            point(x+0, y+8);
            point(x+0, y+9);
            
            point(x+1, y+10);
            point(x+2, y+11);
            
            point(x+3, y+12);
            point(x+4, y+12);
            point(x+5, y+12);
            point(x+6, y+12);
            point(x+7, y+12);
            point(x+8, y+12);
            point(x+9, y+12);
            point(x+10, y+12);
            point(x+11, y+12);
            point(x+12, y+12);
            
            point(x+13, y+11);
            point(x+14, y+10);
            
            point(x+15, y+5);
            point(x+15, y+6);
            point(x+15, y+7);
            point(x+15, y+8);
            point(x+15, y+9);
            
            stroke(150);
            point(x+1, y+5);
            point(x+1, y+6);
            point(x+1, y+7);
            point(x+1, y+8);
            point(x+1, y+9);
            point(x+2, y+5);
            point(x+3, y+5);
            point(x+4, y+5);
            point(x+5, y+5);
            point(x+6, y+5);
            point(x+7, y+5);
            point(x+8, y+5);
            point(x+9, y+5);
            point(x+10, y+5);
            point(x+11, y+5);
            point(x+12, y+5);
            point(x+13, y+5);
            point(x+14, y+5);
            point(x+3, y+11);
            point(x+4, y+11);
            point(x+5, y+11);
            point(x+6, y+11);
            point(x+7, y+11);
            point(x+8, y+11);
            point(x+9, y+11);
            point(x+10, y+11);
            point(x+11, y+11);
            point(x+12, y+11);
            
            point(x+2, y+6);
            point(x+2, y+7);
            point(x+2, y+8);
            point(x+2, y+9);
            point(x+2, y+10);
            point(x+3, y+6);
            point(x+3, y+7);
            point(x+3, y+8);
            point(x+3, y+9);
            point(x+3, y+10);
            point(x+4, y+6);
            point(x+4, y+7);
            point(x+4, y+8);
            point(x+4, y+9);
            point(x+4, y+10);
            point(x+5, y+6);
            point(x+5, y+7);
            point(x+5, y+8);
            point(x+5, y+9);
            point(x+5, y+10);
            point(x+6, y+6);
            point(x+6, y+7);
            point(x+6, y+8);
            point(x+6, y+9);
            point(x+6, y+10);
            point(x+7, y+6);
            point(x+7, y+7);
            point(x+7, y+8);
            point(x+7, y+9);
            point(x+7, y+10);
            point(x+8, y+6);
            point(x+8, y+7);
            point(x+8, y+8);
            point(x+8, y+9);
            point(x+8, y+10);
            point(x+9, y+6);
            point(x+9, y+7);
            point(x+9, y+8);
            point(x+9, y+9);
            point(x+9, y+10);
            point(x+10, y+6);
            point(x+10, y+7);
            point(x+10, y+8);
            point(x+10, y+9);
            point(x+10, y+10);
            point(x+11, y+6);
            point(x+11, y+7);
            point(x+11, y+8);
            point(x+11, y+9);
            point(x+11, y+10);
            point(x+12, y+6);
            point(x+12, y+7);
            point(x+12, y+8);
            point(x+12, y+9);
            point(x+12, y+10);
            point(x+13, y+6);
            point(x+13, y+7);
            point(x+13, y+8);
            point(x+13, y+9);
            point(x+13, y+10);
            point(x+14, y+6);
            point(x+14, y+7);
            point(x+14, y+8);
            point(x+14, y+9);
    
        };
        var face = function(x, y) {
            //L eye
            stroke(255);
            point(x+4, y+6);
            stroke(0);
            point(x+4, y+7);
            point(x+5, y+6);
            point(x+5, y+7);
            
            //R eye
            stroke(255);
            point(x+11, y+6);
            stroke(0);
            point(x+11, y+7);
            point(x+12, y+6);
            point(x+12, y+7);
            
            //nose
            stroke(0);
            point(x+9, y+7);
            
            //mouth
            stroke(0);
            point(x+5, y+9);
            point(x+8, y+9);
            point(x+11, y+9);
            point(x+5, y+10);
            point(x+6, y+10);
            point(x+7, y+10);
            point(x+8, y+10);
            point(x+9, y+10);
            point(x+10, y+10);
            point(x+11, y+10);
            
            //cheek
            stroke(255, 200, 200);
            point(x+2, y+8);
            point(x+2, y+9);
            point(x+3, y+8);
            point(x+3, y+9);
            point(x+13, y+8);
            point(x+13, y+9);
            point(x+14, y+8);
            point(x+14, y+9);
        };
        var head = function(x, y) {
            earL(x, y);
            earR(x, y);
            neck(x, y);
            face(x, y);
        };
        
        var tart = function(x, y) {
            stroke(0);
            rect(x, y+2, 20, 13);
            rect(x+2, y, 16, 17);
            
            stroke(255, 200, 150);
            rect(x+1, y+1, 18, 15);
            rect(x+2, y+2, 16, 13);
            
            stroke(255, 200, 250);
            point(x+4, y+2);
            point(x+5, y+2);
            point(x+6, y+2);
            point(x+7, y+2);
            point(x+8, y+2);
            point(x+9, y+2);
            point(x+10, y+2);
            point(x+11, y+2);
            point(x+12, y+2);
            point(x+13, y+2);
            point(x+14, y+2);
            point(x+15, y+2);
            point(x+16, y+2);
            point(x+4, y+15);
            point(x+5, y+15);
            point(x+6, y+15);
            point(x+7, y+15);
            point(x+8, y+15);
            point(x+9, y+15);
            point(x+10, y+15);
            point(x+11, y+15);
            point(x+12, y+15);
            point(x+13, y+15);
            point(x+14, y+15);
            point(x+15, y+15);
            point(x+16, y+15);
            
            point(x+2, y+4);
            point(x+2, y+5);
            point(x+2, y+6);
            point(x+2, y+7);
            point(x+2, y+8);
            point(x+2, y+9);
            point(x+2, y+10);
            point(x+2, y+11);
            point(x+2, y+12);
            point(x+2, y+13);
            point(x+18, y+4);
            point(x+18, y+5);
            point(x+18, y+6);
            point(x+18, y+7);
            point(x+18, y+8);
            point(x+18, y+9);
            point(x+18, y+10);
            point(x+18, y+11);
            point(x+18, y+12);
            point(x+18, y+13);
            
            rect(x+3, y+3, 14, 11);
            rect(x+4, y+4, 12, 9);
            rect(x+5, y+5, 10, 7);
            rect(x+6, y+6, 8, 5);
            rect(x+7, y+7, 6, 3);
            rect(x+8, y+8, 4, 1);
            
            stroke(0);
            point(x+1, y+1);
            point(x+19, y+1);
            point(x+1, y+16);
            point(x+19, y+16);
            
            stroke(255, 10, 200);
            point(x+3, y+11);
            point(x+4, y+4);
            point(x+4, y+14);
            point(x+5, y+9);
            point(x+7, y+13);
            point(x+8, y+7);
            point(x+9, y+10);
            point(x+9, y+3);
            point(x+11, y+14);
            point(x+12, y+3);
            point(x+16, y+5);
        };
        var paws = function(x, y) {
            //front
            stroke(0);
            point(x+19, y+18);
            point(x+20, y+19);
            point(x+21, y+19);
            point(x+22, y+18);
            point(x+22, y+19);
            
            stroke(150);
            point(x+21, y+18);
            point(x+20, y+18);
            
            stroke(0);
            point(x+19 -5, y+18);
            point(x+20 -5, y+19);
            point(x+21 -5, y+19);
            point(x+22 -5, y+18);
            point(x+22 -5, y+19);
            
            stroke(150);
            point(x+21 -5, y+18);
            point(x+20 -5, y+18);
            
            //back
            stroke(0);
            point(x+4, y+18);
            point(x+5, y+19);
            point(x+6, y+19);
            point(x+7, y+18);
            point(x+7, y+19);
            
            stroke(150);
            point(x+6, y+18);
            point(x+5, y+18);
            
            stroke(0);
            point(x+4 -5, y+18);
            point(x+5 -5, y+19);
            point(x+6 -5, y+19);
            point(x+0, y+16);
            point(x+7 -5, y+18);
            point(x+7 -8, y+19);
            point(x-1, y+17);
            
            stroke(150);
            point(x+6 -5, y+17);
            point(x+5 -5, y+17);
            point(x+6 -5, y+18);
            point(x+5 -5, y+18);
        };
        var tail = function(x, y) {
            stroke(0);
            point(x-1, y+10);
            point(x-2, y+10);
            point(x-3, y+11);
            point(x-4, y+11);
            point(x-5, y+12);
            point(x-6, y+13);
            point(x-6, y+14);
            point(x-5, y+15);
            point(x-4, y+15);
            point(x-3, y+13);
            point(x-3, y+14);
            point(x-2, y+13);
            point(x-1, y+13);
            
            stroke(150);
            point(x-1, y+11);
            point(x-1, y+12);
            point(x-2, y+11);
            point(x-2, y+12);
            point(x-3, y+12);
            point(x-4, y+12);
            point(x-4, y+13);
            point(x-4, y+14);
            point(x-5, y+13);
            point(x-5, y+14);
        };
        var body = function(x, y) {
            tart(x, y);
            paws(x, y);
            tail(x, y);
        };
        
        var full = function() {
            pushMatrix();
            scale(s);
            noFill();
            body(x-11, y-11);
            head(x, y-6);
            
            stroke(255, 0, 0);
            //point(x, y);
            popMatrix();
        }();
    },
    nyan4: function(x,y,s) {
        x=x/s;y=y/s;
        var earL = function(x, y) {
            stroke(0);
            point(x+1, y+4);
            point(x+1, y+3);
            point(x+1, y+2);
            point(x+1, y+1);
            point(x+2, y+0);
            point(x+3, y+0);
            point(x+4, y+1);
            point(x+5, y+2);
            
            stroke(150);
            point(x+2, y+4);
            point(x+2, y+3);
            point(x+2, y+2);
            point(x+2, y+1);
            point(x+3, y+1);
            point(x+3, y+2);
            point(x+3, y+3);
            point(x+3, y+4);
            point(x+4, y+2);
            point(x+4, y+3);
            point(x+4, y+4);
            point(x+5, y+3);
            point(x+5, y+4);
            point(x+6, y+4);
            point(x+7, y+4);
            
            stroke(0);
            point(x+6, y+3);
            point(x+7, y+3);
        };
        var earR = function(x, y) {
            stroke(0);
            point(x+10, y+2);
            point(x+11, y+1);
            point(x+12, y+0);
            point(x+13, y+0);
            point(x+14, y+1);
            point(x+14, y+2);
            point(x+14, y+3);
            point(x+14, y+4);
            
            stroke(150);
            point(x+8, y+4);
            point(x+9, y+4);
            point(x+10, y+3);
            point(x+10, y+4);
            point(x+11, y+2);
            point(x+11, y+3);
            point(x+11, y+4);
            point(x+12, y+1);
            point(x+12, y+2);
            point(x+12, y+3);
            point(x+12, y+4);
            point(x+13, y+1);
            point(x+13, y+2);
            point(x+13, y+3);
            point(x+13, y+4);
    
            stroke(0);
            point(x+8, y+3);
            point(x+9, y+3);
        };
        var neck = function(x, y) {
            stroke(0);
            point(x+0, y+5);
            point(x+0, y+6);
            point(x+0, y+7);
            point(x+0, y+8);
            point(x+0, y+9);
            
            point(x+1, y+10);
            point(x+2, y+11);
            
            point(x+3, y+12);
            point(x+4, y+12);
            point(x+5, y+12);
            point(x+6, y+12);
            point(x+7, y+12);
            point(x+8, y+12);
            point(x+9, y+12);
            point(x+10, y+12);
            point(x+11, y+12);
            point(x+12, y+12);
            
            point(x+13, y+11);
            point(x+14, y+10);
            
            point(x+15, y+5);
            point(x+15, y+6);
            point(x+15, y+7);
            point(x+15, y+8);
            point(x+15, y+9);
            
            stroke(150);
            point(x+1, y+5);
            point(x+1, y+6);
            point(x+1, y+7);
            point(x+1, y+8);
            point(x+1, y+9);
            point(x+2, y+5);
            point(x+3, y+5);
            point(x+4, y+5);
            point(x+5, y+5);
            point(x+6, y+5);
            point(x+7, y+5);
            point(x+8, y+5);
            point(x+9, y+5);
            point(x+10, y+5);
            point(x+11, y+5);
            point(x+12, y+5);
            point(x+13, y+5);
            point(x+14, y+5);
            point(x+3, y+11);
            point(x+4, y+11);
            point(x+5, y+11);
            point(x+6, y+11);
            point(x+7, y+11);
            point(x+8, y+11);
            point(x+9, y+11);
            point(x+10, y+11);
            point(x+11, y+11);
            point(x+12, y+11);
            
            point(x+2, y+6);
            point(x+2, y+7);
            point(x+2, y+8);
            point(x+2, y+9);
            point(x+2, y+10);
            point(x+3, y+6);
            point(x+3, y+7);
            point(x+3, y+8);
            point(x+3, y+9);
            point(x+3, y+10);
            point(x+4, y+6);
            point(x+4, y+7);
            point(x+4, y+8);
            point(x+4, y+9);
            point(x+4, y+10);
            point(x+5, y+6);
            point(x+5, y+7);
            point(x+5, y+8);
            point(x+5, y+9);
            point(x+5, y+10);
            point(x+6, y+6);
            point(x+6, y+7);
            point(x+6, y+8);
            point(x+6, y+9);
            point(x+6, y+10);
            point(x+7, y+6);
            point(x+7, y+7);
            point(x+7, y+8);
            point(x+7, y+9);
            point(x+7, y+10);
            point(x+8, y+6);
            point(x+8, y+7);
            point(x+8, y+8);
            point(x+8, y+9);
            point(x+8, y+10);
            point(x+9, y+6);
            point(x+9, y+7);
            point(x+9, y+8);
            point(x+9, y+9);
            point(x+9, y+10);
            point(x+10, y+6);
            point(x+10, y+7);
            point(x+10, y+8);
            point(x+10, y+9);
            point(x+10, y+10);
            point(x+11, y+6);
            point(x+11, y+7);
            point(x+11, y+8);
            point(x+11, y+9);
            point(x+11, y+10);
            point(x+12, y+6);
            point(x+12, y+7);
            point(x+12, y+8);
            point(x+12, y+9);
            point(x+12, y+10);
            point(x+13, y+6);
            point(x+13, y+7);
            point(x+13, y+8);
            point(x+13, y+9);
            point(x+13, y+10);
            point(x+14, y+6);
            point(x+14, y+7);
            point(x+14, y+8);
            point(x+14, y+9);
    
        };
        var face = function(x, y) {
            //L eye
            stroke(255);
            point(x+4, y+6);
            stroke(0);
            point(x+4, y+7);
            point(x+5, y+6);
            point(x+5, y+7);
            
            //R eye
            stroke(255);
            point(x+11, y+6);
            stroke(0);
            point(x+11, y+7);
            point(x+12, y+6);
            point(x+12, y+7);
            
            //nose
            stroke(0);
            point(x+9, y+7);
            
            //mouth
            stroke(0);
            point(x+5, y+9);
            point(x+8, y+9);
            point(x+11, y+9);
            point(x+5, y+10);
            point(x+6, y+10);
            point(x+7, y+10);
            point(x+8, y+10);
            point(x+9, y+10);
            point(x+10, y+10);
            point(x+11, y+10);
            
            //cheek
            stroke(255, 200, 200);
            point(x+2, y+8);
            point(x+2, y+9);
            point(x+3, y+8);
            point(x+3, y+9);
            point(x+13, y+8);
            point(x+13, y+9);
            point(x+14, y+8);
            point(x+14, y+9);
        };
        var head = function(x, y) {
            earL(x, y);
            earR(x, y);
            neck(x, y);
            face(x, y);
        };
        
        var tart = function(x, y) {
            stroke(0);
            rect(x, y+2, 20, 13);
            rect(x+2, y, 16, 17);
            
            stroke(255, 200, 150);
            rect(x+1, y+1, 18, 15);
            rect(x+2, y+2, 16, 13);
            
            stroke(255, 200, 250);
            point(x+4, y+2);
            point(x+5, y+2);
            point(x+6, y+2);
            point(x+7, y+2);
            point(x+8, y+2);
            point(x+9, y+2);
            point(x+10, y+2);
            point(x+11, y+2);
            point(x+12, y+2);
            point(x+13, y+2);
            point(x+14, y+2);
            point(x+15, y+2);
            point(x+16, y+2);
            point(x+4, y+15);
            point(x+5, y+15);
            point(x+6, y+15);
            point(x+7, y+15);
            point(x+8, y+15);
            point(x+9, y+15);
            point(x+10, y+15);
            point(x+11, y+15);
            point(x+12, y+15);
            point(x+13, y+15);
            point(x+14, y+15);
            point(x+15, y+15);
            point(x+16, y+15);
            
            point(x+2, y+4);
            point(x+2, y+5);
            point(x+2, y+6);
            point(x+2, y+7);
            point(x+2, y+8);
            point(x+2, y+9);
            point(x+2, y+10);
            point(x+2, y+11);
            point(x+2, y+12);
            point(x+2, y+13);
            point(x+18, y+4);
            point(x+18, y+5);
            point(x+18, y+6);
            point(x+18, y+7);
            point(x+18, y+8);
            point(x+18, y+9);
            point(x+18, y+10);
            point(x+18, y+11);
            point(x+18, y+12);
            point(x+18, y+13);
            
            rect(x+3, y+3, 14, 11);
            rect(x+4, y+4, 12, 9);
            rect(x+5, y+5, 10, 7);
            rect(x+6, y+6, 8, 5);
            rect(x+7, y+7, 6, 3);
            rect(x+8, y+8, 4, 1);
            
            stroke(0);
            point(x+1, y+1);
            point(x+19, y+1);
            point(x+1, y+16);
            point(x+19, y+16);
            
            stroke(255, 10, 200);
            point(x+3, y+11);
            point(x+4, y+4);
            point(x+4, y+14);
            point(x+5, y+9);
            point(x+7, y+13);
            point(x+8, y+7);
            point(x+9, y+10);
            point(x+9, y+3);
            point(x+11, y+14);
            point(x+12, y+3);
            point(x+16, y+5);
        };
        var paws = function(x, y) {
            //front
            stroke(0);
            point(x+19 -1, y+18);
            point(x+20 -1, y+19);
            point(x+21 -1, y+19);
            point(x+22 -1, y+18);
            point(x+22 -1, y+19);
            
            stroke(150);
            point(x+21 -1, y+18);
            point(x+20 -1, y+18);
            
            stroke(0);
            point(x+19 -1 -5, y+18);
            point(x+20 -1 -5, y+19);
            point(x+21 -1 -5, y+19);
            point(x+22 -1 -5, y+18);
            point(x+22 -1 -5, y+19);
            
            stroke(150);
            point(x+21 -1 -5, y+18);
            point(x+20 -1 -5, y+18);
            
            //back
            stroke(0);
            point(x+4 -2, y+18);
            point(x+5 -2, y+19);
            point(x+6 -2, y+19);
            point(x+7 -2, y+18);
            point(x+7 -2, y+19);
            
            stroke(150);
            point(x+6 -2, y+18);
            point(x+5 -2, y+18);
            
            stroke(0);
            point(x+4 -2 -5, y+18);
            point(x+5 -2 -5, y+19);
            point(x+6 -2 -5, y+19);
            point(x+7 -2 -5, y+18);
            point(x+7 -2 -8, y+19);
            point(x+8 -2 -5, y+17);
            point(x-1 -2, y+17);
            point(x-1, y+15);
            point(x+0 -2, y+16);
            
            stroke(150);
            point(x+5 -2 -5, y+17);
            point(x+5 -2 -5, y+18);
            point(x+6 -2 -5, y+16);
            point(x+6 -2 -5, y+17);
            point(x+6 -2 -5, y+18);
            point(x+7 -2 -5, y+16);
            point(x+7 -2 -5, y+17);
        };
        var tail = function(x, y) {
            stroke(0);
            point(x-1, y+9);
            point(x-1, y+10);
            point(x-2, y+9);
            point(x-3, y+8);
            point(x-3, y+9);
            point(x-4, y+8);
            point(x-5, y+8);
            point(x-6, y+9);
            point(x-6, y+10);
            point(x-5, y+10);
            point(x-4, y+11);
            point(x-3, y+11);
            point(x-2, y+11);
            point(x-1, y+12);
            
            stroke(150);
            point(x-1, y+11);
            point(x-2, y+10);
            point(x-3, y+9);
            point(x-3, y+10);
            point(x-4, y+9);
            point(x-4, y+10);
            point(x-5, y+9);
        };
        var body = function(x, y) {
            tart(x, y);
            paws(x, y);
            tail(x, y);
        };
        
        var full = function() {
            pushMatrix();
            scale(s);
            noFill();
            body(x-11, y-11);
            head(x-1, y-6);
            
            stroke(255, 0, 0);
            //point(x, y);
            popMatrix();
        }();
    },
    nyan5: function(x,y,s) {
        x=x/s;y=y/s;
        var earL = function(x, y) {
            stroke(0);
            point(x+1, y+4);
            point(x+1, y+3);
            point(x+1, y+2);
            point(x+1, y+1);
            point(x+2, y+0);
            point(x+3, y+0);
            point(x+4, y+1);
            point(x+5, y+2);
            
            stroke(150);
            point(x+2, y+4);
            point(x+2, y+3);
            point(x+2, y+2);
            point(x+2, y+1);
            point(x+3, y+1);
            point(x+3, y+2);
            point(x+3, y+3);
            point(x+3, y+4);
            point(x+4, y+2);
            point(x+4, y+3);
            point(x+4, y+4);
            point(x+5, y+3);
            point(x+5, y+4);
            point(x+6, y+4);
            point(x+7, y+4);
            
            stroke(0);
            point(x+6, y+3);
            point(x+7, y+3);
        };
        var earR = function(x, y) {
            stroke(0);
            point(x+10, y+2);
            point(x+11, y+1);
            point(x+12, y+0);
            point(x+13, y+0);
            point(x+14, y+1);
            point(x+14, y+2);
            point(x+14, y+3);
            point(x+14, y+4);
            
            stroke(150);
            point(x+8, y+4);
            point(x+9, y+4);
            point(x+10, y+3);
            point(x+10, y+4);
            point(x+11, y+2);
            point(x+11, y+3);
            point(x+11, y+4);
            point(x+12, y+1);
            point(x+12, y+2);
            point(x+12, y+3);
            point(x+12, y+4);
            point(x+13, y+1);
            point(x+13, y+2);
            point(x+13, y+3);
            point(x+13, y+4);
    
            stroke(0);
            point(x+8, y+3);
            point(x+9, y+3);
        };
        var neck = function(x, y) {
            stroke(0);
            point(x+0, y+5);
            point(x+0, y+6);
            point(x+0, y+7);
            point(x+0, y+8);
            point(x+0, y+9);
            
            point(x+1, y+10);
            point(x+2, y+11);
            
            point(x+3, y+12);
            point(x+4, y+12);
            point(x+5, y+12);
            point(x+6, y+12);
            point(x+7, y+12);
            point(x+8, y+12);
            point(x+9, y+12);
            point(x+10, y+12);
            point(x+11, y+12);
            point(x+12, y+12);
            
            point(x+13, y+11);
            point(x+14, y+10);
            
            point(x+15, y+5);
            point(x+15, y+6);
            point(x+15, y+7);
            point(x+15, y+8);
            point(x+15, y+9);
            
            stroke(150);
            point(x+1, y+5);
            point(x+1, y+6);
            point(x+1, y+7);
            point(x+1, y+8);
            point(x+1, y+9);
            point(x+2, y+5);
            point(x+3, y+5);
            point(x+4, y+5);
            point(x+5, y+5);
            point(x+6, y+5);
            point(x+7, y+5);
            point(x+8, y+5);
            point(x+9, y+5);
            point(x+10, y+5);
            point(x+11, y+5);
            point(x+12, y+5);
            point(x+13, y+5);
            point(x+14, y+5);
            point(x+3, y+11);
            point(x+4, y+11);
            point(x+5, y+11);
            point(x+6, y+11);
            point(x+7, y+11);
            point(x+8, y+11);
            point(x+9, y+11);
            point(x+10, y+11);
            point(x+11, y+11);
            point(x+12, y+11);
            
            point(x+2, y+6);
            point(x+2, y+7);
            point(x+2, y+8);
            point(x+2, y+9);
            point(x+2, y+10);
            point(x+3, y+6);
            point(x+3, y+7);
            point(x+3, y+8);
            point(x+3, y+9);
            point(x+3, y+10);
            point(x+4, y+6);
            point(x+4, y+7);
            point(x+4, y+8);
            point(x+4, y+9);
            point(x+4, y+10);
            point(x+5, y+6);
            point(x+5, y+7);
            point(x+5, y+8);
            point(x+5, y+9);
            point(x+5, y+10);
            point(x+6, y+6);
            point(x+6, y+7);
            point(x+6, y+8);
            point(x+6, y+9);
            point(x+6, y+10);
            point(x+7, y+6);
            point(x+7, y+7);
            point(x+7, y+8);
            point(x+7, y+9);
            point(x+7, y+10);
            point(x+8, y+6);
            point(x+8, y+7);
            point(x+8, y+8);
            point(x+8, y+9);
            point(x+8, y+10);
            point(x+9, y+6);
            point(x+9, y+7);
            point(x+9, y+8);
            point(x+9, y+9);
            point(x+9, y+10);
            point(x+10, y+6);
            point(x+10, y+7);
            point(x+10, y+8);
            point(x+10, y+9);
            point(x+10, y+10);
            point(x+11, y+6);
            point(x+11, y+7);
            point(x+11, y+8);
            point(x+11, y+9);
            point(x+11, y+10);
            point(x+12, y+6);
            point(x+12, y+7);
            point(x+12, y+8);
            point(x+12, y+9);
            point(x+12, y+10);
            point(x+13, y+6);
            point(x+13, y+7);
            point(x+13, y+8);
            point(x+13, y+9);
            point(x+13, y+10);
            point(x+14, y+6);
            point(x+14, y+7);
            point(x+14, y+8);
            point(x+14, y+9);
    
        };
        var face = function(x, y) {
            //L eye
            stroke(255);
            point(x+4, y+6);
            stroke(0);
            point(x+4, y+7);
            point(x+5, y+6);
            point(x+5, y+7);
            
            //R eye
            stroke(255);
            point(x+11, y+6);
            stroke(0);
            point(x+11, y+7);
            point(x+12, y+6);
            point(x+12, y+7);
            
            //nose
            stroke(0);
            point(x+9, y+7);
            
            //mouth
            stroke(0);
            point(x+5, y+9);
            point(x+8, y+9);
            point(x+11, y+9);
            point(x+5, y+10);
            point(x+6, y+10);
            point(x+7, y+10);
            point(x+8, y+10);
            point(x+9, y+10);
            point(x+10, y+10);
            point(x+11, y+10);
            
            //cheek
            stroke(255, 200, 200);
            point(x+2, y+8);
            point(x+2, y+9);
            point(x+3, y+8);
            point(x+3, y+9);
            point(x+13, y+8);
            point(x+13, y+9);
            point(x+14, y+8);
            point(x+14, y+9);
        };
        var head = function(x, y) {
            earL(x, y);
            earR(x, y);
            neck(x, y);
            face(x, y);
        };
        
        var tart = function(x, y) {
            stroke(0);
            rect(x, y+2, 20, 13);
            rect(x+2, y, 16, 17);
            
            stroke(255, 200, 150);
            rect(x+1, y+1, 18, 15);
            rect(x+2, y+2, 16, 13);
            
            stroke(255, 200, 250);
            point(x+4, y+2);
            point(x+5, y+2);
            point(x+6, y+2);
            point(x+7, y+2);
            point(x+8, y+2);
            point(x+9, y+2);
            point(x+10, y+2);
            point(x+11, y+2);
            point(x+12, y+2);
            point(x+13, y+2);
            point(x+14, y+2);
            point(x+15, y+2);
            point(x+16, y+2);
            point(x+4, y+15);
            point(x+5, y+15);
            point(x+6, y+15);
            point(x+7, y+15);
            point(x+8, y+15);
            point(x+9, y+15);
            point(x+10, y+15);
            point(x+11, y+15);
            point(x+12, y+15);
            point(x+13, y+15);
            point(x+14, y+15);
            point(x+15, y+15);
            point(x+16, y+15);
            
            point(x+2, y+4);
            point(x+2, y+5);
            point(x+2, y+6);
            point(x+2, y+7);
            point(x+2, y+8);
            point(x+2, y+9);
            point(x+2, y+10);
            point(x+2, y+11);
            point(x+2, y+12);
            point(x+2, y+13);
            point(x+18, y+4);
            point(x+18, y+5);
            point(x+18, y+6);
            point(x+18, y+7);
            point(x+18, y+8);
            point(x+18, y+9);
            point(x+18, y+10);
            point(x+18, y+11);
            point(x+18, y+12);
            point(x+18, y+13);
            
            rect(x+3, y+3, 14, 11);
            rect(x+4, y+4, 12, 9);
            rect(x+5, y+5, 10, 7);
            rect(x+6, y+6, 8, 5);
            rect(x+7, y+7, 6, 3);
            rect(x+8, y+8, 4, 1);
            
            stroke(0);
            point(x+1, y+1);
            point(x+19, y+1);
            point(x+1, y+16);
            point(x+19, y+16);
            
            stroke(255, 10, 200);
            point(x+3, y+11);
            point(x+4, y+4);
            point(x+4, y+14);
            point(x+5, y+9);
            point(x+7, y+13);
            point(x+8, y+7);
            point(x+9, y+10);
            point(x+9, y+3);
            point(x+11, y+14);
            point(x+12, y+3);
            point(x+16, y+5);
        };
        var paws = function(x, y) {
            //front
            stroke(0);
            point(x+19 -2, y+18);
            point(x+20 -2, y+19);
            point(x+21 -2, y+19);
            point(x+22 -2, y+17);
            point(x+22 -2, y+18);
            point(x+22 -2, y+19);
            
            stroke(150);
            point(x+21 -2, y+17);
            point(x+21 -2, y+18);
            point(x+20 -2, y+18);
            
            stroke(0);
            point(x+19 -2 -5, y+18);
            point(x+20 -2 -5, y+19);
            point(x+21 -2 -5, y+19);
            point(x+22 -2 -5, y+18);
            point(x+19 -2 -5, y+19);
            
            stroke(150);
            point(x+21 -2 -5, y+18);
            point(x+20 -2 -5, y+18);
            
            //back
            stroke(0);
            point(x+4 -2, y+18);
            point(x+5 -2, y+19);
            point(x+6 -2, y+19);
            point(x+7 -2, y+18);
            point(x+7 -2, y+19);
            
            stroke(150);
            point(x+6 -2, y+18);
            point(x+5 -2, y+18);
            
            stroke(0);
            point(x+4 -2 -5, y+18);
            point(x+5 -2 -5, y+19);
            point(x+6 -2 -5, y+19);
            point(x+7 -2 -5, y+18);
            point(x+7 -2 -8, y+19);
            point(x+8 -2 -5, y+17);
            point(x-1 -2, y+17);
            point(x-1, y+15);
            point(x+0 -2, y+16);
            
            stroke(150);
            point(x+5 -2 -5, y+17);
            point(x+5 -2 -5, y+18);
            point(x+6 -2 -5, y+16);
            point(x+6 -2 -5, y+17);
            point(x+6 -2 -5, y+18);
            point(x+7 -2 -5, y+16);
            point(x+7 -2 -5, y+17);
        };
        var tail = function(x, y) {
            stroke(0);
            point(x-1, y+10 -1);
            point(x-2, y+10 -1);
            point(x-3, y+10 -1);
            point(x-3, y+9 -1);
            point(x-4, y+8 -1);
            point(x-5, y+8 -1);
            point(x-6, y+9 -1);
            point(x-6, y+10 -1);
            point(x-5, y+11 -1);
            point(x-4, y+12 -1);
            point(x-3, y+12 -1);
            point(x-2, y+13 -1);
            point(x-1, y+13 -1);
            
            stroke(150);
            point(x-5, y+9 -1);
            point(x-5, y+10 -1);
            point(x-4, y+9 -1);
            point(x-4, y+10 -1);
            point(x-4, y+11 -1);
            point(x-2, y+11 -1);
            point(x-2, y+12 -1);
            point(x-3, y+11 -1);
            point(x-1, y+11 -1);
            point(x-1, y+12 -1);
        };
        var body = function(x, y) {
            tart(x, y);
            paws(x, y);
            tail(x, y);
        };
        
        var full = function() {
            pushMatrix();
            scale(s);
            noFill();
            body(x-11, y-11);
            head(x-1, y-7);
            
            stroke(255, 0, 0);
            //point(x, y);
            popMatrix();
        }();
    },
};
var Cat = function(skin, s) {
    this.x = 100;
    this.y = height/2;
    this.y2 = height/2;
    this.spd = speed;
    this.scale = s;
    
    this.skin = skin;
};
Cat.prototype.animationFrame = function(spd) {
    //creates animation frame from 0 to 5
    return floor(frames/spd)%6;
};
Cat.prototype.update = function() {
    this.x = 20+mouseX/5*2+ cos(frames*2)*5;
    this.x2 = this.x - width/2;
    var y = abs(this.y - mouseY);
    var y2 = abs(this.y2 - this.y);
    
    if (mouseY > this.y +1) {
        this.y += y/100*(this.spd) +1;
    }
    if (mouseY < this.y -1) {
        this.y -= y/100*(this.spd) +1;
    }
    
    if (this.y2 < this.y +5) {
        this.y2 += y2/100*(this.spd) +this.spd;
    } 
    if (this.y2 > this.y -5) { 
        this.y2 -= y2/100*(this.spd) +this.spd;
    }
};
Cat.prototype.rainbow = function() {
    this.rb = function(x,y,s,x2,y2) {
        this. colors = [
            color(255, 0, 0),
            color(255, 127, 0),
            color(255, 255, 0),
            color(0, 255, 0),
            color(0, 0, 255),
            color(75, 0, 130),
        ];
        rectMode(CORNER);
        strokeWeight(5+s);
        noFill();
        
        var fixEach = function(c, i) {
            return c-10-(s*s) + i*5*(s/3);
        };
        for (var i = 0; i < this.colors.length; i++) {
            var startPX = x,
                startPY = fixEach(y, i);
                
            var bezXC1 = abs(x/4),
                bezYC1 = abs(fixEach(y, i)),
                bezXC2 = x2,
                bezYC2 = abs(fixEach(y2, i))+sin(frames*10-135)*10;
            
            stroke(this.colors[i]);
            beginShape();
            vertex(startPX, startPY-sin(atan2(mouseY-y, mouseX)*2));
            bezierVertex(bezXC1, bezYC1, bezXC2, bezYC2, bezXC2, bezYC2);
            endShape();
        }
        
        rectMode(CORNER);
        strokeWeight(1);
    };
    this.rb(this.x-10, this.y, 
            this.scale, this.x2, this.y2);
};
Cat.prototype.body = function() {
    switch (this.animationFrame(4)) {
        case 0: this.image = this.skin.nyan0; break;
        case 1: this.image = this.skin.nyan1; break;
        case 2: this.image = this.skin.nyan2; break;
        case 3: this.image = this.skin.nyan3; break;
        case 4: this.image = this.skin.nyan4; break;
        case 5: this.image = this.skin.nyan5; break;
    }
    
    pushMatrix();
    translate(this.x-10, this.y+sin(frames*10+135)*5);
    rotate(atan2(mouseY-this.y, mouseX)/3 -1);
        
        this.image(0, 0, this.scale);
        
    popMatrix();
};
Cat.prototype.draw = function() {
    this.update();
    this.rainbow();
    this.body();
};
var Nyan = new Cat(original, 3);




var appleImg = function(x, y, c) {
    var cK = color(0);
    this.colorKey = function(x,y,c) {
        stroke(c);
        point(x+2, y-8);
        point(x+3, y-8);
        point(x+4, y-8);
        point(x+5, y-8);
        point(x+6, y-8);
        point(x+1, y-7);
        point(x+2, y-7);
        point(x+3, y-7);
        point(x+4, y-7);
        point(x+5, y-7);
        point(x+6, y-7);
        point(x-2, y-7);
        point(x-1, y-6);
        point(x+0, y-6);
        point(x+1, y-6);
        point(x+2, y-6);
        point(x+3, y-6);
        point(x+4, y-6);
        point(x+5, y-6);
        point(x-4, y-5);
        point(x-3, y-5);
        point(x-2, y-5);
        point(x-1, y-5);
        point(x+0, y-5);
        point(x+1, y-5);
        point(x+2, y-5);
        point(x+3, y-5);
        point(x+4, y-5);
        point(x+5, y-4);
        point(x-5, y-4);
        point(x-6, y-3);
        point(x-6, y-2);
        point(x-6, y-1);
        point(x-6, y-0);
        point(x-6, y+1);
        point(x+6, y-3);
        point(x+6, y-2);
        point(x+6, y-1);
        point(x+6, y-0);
        point(x+6, y+1);
        point(x+6, y+1);
        point(x+5, y+2);
        point(x+5, y+3);
        point(x-5, y+2);
        point(x-5, y+3);
        point(x+4, y+4);
        point(x-4, y+4);
        point(x-3, y+5);
        point(x-2, y+5);
        point(x-1, y+5);
        point(x+0, y+5);
        point(x+1, y+5);
        point(x+2, y+5);
        point(x+3, y+5);
        point(x+0, y-4);
        point(x+0, y-3);
        point(x-1, y-3);
    };
    
    var cD = color(c[0], c[1], c[2]);
    this.colorDark = function(x,y,c) {
        stroke(c);
        point(x-3, y+4);
        point(x-2, y+4);
        point(x-1, y+4);
        point(x-0, y+4);
        point(x+1, y+4);
        point(x+2, y+4);
        point(x+3, y+4);
        point(x+3, y+3);
        point(x+4, y+3);
        point(x+3, y+2);
        point(x+4, y+2);
        point(x+4, y+1);
        point(x+5, y+1);
        point(x+4, y+0);
        point(x+5, y+0);
        point(x+4, y-1);
        point(x+5, y-1);
        point(x+3, y-2);
        point(x+4, y-2);
        point(x+5, y-2);
        point(x+3, y-3);
        point(x+4, y-3);
        point(x+5, y-3);
        point(x+3, y-4);
        point(x+4, y-4);
        point(x+2, y-3);
        point(x+2, y-4);
        point(x+1, y-3);
        point(x+1, y-4);
        point(x-1, y-4);
        point(x-2, y-3);
        point(x-2, y-4);
    };
    
    var cB = color(red(cD)+50, green(cD)+50, blue(cD)+50);
    this.colorBright = function(x,y,c) {
        stroke(c);
        point(x-4, y-4);
        point(x-3, y-4);
        point(x-5, y-3);
        point(x-4, y-3);
        point(x-3, y-3);
        point(x-5, y-2);
        point(x-4, y-2);
        point(x-3, y-2);
        point(x-2, y-2);
        point(x-1, y-2);
        point(x-0, y-2);
        point(x+1, y-2);
        point(x+2, y-2);
        point(x-5, y-1);
        point(x-4, y-1);
        point(x-3, y-1);
        point(x-2, y-1);
        point(x-1, y-1);
        point(x-0, y-1);
        point(x+1, y-1);
        point(x+2, y-1);
        point(x+3, y-1);
        point(x-5, y+0);
        point(x-4, y+0);
        point(x-3, y+0);
        point(x-2, y+0);
        point(x-1, y+0);
        point(x-0, y+0);
        point(x+1, y+0);
        point(x+2, y+0);
        point(x+3, y+0);
        point(x-5, y+1);
        point(x-4, y+1);
        point(x-3, y+1);
        point(x-2, y+1);
        point(x-1, y+1);
        point(x-0, y+1);
        point(x+1, y+1);
        point(x+2, y+1);
        point(x+3, y+1);
        point(x-4, y+2);
        point(x-3, y+2);
        point(x-2, y+2);
        point(x-1, y+2);
        point(x-0, y+2);
        point(x+1, y+2);
        point(x+2, y+2);
        point(x-4, y+3);
        point(x-3, y+3);
        point(x-2, y+3);
        point(x-1, y+3);
        point(x-0, y+3);
        point(x+1, y+3);
        point(x+2, y+3);
    };
    
    var cL = color(red(cD)+90, green(cD)+90, blue(cD)+80);
    this.colorLight = function(x,y,c) {
        stroke(c);
        point(x-4, y-2);
        point(x-4, y-1);
        point(x-4, y-0);
        point(x-3, y-1);
        point(x-3, y+0);
        point(x-3, y+1);
        point(x-2, y-1);
        point(x-2, y+0);
        point(x-2, y+1);
    };

    this.colorKey(x, y, cK);
    this.colorDark(x, y, cD);
    this.colorBright(x, y, cB);
    this.colorLight(x, y, cL);
};
var appleClrPattern = function() {
    var MAX = 180, MIN = 50;
    
    var RED = ceil(random(MAX));
    var GREEN = ceil(random(MAX));
    var BLUE = ceil(random(MIN));
    
    var MORE = RED>GREEN?RED:GREEN;
    var LESS = RED>GREEN?GREEN:RED;
    
    MORE = random(MAX-40, MAX);
    LESS = random(MIN);

    this.itemColor = [RED, GREEN, BLUE];
};
var Item = function(s) {
    this.x = width+random(width/3);
    this.y = random(height);
    this.w = 20;
    this.h = 20;
    this.s = s;
    this.item = 1;

    this.itemColor = [50, 150, 50];
};
Item.prototype.newPosition = function() {
    this.x = width+random(width/3);
    this.y = random(height);
};
Item.prototype.nextItem = function() {
    this.newPosition();
    this.newColor();
};
Item.prototype.touched = function() {
    return ((
        this.x < Nyan.x +this.h && 
        this.x > Nyan.x -this.h
    ) && (
        this.y < Nyan.y +20 && 
        this.y > Nyan.y -20
    ));
};
Item.prototype.leftScreen = function() {
    return this.x < -this.w;
};
Item.prototype.update = function() {
    this.x -= speed;
    
    if (this.touched()) {
        score += 10;
        this.nextItem();
    }
    
    if (this.leftScreen()) {
        this.nextItem();
    }
    
};
Item.prototype.draw = function() {
    this.update();
    
    switch (this.item) {
        case 1: 
            this.image = appleImg;
            this.newColor = appleClrPattern;
        break;
    }
    
    pushMatrix();
    translate(this.x, this.y);
    scale(this.s);
        this.image(0, 0, this.itemColor);
    popMatrix();
};
var item = new Item(3);




var star, starNumber = 20, starImg = {
    star0: function(x, y) {
        stroke(220);
        point(x, y);
    },
    star1: function(x, y) {
        stroke(220);
        point(x-1, y);
        point(x, y-1);
        point(x+1, y);
        point(x, y+1);
    },
    star2: function(x, y) {
        stroke(220);
        point(x-2, y-2);
        point(x-2, y+2);
        point(x-1, y-1);
        point(x-1, y+1);
        point(x+1, y-1);
        point(x+1, y+1);
        point(x+2, y-2);
        point(x+2, y+2);
    },
    star3: function(x, y) {
        stroke(220);
        point(x-2, y);
        point(x-3, y);
        point(x, y-2);
        point(x, y-3);
        point(x+2, y);
        point(x+3, y);
        point(x, y+2);
        point(x, y+3);
        point(x, y);
    },
    star4: function(x, y) {
        stroke(220);
        point(x-4, y);
        point(x-3, y-3);
        point(x, y-4);
        point(x+3, y-3);
        point(x+4, y);
        point(x+3, y+3);
        point(x, y+4);
        point(x-3, y+3);
    },
    star5: function(x, y) {
        stroke(220);
        point(x-5, y);
        point(x, y-5);
        point(x+5, y);
        point(x, y+5);
    },
};
var randPos = [], randVals = [];
do {randVals.push(floor(random(6)));}
while (randVals.length < starNumber);
var stars = function() {
    pushMatrix();
    scale(2);
    for (var i = 0; i < starNumber; i++) {
        randPos.push([floor(random(width)), floor(random(height))]);
        switch (floor(frames/5+randVals[i])%6) {
                case 0:
                    star = starImg.star0;
                break;
                
                case 1:
                    star = starImg.star1;
                break;
                
                case 2:
                    star = starImg.star2;
                break;
                
                case 3:
                    star = starImg.star3;
                break;
                
                case 4:
                    star = starImg.star4;
                break;
                
                case 5:
                    star = starImg.star5;
                break;
            }
        star(randPos[i][0]-=Nyan.spd*Nyan.spd/10, randPos[i][1]);
        //point();
    }
    for (var i = 0; i < starNumber/3*2; i++) {
        pushMatrix();
        translate(randPos[i][0]+=0.333, randPos[i][1]);
        popMatrix();
    }
    popMatrix();
    for (var i = 0; i < starNumber; i++) {
        if(randPos[i][0] < 0){
            randPos[i] = [floor(random(width)+width/3), floor(random(height))];
        }
    }
};




var lScore;
var square = function(x,y) {
    point(x, y);
    point(x+1, y);
    point(x, y+1);
    point(x+1, y+1);
};
var numberImg = {
    n0: function(x,y) {
        square(x-4, y+4);
        square(x-4, y);
        square(x-4, y-4);
        square(x-8, y-8);
        square(x-12, y-8);
        square(x-16, y-4);
        square(x-16, y-0);
        square(x-16, y+4);
        square(x-8, y+8);
        square(x-12, y+8);
    },
    n1: function(x,y) {
        square(x-4, y+8);
        square(x-4, y+4);
        square(x-4, y-0);
        square(x-4, y-4);
        square(x-4, y-8);
        square(x-8, y-4);
        square(x-12, y-0);
    },
    n2: function(x,y) {
        square(x-4, y+8);
        square(x-8, y+8);
        square(x-12, y+8);
        square(x-16, y+8);
        square(x-12, y+4);
        square(x-8, y-0);
        square(x-4, y-4);
        square(x-16, y-4);
        square(x-12, y-8);
        square(x-8, y-8);
    },
    n3: function(x,y) {
        square(x-8, y+8);
        square(x-12, y+8);
        square(x-4, y+4);
        square(x-16, y+4);
        square(x-8, y-0);
        square(x-4, y-4);
        square(x-16, y-4);
        square(x-12, y-8);
        square(x-8, y-8);
    },
    n4: function(x,y) {
        square(x-4, y+8);
        square(x-4, y+4);
        square(x-4, y-0);
        square(x-4, y-4);
        square(x-4, y-8);
        square(x-8, y-8);
        square(x-12, y-4);
        square(x-16, y-0);
        square(x-12, y-0);
        square(x-8, y-0);
    },
    n5: function(x,y) {
        square(x-8, y+8);
        square(x-12, y+8);
        square(x-4, y+4);
        square(x-16, y+4);
        square(x-4, y-0);
        square(x-16, y-4);
        square(x-12, y-4);
        square(x-8, y-4);
        square(x-16, y-8);
        square(x-12, y-8);
        square(x-8, y-8);
        square(x-4, y-8);
    },
    n6: function(x,y) {
        square(x-8, y+8);
        square(x-12, y+8);
        square(x-4, y+4);
        square(x-16, y+4);
        square(x-16, y-0);
        square(x-12, y-0);
        square(x-8, y-0);
        square(x-12, y-4);
        square(x-8, y-8);
    },
    n7: function(x,y) {
        square(x-16, y+8);
        square(x-12, y+4);
        square(x-8, y-0);
        square(x-4, y-4);
        square(x-4, y-8);
        square(x-8, y-8);
        square(x-12, y-8);
        square(x-16, y-8);
    },
    n8: function(x,y) {
        square(x-8, y+8);
        square(x-12, y+8);
        square(x-4, y+4);
        square(x-16, y+4);
        square(x-8, y-0);
        square(x-12, y-0);
        square(x-4, y-4);
        square(x-16, y-4);
        square(x-12, y-8);
        square(x-8, y-8);
    },
    n9: function(x,y) {
        square(x-8, y-8);
        square(x-12, y-8);
        square(x-4, y-4);
        square(x-16, y-4);
        square(x-12, y-0);
        square(x-8, y-0);
        square(x-12, y+8);
        square(x-8, y+4);
        square(x-4, y+0);
    },
};
var numerize = function(n, x, y, s) {
    x=x/s;y=y/s+10;
    switch(n) {
        case 0: this.number = numberImg.n0; break;
        case 1: this.number = numberImg.n1; break;
        case 2: this.number = numberImg.n2; break;
        case 3: this.number = numberImg.n3; break;
        case 4: this.number = numberImg.n4; break;
        case 5: this.number = numberImg.n5; break;
        case 6: this.number = numberImg.n6; break;
        case 7: this.number = numberImg.n7; break;
        case 8: this.number = numberImg.n8; break;
        case 9: this.number = numberImg.n9; break;
    }
    pushMatrix();
    scale(s);
    this.number(x, y);
    popMatrix();
};
var drawScore = function(n, x, y, s) {
    n = n.toString().split('').reverse();
    var c = color(224, 209, 0);
    
    for (var i = 0; i < n.length; i++) {
        strokeWeight(4.5);
        stroke(red(c), green(c), blue(c));
        numerize(Number(n[i]), x - i*18*s, y, s);
        
        strokeWeight(3.2);
        stroke(red(c), green(c)+80, blue(c)+20);
        numerize(Number(n[i]), x -i*18*s -s/2, y -s/2, s);
        
        strokeWeight(1.2);
        stroke(red(c)+220, green(c)+220, blue(c)+200);
        numerize(Number(n[i]), x -i*18*s -s/2 -1, y -s/2 -1, s);
    }
    speed = score.toString().length+1;
};




draw = function() {
    background(20, 80, 160);
    frames++;
    
    stars();
    drawScore(score, width -5, 5, 2);
    item.draw();
    Nyan.draw();
};