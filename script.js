document.addEventListener('DOMContentLoaded', function(){       //creating a function which starts after the document is loaded
  let wrapper = document.getElementById('wrapper');             //setting a variable by accessing wrapper
  let topLayer = wrapper.querySelector('.top');                 //setting a variable by accessing top layer of a wraper
  let handle = wrapper.querySelector('.handle');                //setting a variable by accessing a handle
  let skew = 0;
  let delta = 0;

  if(wrapper.className.indexOf('skewed') != -1){                //testing if wrapper has a class of skewed
    skew = 1000;                                                //setting skew to 1000
  }
  
  wrapper.addEventListener('mousemove', function(e){            //adding mouseover event
    delta = (e.clientX - window.innerWidth / 2) * 0.5;          //getting delta of the position betwwen the mouse and the center point
  
    handle.style.left = e.clientX + delta + 'px';               //changing handle property

    topLayer.style.width= e.clientX + skew + delta + 'px';      //adjusting the top handle width to go along with the handle
  });
});